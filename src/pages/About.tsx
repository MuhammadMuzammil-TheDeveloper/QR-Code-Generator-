import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import{ Helmet } from 'react-helmet';
import { 
  QrCode, 
  Heart, 
  Users, 
  Lightbulb, 
  Target, 
  Shield,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const About = () => {
  
  const values = [
    {
      icon: Heart,
      title: "Built with Love",
      description: "Every pixel is crafted with care to provide the best user experience possible."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data stays on your device. We believe in protecting your privacy completely."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built for the community, by the community. Your feedback shapes our roadmap."
    },
    {
      icon: Sparkles,
      title: "Always Free",
      description: "Beautiful QR codes should be accessible to everyone, forever and always."
    }
  ];

  const team = [
    {
      name: "Innovation Team",
      role: "Product Development",
      description: "Constantly pushing the boundaries of what's possible with QR technology."
    },
    {
      name: "Design Team",
      role: "User Experience",
      description: "Creating beautiful, intuitive interfaces that make QR generation a joy."
    },
    {
      name: "Engineering Team",
      role: "Technical Excellence",
      description: "Building fast, reliable, and secure tools that work perfectly every time."
    }
  ];

  return (
    <>
  <Helmet>
    <title>About | QR Sparkle - React QR Code Generator</title>
    <meta
      name="description"
      content="Learn the story behind QR Sparkle — a privacy-first, beautifully designed QR code generator built with React. Meet the teams that make it happen."
    />
    <meta
      name="keywords"
      content="About QR Sparkle, React QR Code Generator, Team, Mission, Privacy, Free QR Generator"
    />
    <meta name="author" content="Muhammad Muzammil" />

    {/* Open Graph for Facebook/LinkedIn */}
    <meta property="og:title" content="About | QR Sparkle - Free QR Generator" />
    <meta property="og:description" content="Our story, our mission, and the amazing team behind QR Sparkle." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://qr-codegenerato.netlify.app/about" />
    <meta property="og:image" content="https://qr-codegenerato.netlify.app/og-banner.png" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="About | QR Sparkle" />
    <meta name="twitter:description" content="Get to know the mission and values behind QR Sparkle." />
    <meta name="twitter:image" content="https://qr-codegenerato.netlify.app/og-banner.png" />
  </Helmet>

    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 mb-4">
          <QrCode className="w-8 h-8 text-primary animate-float" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            About QR Sparkle
          </h1>
        </div>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
          Born from the simple belief that creating beautiful QR codes should be effortless, 
          instant, and accessible to everyone.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Story
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              QR Sparkle began with a simple observation: existing QR code generators were either 
              clunky, slow, or came with hidden costs. We believed there had to be a better way.
            </p>
            <p>
              Our mission is to democratize QR code creation - making it beautiful, instant, and 
              completely free for everyone. Whether you're a small business owner, a developer, 
              or someone who just needs to share a link quickly, QR Sparkle is here for you.
            </p>
            <p>
              Every feature we build, every animation we craft, and every line of code we write 
              is guided by one principle: your experience should be delightful.
            </p>
          </div>
        </div>

        <Card className="animate-scale-in bg-gradient-primary p-8 text-center border-0">
          <div className="text-white space-y-6">
            <Target className="w-16 h-16 mx-auto animate-float" />
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-white/90 text-lg">
              To make QR code generation beautiful, instant, and accessible to everyone, 
              while respecting your privacy and never charging a fee.
            </p>
          </div>
        </Card>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
          What We Believe
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="animate-scale-in bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-soft hover:scale-105 transition-all duration-300 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
          Built by Amazing Teams
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="animate-fade-in bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-soft hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Vision Section */}
      <div className="text-center animate-fade-in">
        <Card className="bg-card/30 backdrop-blur-sm border-border/50 p-8 max-w-4xl mx-auto">
          <Lightbulb className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
          <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Looking Forward
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            We're just getting started. Our roadmap includes advanced customization options, 
            analytics features, bulk generation capabilities, and integrations with your 
            favorite tools - all while maintaining our commitment to simplicity and privacy.
          </p>
          <Button variant="premium" size="lg" asChild>
            <Link to="/contact">
              Join Our Journey
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </Card>
      </div>
    </div>
    </>
  );
};

export default About;
