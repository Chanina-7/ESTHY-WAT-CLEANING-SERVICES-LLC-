import { Link } from "react-router-dom";
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">ESTHY WAT</span>
                <span className="text-xs text-muted-foreground -mt-1">Cleaning Services</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional cleaning services for homes, offices, and specialty spaces. Excellence in every detail.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/booking" className="text-sm text-muted-foreground hover:text-primary transition-colors">Book Now</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/home" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home Cleaning</Link></li>
              <li><Link to="/services/office" className="text-sm text-muted-foreground hover:text-primary transition-colors">Office Cleaning</Link></li>
              <li><Link to="/services/specialty" className="text-sm text-muted-foreground hover:text-primary transition-colors">Specialty Cleaning</Link></li>
              <li><Link to="/services/recurring" className="text-sm text-muted-foreground hover:text-primary transition-colors">Recurring Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>info@esthywat.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>123 Clean Street<br />Suite 100<br />City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ESTHY WAT Cleaning Services LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
