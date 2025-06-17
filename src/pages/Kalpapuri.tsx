
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Users, Calendar, Award, BookOpen, Star } from "lucide-react";

const Kalpapuri = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const activities = [
    {
      title: "Langri para",
      description: "Modern artistic expressions and mixed media techniques",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg",
      Location: "Ministry of Social Welfare, Rowfabad, Chittagong.",
    },
    {
      title: "Shishu Poribar",
      description: "Three-dimensional art forms and ceramic techniques",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg",
      Location: "Alikadam Bandarban Hilly district, Chittagong.",
    },
    {
      title: "Shishu Poribar",
      description: "Three-dimensional art forms and ceramic techniques",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg",
      Location: "Alikadam Bandarban Hilly district, Chittagong.",
    }
  ];

  const features = [
    { icon: Users, title: "Expert Instructors", description: "Learn from renowned artists" },
    { icon: Calendar, title: "Flexible Schedule", description: "Weekend and evening classes" },
    { icon: Award, title: "Certification", description: "Recognized credentials" },
    { icon: BookOpen, title: "Resources", description: "Comprehensive study materials" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-santaran-gold to-santaran-terracotta">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-playfair font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="artistic-text">Kalpapuri</span>
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Nurturing young minds through art and imagination         
          </p>
        </div>
      </div>

      {/* activities Section */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-santaran-charcoal">
              Kalpapuri's ongoing activities
            </h2>
            <p className="text-lg text-justify text-santaran-charcoal/80 max-w-3xl mx-auto">
              Kalpapuri, a lasting public art initiative by Santaran, celebrates the magical world of children's creativity—where imagination and wonder take flight. Observing the pressures that weigh down young minds, Santaran began nurturing a healthy bond between Bengali and Pahari children through art workshops in Alikadam from 2000 to 2008. Officially launched as a permanent program in 2009, Kalpapuri supports children aged 6 to 12, guiding them to become thoughtful, creative leaders of tomorrow’s generations. Through eco-friendly artistic training and outreach projects like Kalpoloker Chitra, Santaran spread awareness of child psychology, fostering a future rich in imagination, cultural harmony, and artistic values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activities, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img 
                    src={activities.image} 
                    alt={activities.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-santaran-charcoal font-playfair">{activities.title}</CardTitle>
                  <CardDescription>{activities.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-santaran-terracotta font-medium"> Location: {activities.Location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Button className="bg-santaran-teal hover:bg-santaran-teal/90 text-white">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-santaran-teal/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-santaran-teal/20 transition-colors duration-300">
                  <feature.icon className="h-10 w-10 text-santaran-teal" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-santaran-charcoal mb-3">{feature.title}</h3>
                <p className="text-santaran-charcoal/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Kalpapuri;
