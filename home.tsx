import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Home as HomeIcon, 
  Building2, 
  Sparkles, 
  Clock, 
  Shield, 
  CheckCircle2,
  Star,
  ArrowRight
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-cleaning.jpg";
import homeCleaningImage from "@/assets/home-cleaning.jpg";
import officeCleaningImage from "@/assets/office-cleaning.jpg";
import specialtyCleaningImage from "@/assets/specialty-cleaning.jpg";

const Home = () => {
  const services = [
    {
      icon: HomeIcon,
      title: "Home Cleaning",
      description: "Comprehensive residential cleaning for a spotless, comfortable home.",
      image: homeCleaningImage,
      link: "/services/home"
    },
    {
      icon: Building2,
      title: "Office Cleaning",
      description: "Professional commercial cleaning to maintain a productive workspace.",
      image: officeCleaningImage,
      link: "/services/office"
    },
    {
      icon: Sparkles,
      title: "Specialty Cleaning",
      description: "Deep cleaning and specialized services for unique needs.",
      image: specialtyCleaningImage,
      link: "/services/specialty"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Trusted & Insured",
      description: "Fully licensed, bonded, and insured for your peace of mind."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book appointments that fit your busy schedule, including weekends."
    },
    {
      icon: CheckCircle2,
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee on all our cleaning services."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Exceptional service! My home has never looked better. The team is professional, thorough, and trustworthy."
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "We use ESTHY WAT for our office cleaning and couldn't be happier. Reliable, efficient, and detail-oriented."
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "The deep cleaning service exceeded my expectations. Every corner sparkles! Highly recommend."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional cleaning service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Spotless Spaces,
              <span className="block text-primary">Sparkling Results</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Professional cleaning services for homes, offices, and specialty spaces. Excellence in every detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/booking">
                <Button size="lg" className="bg-gradient-accent text-secondary-foreground hover:opacity-90 transition-opacity shadow-lg w-full sm:w-auto">
                  Book Online Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-none">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Link to={service.link}>
                    <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-glow rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-glow rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Ready for a Cleaner Space?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Book your professional cleaning service today and experience the ESTHY WAT difference.
            </p>
            <Link to="/booking">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors shadow-lg">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
