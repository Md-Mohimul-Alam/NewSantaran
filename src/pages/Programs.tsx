import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Palette, Layers3 } from "lucide-react";

const Programs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const programs = [
    {
      title: "Horith",
      slug: "harith",
      description: "An immersive journey into natural elements and eco-art practices inspired by local landscapes.",
      image: "https://images.pexels.com/photos/1542495/pexels-photo-1542495.jpeg",
      location: "Rural Eco Sites",
      participants: "25+ Artists & Ecologists"
    },
    {
      title: "Shikar",
      slug: "shikar",
      description: "Reviving folk hunting narratives and transforming them through modern visual language.",
      image: "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg",
      location: "Riverine Areas",
      participants: "15+ Artists & Researchers"
    },
    {
      title: "Kalpapuri",
      slug: "kalpapuri",
      description: "A dreamlike visual space for children’s imagination through storytelling, drawing, and performance.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      location: "Community Hubs & Schools",
      participants: "100+ Children"
    },
    {
      title: "Samapran",
      slug: "samapran",
      description: "A multidisciplinary platform bridging art, science, philosophy and social practice.",
      image: "https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg",
      location: "Urban & Academic Spaces",
      participants: "40+ Cross-Field Artists"
    },
    {
      title: "Institute",
      slug: "Institute",
      description: "Building creative capacity through experimental, indigenous, and applied learning modules.",
      image: "https://images.pexels.com/photos/4144095/pexels-photo-4144095.jpeg",
      location: "Santaran Learning Studio",
      participants: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-santaran-charcoal">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our <span className="text-santaran-gold">Programs</span>
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Santaran's programs explore the power of art to heal, educate, and empower. Rooted in indigenous knowledge, each initiative transforms how communities imagine the future.
          </p>
        </div>
      </div>

      {/* Program Cards */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              Program Initiatives
            </h2>
            <p className="text-lg text-santaran-charcoal/80">
              Since 1998, Santaran has pioneered a visionary model for contemporary art practice grounded in culture, ecology, and education. These programs are pathways to future-oriented transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow hover:shadow-xl overflow-hidden transition duration-300">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-santaran-charcoal mb-3">{program.title}</h3>
                  <p className="text-santaran-charcoal/70 mb-4">{program.description}</p>
                  <div className="flex items-center text-santaran-teal mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{program.location}</span>
                  </div>
                  <div className="flex items-center text-santaran-teal mb-4">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{program.participants}</span>
                  </div>
                  <Button 
                    className="bg-santaran-teal hover:bg-santaran-teal/90 text-white"
                    onClick={() => window.location.href = `/Programs/${program.slug}`}
                  >
                    View Program Details
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-santaran-teal rounded-lg p-12 text-white mt-20">
            <Layers3 className="h-16 w-16 mx-auto mb-6 text-santaran-gold" />
            <h3 className="text-3xl font-bold mb-6">Be Part of the Vision</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Are you an artist, educator, or activist? Connect with Santaran’s program network and contribute to a more just, creative future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-santaran-gold text-santaran-charcoal hover:bg-santaran-gold/90">
                Join a Program
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Propose Your Idea
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Programs;
