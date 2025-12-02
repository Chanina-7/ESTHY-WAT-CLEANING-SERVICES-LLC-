import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Heart, 
  Users, 
  Award,
  ArrowRight
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cleaning.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every cleaning task, ensuring the highest quality standards."
    },
    {
      icon: Heart,
      title: "Care",
      description: "We treat every space as if it were our own, with attention, respect, and dedication."
    },
    {
      icon: Users,
      title: "Trust",
      description: "Building lasting relationships through reliability, transparency, and professionalism."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Honest business practices and ethical treatment of clients and team members."
    }
  ];

  const stats = [
    { number: "5000+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Team Members" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="About ESTHY WAT Cleaning Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-4 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold">
              About <span className="text-primary">ESTHY WAT</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in professional cleaning services since 2014
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Our Story</h2>
              <p className="text-xl text-muted-foreground">
                Building a legacy of cleanliness and trust
              </p>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Founded in 2014, ESTHY WAT Cleaning Services LLC began with a simple mission: to provide exceptional cleaning services that transform spaces and enhance lives. What started as a small local operation has grown into a trusted name in professional cleaning across our service area.
              </p>
              
              <p>
                Our founder, Esthy Watkins, recognized a need for reliable, detail-oriented cleaning services that truly care about the spaces they maintain. With years of experience in the hospitality industry, Esthy brought a level of professionalism and attention to detail that set ESTHY WAT apart from day one.
              </p>
              
              <p>
                Today, we're proud to serve thousands of residential and commercial clients with the same dedication and excellence that defined our first day in business. Our team of trained professionals shares our commitment to quality, integrity, and customer satisfaction.
              </p>

              <p>
                We believe that a clean space is more than just aesthetics—it's about creating environments where people can thrive, be productive, and feel comfortable. Whether it's a family home, a bustling office, or a specialty space requiring deep cleaning, we approach every project with the same level of care and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Every member of the ESTHY WAT team undergoes thorough background checks and comprehensive training in the latest cleaning techniques and safety protocols. We invest in our people because we believe that a motivated, well-trained team delivers the best results for our clients.
            </p>
            <p className="text-lg text-muted-foreground">
              From our cleaning professionals to our customer service team, everyone at ESTHY WAT is committed to exceeding your expectations and building lasting relationships based on trust and exceptional service.
            </p>
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
              Join Our Family of Satisfied Clients
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Experience the ESTHY WAT difference. Book your cleaning service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors shadow-lg w-full sm:w-auto">
                  Book Now
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

export default About;
