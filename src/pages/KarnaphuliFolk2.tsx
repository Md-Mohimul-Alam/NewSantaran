
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Users, Globe, Music, Calendar, Award } from "lucide-react";

const KarnaphuliFolkSec = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const editions = [
    {
      title: "First Triennial (2018-2021)",
      description: "Inaugural celebration focusing on river-based folk traditions",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      participants: "150 communities",
      events: "45 programs",
      theme: "Rivers of Heritage"
    },
    {
      title: "Second Triennial (2021-2024)",
      description: "Expanded focus on tribal and indigenous cultural practices",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      participants: "200 communities",
      events: "65 programs",
      theme: "Voices of the Hills"
    },
    {
      title: "Upcoming Triennial (2024-2027)",
      description: "Future edition celebrating modern interpretations of folk traditions",
      image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg",
      participants: "250+ communities",
      events: "80+ programs",
      theme: "Folk Renaissance"
    }
  ];

  const highlights = [
    { icon: Users, number: "500+", label: "Artists Participated" },
    { icon: Globe, number: "15", label: "Districts Covered" },
    { icon: Music, number: "120", label: "Folk Forms Documented" },
    { icon: Award, number: "25", label: "Cultural Awards Given" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-santaran-terracotta via-santaran-gold to-santaran-teal">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <div className="h-50 w-50 mb-4 floating-animation flex items-center justify-center mx-auto">
                <img 
                    src="/public/karna2.jpg" 
                    alt="Santaran Art Logo" 
                    className="h-20 w-50"
                />
                </div>          
            </div>
          <h1 className={`text-4xl md:text-6xl font-cormorant font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} gradient-text`}>
            Karnaphuli Folk Triennial
          </h1>
        </div>
      </div>

      {/* Triennial Editions */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6 text-santaran-charcoal">
              Triennial Editions
            </h2>
            <p className="text-lg text-justify text-santaran-charcoal/80 max-w-3xl mx-auto">
                Santaran’s Karnaphuli Folk Triennial is a vibrant festival that honors the rich tapestry of folk, popular, and traditional arts across South Asia. Named after the mighty Karnaphuli River—an enduring symbol of culture, nature, and life in Bangladesh—the triennial explores the deep artistic and anthropological connections that bind the region’s communities.
                Since its inaugural event in 2015, held in Chittagong and Dhaka, the festival has brought together master artists from Bangladesh, Nepal, India, Pakistan, and Japan, showcasing a dazzling array of traditional paintings, crafts, and contemporary art inspired by folk heritage. Through exhibitions, seminars, artist talks, and cultural performances, the triennial breathes life into ancient art forms while fostering dialogue between past and present.
                The festival also honors the lifelong dedication of folk and traditional artists and researchers who preserve these living histories through their work. By celebrating indigenous creativity and its links to social life, mythology, and spirituality, the Karnaphuli Folk Triennial nurtures a renewed cultural awareness—inviting audiences to witness the enduring power of art as a bridge between generations and cultures.
                With every edition, Santaran strengthens the vibrant pulse of folk artistry, ensuring these treasured traditions continue to inspire and evolve in a modern world.

              </p>
          </div>

          <div className="space-y-8">
            {editions.map((edition, index) => (
              <Card key={index} className={`overflow-hidden hover:shadow-2xl transition-all duration-500 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:flex group`}>
                <div className="lg:w-1/2 aspect-[16/9] lg:aspect-auto overflow-hidden">
                  <img 
                    src={edition.image} 
                    alt={edition.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl font-cormorant text-santaran-charcoal mb-3">{edition.title}</CardTitle>
                    <CardDescription className="text-lg text-santaran-charcoal/70">{edition.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-santaran-teal/10 rounded-lg">
                        <div className="font-bold text-santaran-teal">{edition.participants}</div>
                        <div className="text-sm text-santaran-charcoal/60">Communities</div>
                      </div>
                      <div className="text-center p-4 bg-santaran-terracotta/10 rounded-lg">
                        <div className="font-bold text-santaran-terracotta">{edition.events}</div>
                        <div className="text-sm text-santaran-charcoal/60">Events</div>
                      </div>
                      <div className="text-center p-4 bg-santaran-gold/20 rounded-lg">
                        <div className="font-bold text-santaran-charcoal">{edition.theme}</div>
                        <div className="text-sm text-santaran-charcoal/60">Theme</div>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-santaran-teal to-santaran-terracotta hover:from-santaran-teal/90 hover:to-santaran-terracotta/90 text-white">
                      Learn More
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-cormorant font-bold text-center mb-16 text-santaran-charcoal">
            Triennial Highlights
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-santaran-terracotta to-santaran-gold w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 pulse-glow">
                  <highlight.icon className="h-12 w-12 text-white" />
                </div>
                <div className="text-4xl font-bold text-santaran-terracotta mb-2">{highlight.number}</div>
                <div className="text-santaran-charcoal/70 font-medium">{highlight.label}</div>
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

export default KarnaphuliFolkSec;
