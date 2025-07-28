import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { 
  Zap, 
  Download, 
  Smartphone, 
  Shield, 
  Palette, 
  Globe, 
  QrCode,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Generation",
      description: "Generate QR codes in real-time with lightning-fast processing. No waiting, no delays.",
      color: "text-yellow-500"
    },
    {
      icon: Download,
      title: "Free Downloads",
      description: "Download your QR codes as high-quality PNG images absolutely free, no watermarks.",
      color: "text-green-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Perfect experience on all devices - desktop, tablet, and mobile. Responsive by design.",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data never leaves your browser. Everything is processed locally for maximum privacy.",
      color: "text-purple-500"
    },
    {
      icon: Palette,
      title: "Custom Styling",
      description: "Beautiful purple-themed QR codes that stand out while maintaining perfect scannability.",
      color: "text-pink-500"
    },
    {
      icon: Globe,
      title: "Universal Support",
      description: "Works with URLs, text, email, phone numbers, WiFi passwords, and much more.",
      color: "text-cyan-500"
    }
  ];

  const useCases = [
    "Website URLs and landing pages",
    "Contact information and vCards",
    "WiFi passwords for guests",
    "Social media profiles",
    "Product information and reviews",
    "Event tickets and invitations",
    "App download links",
    "Menu and restaurant info"
  ];

  return (
  <>
    <Helmet>
      <title>Features | QR Sparkle - Lightning Fast QR Code Generator</title>
      <meta 
        name="description" 
        content="Explore the powerful features of QR Sparkle – fast generation, privacy-first, free downloads, custom styling, and mobile-ready QR codes." 
      />
      <meta 
        name="keywords" 
        content="QR code generator features, QR Sparkle, privacy QR, free QR download, responsive QR, custom QR design, react qr code" 
      />
      <meta name="author" content="Muhammad Muzammil" />
      <meta property="og:title" content="Features | QR Sparkle" />
      <meta property="og:description" content="Discover all the features that make QR Sparkle a top-tier QR code generator." />
      <meta property="og:url" content="https://qr-codegenerato.netlify.app/features" />
      <meta property="og:image" content="https://qr-codegenerato.netlify.app/og-banner.png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Features | QR Sparkle" />
      <meta name="twitter:description" content="Fast. Free. Beautiful. Learn what makes QR Sparkle stand out." />
      <meta name="twitter:image" content="https://qr-codegenerato.netlify.app/og-banner.png" />
    </Helmet>

    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 mb-4">
          <QrCode className="w-8 h-8 text-primary animate-float" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Powerful Features
          </h1>
        </div>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
          Discover why QR Sparkle is the perfect tool for all your QR code needs. 
          Fast, beautiful, and completely free to use.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="animate-scale-in bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-soft hover:scale-105 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Use Cases Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Perfect for Every Use Case
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            QR Sparkle adapts to your needs, whether you're a business owner, 
            marketer, developer, or just someone who wants to share information quickly.
          </p>
          <div className="grid grid-cols-1 gap-3">
            {useCases.map((useCase, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-scale-in">
          <Card className="bg-gradient-primary p-8 text-center border-0">
            <div className="text-white space-y-6">
              <QrCode className="w-16 h-16 mx-auto animate-float" />
              <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
              <p className="text-white/90">
                Join thousands of users who trust QR Sparkle for their QR code needs.
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                asChild
                className="hover:scale-105 transition-transform duration-300"
              >
                <Link to="/">
                  Create Your First QR Code
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in">
        {[
          { number: "50K+", label: "QR Codes Generated" },
          { number: "99.9%", label: "Uptime" },
          { number: "0ms", label: "Data Storage" },
          { number: "∞", label: "Free Usage" }
        ].map((stat, index) => (
          <div key={index} className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {stat.number}
            </div>
            <div className="text-muted-foreground text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Features;
