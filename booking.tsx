import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, CreditCard } from "lucide-react";

const Booking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold">
              Book Your <span className="text-primary">Cleaning Service</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Schedule your professional cleaning in just a few simple steps
            </p>
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { icon: Calendar, step: "1", title: "Choose Service", desc: "Select your cleaning type" },
                { icon: Clock, step: "2", title: "Pick Date & Time", desc: "Choose when you need us" },
                { icon: MapPin, step: "3", title: "Enter Address", desc: "Tell us where to go" },
                { icon: CreditCard, step: "4", title: "Payment", desc: "Secure online checkout" }
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-md text-center">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-xs font-semibold text-primary">STEP {item.step}</div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Booking Form Placeholder */}
            <Card className="border-none shadow-xl">
              <CardContent className="p-12 text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
                  <Calendar className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold">Booking Form Coming Soon</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Our advanced booking system will be integrated here, allowing you to schedule and pay for services seamlessly.
                </p>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-4">In the meantime, give us a call:</p>
                  <Button size="lg" className="bg-gradient-accent text-secondary-foreground hover:opacity-90">
                    <a href="tel:+15551234567">Call (555) 123-4567</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
