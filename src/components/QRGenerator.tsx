import { useState, useRef } from 'react';
import QRCode from 'qrcode';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Download, QrCode, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const QRGenerator = () => {
  const [text, setText] = useState('');
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  const generateQR = async () => {
    if (!text.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text or URL to generate QR code",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const dataUrl = await QRCode.toDataURL(text, {
        width: 300,
        margin: 2,
        color: {
          dark: '#8B5CF6',
          light: '#FFFFFF'
        },
        errorCorrectionLevel: 'M'
      });
      setQrDataUrl(dataUrl);
      
      toast({
        title: "Success!",
        description: "QR code generated successfully",
      });
    } catch (error) {
      console.error('Error generating QR code:', error);
      toast({
        title: "Error",
        description: "Failed to generate QR code",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadQR = () => {
    if (!qrDataUrl) return;
    
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = qrDataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Downloaded!",
      description: "QR code saved to your device",
    });
  };

  const copyToClipboard = async () => {
    if (!text.trim()) return;
    
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      
      toast({
        title: "Copied!",
        description: "Text copied to clipboard",
      });
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <QrCode className="w-8 h-8 text-primary animate-float" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              QR Sparkle
            </h1>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Generate beautiful QR codes instantly. Perfect for URLs, text, contact info, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="animate-scale-in bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="w-5 h-5 text-primary" />
                Generate QR Code
              </CardTitle>
              <CardDescription>
                Enter your text, URL, or any content to generate a QR code
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Textarea
                  placeholder="Enter text, URL, email, phone number, or any content..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="min-h-[120px] bg-secondary/50 border-border/50 focus:border-primary/50 transition-colors"
                  maxLength={2000}
                />
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{text.length}/2000 characters</span>
                  {text && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyToClipboard}
                      className="text-xs"
                    >
                      {copied ? (
                        <Check className="w-3 h-3 mr-1" />
                      ) : (
                        <Copy className="w-3 h-3 mr-1" />
                      )}
                      {copied ? 'Copied!' : 'Copy'}
                    </Button>
                  )}
                </div>
              </div>
              
              <Button
                onClick={generateQR}
                disabled={isGenerating || !text.trim()}
                variant="premium"
                className="w-full"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                    Generating...
                  </>
                ) : (
                  <>
                    <QrCode className="w-4 h-4 mr-2" />
                    Generate QR Code
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Preview Section */}
          <Card className="animate-scale-in bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300">
            <CardHeader>
              <CardTitle>QR Code Preview</CardTitle>
              <CardDescription>
                Your generated QR code will appear here
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center min-h-[300px] bg-secondary/30 rounded-lg border border-border/50">
                {qrDataUrl ? (
                  <div className="text-center space-y-4 animate-scale-in">
                    <img
                      src={qrDataUrl}
                      alt="Generated QR Code"
                      className="mx-auto rounded-lg shadow-soft hover:scale-105 transition-transform duration-300"
                    />
                    <Button
                      onClick={downloadQR}
                      variant="outline"
                      className="w-full"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download QR Code
                    </Button>
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground">
                    <QrCode className="w-16 h-16 mx-auto mb-2 opacity-50" />
                    <p>Enter text above and click "Generate QR Code"</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-16 animate-fade-in">
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Why Choose QR Sparkle?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Instant Generation",
                description: "Generate QR codes in real-time with no delays",
                icon: "⚡"
              },
              {
                title: "High Quality",
                description: "Crystal clear QR codes optimized for scanning",
                icon: "✨"
              },
              {
                title: "Free Download",
                description: "Download your QR codes as PNG images for free",
                icon: "💎"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-soft hover:scale-105 transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRGenerator;