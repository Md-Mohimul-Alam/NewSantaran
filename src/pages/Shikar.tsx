
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Mic, FileText, Users, Calendar, MapPin } from "lucide-react";

const Shikar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const collections = [
    {
      year: "2008",
      title: "Mithila Art Workshop",
      description: "Sacred songs performed during traditional ceremonies",
      image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg",
      artist: "Artist Shyamasundar Yadav", 
      region:"Nepal"
    },
    {
      year: "2009",
      title: "Patachitra (Narrative Scroll Painting) Workshop",
      description: "Sacred songs performed during traditional ceremonies",
      image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg",
      artist: "Artist Manimala Chitrakar",
      region: "India"
    },
    {
      year: "2010",
      title: "Rikswa Painting Workshop",
      description: "Sacred songs performed during traditional ceremonies",
      image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg",
      artist: "Artist Majnu",
      region:"Bangladesh"
    },
    {
      year: "2010",
      title: "Cinema-Banner Painting Workshop",
      description: "Sacred songs performed during traditional ceremonies",
      image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg",
      artist: "Artist Abdul Hanif (Pappu Ustad)",
      region:"Bangladesh"
    },
    {
      year: "2015",
      title: "The Bridge — Traditional Thangka Painting Workshop",
      description: "Sacred songs performed during traditional ceremonies",
      image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg",
      artist: "Artist Dorjee Gurung Lama",
      region:"Nepal"
    },
    {
      year: "2019",
      title: "The Bridge 2 — Patachitra & Palm Leaf Engraving Workshop",
      description: "Sacred songs performed during traditional ceremonies",
      image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg",
      artist: "Artists Sharat Kumar Sahoo & Prashanta Kumar",
      region: "Odisha, India"
    },
  ];

  const activities = [
    { icon: Mic, title: "Field Recording", description: "Documenting authentic performances" },
    { icon: FileText, title: "Documentation", description: "Preserving lyrics and contexts" },
    { icon: Users, title: "Community Workshops", description: "Teaching traditional songs" },
    { icon: Calendar, title: "Cultural Events", description: "Organizing folk festivals" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-santaran-charcoal to-santaran-teal">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-dancing-script font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-shadow-artistic`}>
            Shikar
          </h1>
          <p className={`text-xl italic pb-4 text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Sustaining the Spirit of Folk Arts          
          </p>
           <p className={`text-lg text-justify text-white/90 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                Since 2008, Santaran’s Shikar program has been a beacon for reviving and preserving the rich
                heritage of Bangladesh’s folk arts and crafts. It unveils indigenous wisdom by exploring vibrant
                traditions, securing their place in contemporary art.
              </p>
              <p className={`text-lg text-justify text-white/90 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                Folk and popular arts reflect the depths of human experience—rooted in community, myth, and
                spirit. Shikar highlights the universal bonds across global folk traditions, showcasing these
                timeless expressions amid today’s cultural flow.
              </p>
              <p className={`text-lg text-justify text-white/90 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                Through careful documentation and dynamic programs—workshops, exhibitions, and
                performances—Shikar bridges tradition and modern creativity, illuminating Bangladesh’s folk
                arts on the world stage.
              </p>
              <p className={`text-lg text-justify text-white/90 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                By nurturing a new performance language grounded in indigenous knowledge, Shikar honors the
                artists and communities who sustain these legacies, inspiring future generations to keep this
                vibrant heritage alive.
              </p>
        </div>
      </div>

      {/* Collections Section */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6 text-santaran-charcoal">
              Our Collections
            </h2>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover-lift glass-morphism">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-santaran-charcoal font-cormorant text-xl">{collection.title}</CardTitle>
                  <CardDescription className="text-santaran-charcoal/70">{collection.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-santaran-terracotta" />
                      <span className="text-santaran-charcoal/70">{collection.region}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-santaran-gold" />
                      <span className="text-santaran-charcoal/70">{collection.year}</span>
                    </div>
                  </div>
                  <Button>
                    Explore Collection
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-cormorant font-bold text-center mb-16 text-santaran-charcoal">
            Our Activities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="text-center group floating-animation-delayed" style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="bg-gradient-to-br from-santaran-teal to-santaran-terracotta w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <activity.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-cormorant font-bold text-santaran-charcoal mb-3">{activity.title}</h3>
                <p className="text-santaran-charcoal/70">{activity.description}</p>
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

export default Shikar;
