import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  QrCode, 
  Mail, 
  MessageSquare, 
  Send,
  MapPin,
  Clock,
  Phone,
  Heart
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent! 🎉",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@qrsparkle.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      content: "Available 24/7",
      description: "Instant support when you need it"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "< 24 hours",
      description: "Usually much faster!"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 mb-4">
          <QrCode className="w-8 h-8 text-primary animate-float" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Get in Touch
          </h1>
        </div>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
          Have questions, feedback, or just want to say hello? We'd love to hear from you!
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="animate-scale-in bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="bg-secondary/50 border-border/50 focus:border-primary/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="bg-secondary/50 border-border/50 focus:border-primary/50"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="bg-secondary/50 border-border/50 focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your question or feedback..."
                    className="min-h-[120px] bg-secondary/50 border-border/50 focus:border-primary/50"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="premium"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="animate-fade-in bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-soft hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <info.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-primary font-medium mb-1">{info.content}</p>
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* FAQ Card */}
          <Card className="animate-fade-in bg-gradient-primary p-6 text-center border-0" style={{ animationDelay: '0.3s' }}>
            <div className="text-white space-y-4">
              <Heart className="w-12 h-12 mx-auto animate-pulse" />
              <h3 className="text-xl font-bold">Quick Questions?</h3>
              <p className="text-white/90 text-sm">
                Check out our FAQ section or try our live chat for instant answers!
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-16 text-center animate-fade-in">
        <Card className="bg-card/30 backdrop-blur-sm border-border/50 p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            We Value Your Feedback
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            QR Sparkle is built for the community, and your input helps us make it better every day. 
            Whether you have feature requests, bug reports, or just want to share how you're using QR codes, 
            we're excited to hear from you!
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Contact;