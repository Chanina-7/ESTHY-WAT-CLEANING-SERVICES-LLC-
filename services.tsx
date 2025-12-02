import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Home as HomeIcon, 
  Building2, 
  Sparkles, 
  Calendar,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import homeCleaningImage from "@/assets/home-cleaning.jpg";
import officeCleaningImage from "@/assets/office-cleaning.jpg";
import specialtyCleaningImage from "@/assets/specialty-cleaning.jpg";

const Services = () => {
  const services = [
    {
      icon: HomeIcon,
      title: "Home Cleaning",
      description: "Complete residential cleaning services to keep your home spotless and welcoming.",
      image: homeCleaningImage,
      features: [
        "Dusting and surface cleaning",
        "Vacuuming and mopping floors",
        "Kitchen and bathroom sanitization",
        "Bedroom and living area tidying",
        "Window cleaning (interior)"
      ],
      link: "/services/home"
    },
    {
      icon: Building2,
      title: "Office Cleaning",
      description: "Professional commercial cleaning to maintain a productive and healthy work environment.",
      image: officeCleaningImage,
      features: [
        "Workspace and desk cleaning",
        "Conference room maintenance",
        "Restroom sanitization",
        "Break room cleaning",
        "Floor care and maintenance"
      ],
      link: "/services/office"
    },
    {
      icon: Sparkles,
      title: "Specialty Cleaning",
      description: "Deep cleaning and specialized services for those times when you need extra attention.",
      image: specialtyCleaningImage,
      features: [
        "Deep carpet and upholstery cleaning",
        "Move-in/move-out cleaning",
        "Post-construction cleanup",
        "Tile and grout restoration",
        "High-touch surface disinfection"
      ],
      link: "/services/specialty"
    },
    {
      icon: Calendar,
      title: "Recurring Services",
      description: "Flexible scheduling options to keep your space consistently clean.",
      image: homeCleaningImage,
      features: [
        "Weekly cleaning plans",
        "Bi-weekly maintenance",
        "Monthly deep cleaning",
        "Customizable frequency",
        "Priority scheduling"
      ],
      link: "/services/recurring"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold">
              Our <span className="text-primary">Cleaning Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional cleaning solutions tailored to meet your specific needs, whether residential, commercial, or specialty services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="overflow-hidden border-none shadow-xl h-full">
                    <div className="relative h-[400px]">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-6 left-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-glow">
                        <service.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                  </Card>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-4xl font-bold">{service.title}</h2>
                  <p className="text-lg text-muted-foreground">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to="/booking">
                      <Button className="bg-gradient-accent text-secondary-foreground hover:opacity-90 transition-opacity w-full sm:w-auto">
                        Book This Service
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <Link to={service.link}>
                      <Button variant="outline" className="w-full sm:w-auto">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
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
              Need a Custom Cleaning Solution?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Contact us to discuss your specific cleaning needs and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors shadow-lg w-full sm:w-auto">
                  Book Online
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-background/10 text-primary-foreground border-primary-foreground/20 hover:bg-background/20 w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
