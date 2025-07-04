import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Sparkles } from "lucide-react";

const Initiatives = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const Initiatives = [
    {
      title: "Kalpapuri School of Arts & Crafts",
      slug: "kalpapuri-school",
      description: "A nurturing space for creative education in traditional and modern crafts.",
      image: "https://images.pexels.com/photos/861308/pexels-photo-861308.jpeg",
      location: "Kalpapuri Campus",
      participants: "Children & Local Artists"
    },
    {
      title: "Kalpapaloker chitra",
      slug: "kalpapaloker-chitra",
      description: "Imaginative visual storytelling through community-based children's art projects.",
      image: "https://images.pexels.com/photos/1337036/pexels-photo-1337036.jpeg",
      location: "Village Schools",
      participants: "Young Creators"
    },
    {
      title: "Kendrabindu",
      slug: "kendrabindu",
      description: "A central hub for women, artisans, and craftspeople to collaborate and thrive.",
      image: "https://images.pexels.com/photos/462120/pexels-photo-462120.jpeg",
      location: "Community Centre",
      participants: "40+ Women Artists"
    },
    {
      title: "Dharitri",
      slug: "dharitri",
      description: "Eco-tourism meets creativity in this nature-rooted environmental initiative.",
      image: "https://images.pexels.com/photos/1797153/pexels-photo-1797153.jpeg",
      location: "Nature Sites",
      participants: "Local Guides & Artists"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-santaran-charcoal">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our <span className="text-santaran-gold">Initiatives</span>
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Santaran’s Initiatives are cross-disciplinary initiatives that blend art, research, and community engagement to create lasting cultural impact.
          </p>
        </div>
      </div>

      {/* Initiatives Grid */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              Featured Initiatives
            </h2>
            <p className="text-lg text-santaran-charcoal/80">
              From rural villages to contemporary studios, Santaran's Initiatives empower artists to connect with the world through meaningful, contextual practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Initiatives.map((Initiatives, index) => (
              <div key={index} className="bg-white rounded-lg shadow hover:shadow-xl overflow-hidden transition duration-300">
                <img 
                  src={Initiatives.image} 
                  alt={Initiatives.title}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-santaran-charcoal mb-3">{Initiatives.title}</h3>
                  <p className="text-santaran-charcoal/70 mb-4">{Initiatives.description}</p>
                  <div className="flex items-center text-santaran-teal mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{Initiatives.location}</span>
                  </div>
                  <div className="flex items-center text-santaran-teal mb-4">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{Initiatives.participants}</span>
                  </div>
                  <Button 
                    className="bg-santaran-teal hover:bg-santaran-teal/90 text-white"
                    onClick={() => window.location.href = `/Initiatives/${Initiatives.slug}`}
                  >
                    View Initiatives Details
                  </Button>
                </div>
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

export default Initiatives;