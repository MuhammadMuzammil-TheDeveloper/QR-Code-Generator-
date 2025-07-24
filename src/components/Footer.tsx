import { Link } from 'react-router-dom';
import { QrCode, Heart, Github, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Features', path: '/features' },
      { label: 'About', path: '/about' },
      { label: 'Contact', path: '/contact' },
    ],
    Resources: [
      { label: 'Documentation', path: '#' },
      { label: 'API Guide', path: '#' },
      { label: 'Support', path: '/contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', path: '#' },
      { label: 'Terms of Service', path: '#' },
      { label: 'Cookie Policy', path: '#' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '/contact', label: 'Email' },
  ];

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4 animate-fade-in">
            <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <QrCode className="w-8 h-8 text-primary animate-float" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                QR Sparkle
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Generate beautiful QR codes instantly. Perfect for URLs, text, contact info, and more. 
              Fast, free, and designed with Muhammad-Muzammil.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:scale-110 transition-transform duration-300"
                >
                  {social.href.startsWith('/') ? (
                    <Link to={social.href} aria-label={social.label}>
                      <social.icon className="w-5 h-5" />
                    </Link>
                  ) : (
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="w-5 h-5" />
                    </a>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={category} className="space-y-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="font-semibold text-foreground">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.path.startsWith('#') ? (
                      <a
                        href={link.path}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 animate-fade-in">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} QR Sparkle. Made with Muhammad-Muzammil for the web.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
