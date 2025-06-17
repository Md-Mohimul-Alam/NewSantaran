import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

const Samapran = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMedia, setActiveMedia] = useState({});
  const [isMuted, setIsMuted] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const installations = [
    {
      title: "Digital Weaving",
      type: "Interactive Digital Installation",
      description: "Traditional weaving patterns reimagined through AI and projected onto moving fabrics",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg",
      mediaType: "video",
      OrganizedWith:"Mro ethnic community",
      OrganizedBy:"Santaran",
      location: "Alikadam, Bandarban, Chittagong, Hill Tract."
    },
    {
      title: "Sound of Memory",
      type: "Audio-Visual Performance",
      description: "Childhood lullabies transformed into immersive soundscapes with responsive visuals",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      OrganizedBy:"Santaran",
      OrganizedWith: "Manipuri ethnic community in Bhanubil",
      location:  "Srimangal, Sylhet."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-santaran-charcoal via-santaran-teal to-santaran-charcoal">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-santaran-charcoal/90 to-santaran-teal/80" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-8 transition-all duration-1000 font-playfair ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <span className="block text-santaran-gold ">Samapran</span>
          </h1>
          <p className={`text-2xl italic text-white/90 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            Community art program
          </p>

        </div>
      </div>

      {/* Installations */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-playfair">
               <span className="text-santaran-gold italic">Samapran Activities</span>
            </h2>
            <p className={`text-lg text-justify text-white/90 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              Santaran is deeply committed to respecting cultural diversity and linking intangible heritage with community development. Since its inception, Santaran has worked to integrate the traditional cultures and lifestyles of Bangladesh’s diverse ethnic communities into mainstream development. The program operates through two ways, first is focused on conserving cultural elements, and second is promoting artistic activities to enhance community livelihoods. Through training, workshops, and interactive events, Santaran supports communities in preserving their unique arts and traditions while fostering new creations using indigenous knowledge and local resources. 
          </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {installations.map((installation, index) => (
              <Card key={index} className="group overflow-hidden bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={installation.image} 
                    alt={installation.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Media Controls Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <button className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200">
                        <span className="h-6 w-6 text-santaran-charcoal">▶</span>
                      </button>
                      <button className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200">
                        <span className="h-6 w-6 text-santaran-charcoal">🔈</span>
                      </button>
                      <button className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200">
                        <span className="h-6 w-6 text-santaran-charcoal">⛶</span>
                      </button>
                    </div>
                  </div>

                  {/* Media Type Badge */}
                  <div className="absolute top-4 right-4 bg-santaran-gold/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-santaran-charcoal text-sm font-bold uppercase">
                      {installation.mediaType}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white font-playfair">
                    {installation.title}
                  </CardTitle>
                  <CardDescription className="text-santaran-gold font-medium text-lg">
                    by {installation.OrganizedBy}
                  </CardDescription>
                  <CardDescription className="text-santaran-gold font-medium text-lg">
                    In {installation.OrganizedWith}
                  </CardDescription>
                  <div className="text-white/60 text-sm mt-2 whitespace-pre-line">
                    {installation.location}
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-white/80 leading-relaxed mb-6">
                    {installation.description}
                  </p>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-santaran-gold hover:bg-santaran-gold/90 text-santaran-charcoal font-bold transition-all duration-300">
                      Experience Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Samapran;
