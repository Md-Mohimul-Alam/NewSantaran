
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, TreePine, Sprout, Globe, Users, Award, Camera, MapPin } from "lucide-react";

const Harith = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 ">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative  min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1445444/pexels-photo-1445444.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-emerald-800/60 to-teal-800/80" />
        
        <div className="container mx-auto px-6 text-center relative z-10 mt-10">
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Leaf className="h-20 w-20 text-green-400 mx-auto mb-6 animate-pulse" />
          </div>
          
          <h1 className={`text-6xl md:text-7xl font-bold text-white mb-8 transition-all duration-1000 delay-200 font-playfair ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <span className="block text-green-500 italic">Harith</span>
            <span className="text-2xl md:text-5xl italic">Cultivating creativity for a greener tomorrow</span>
          </h1>
          <div className="text-center mt-10 mb-16">
            <p
              className={`text-lg text-justify text-santaran-cream max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >             
             Since 2009, Santaran’s Horith program has explored the vital relationship between art and the
              environment. Set in the rich cultural landscape of Alikadam, Bandarban, artists from across
              Bangladesh create site-specific, land art and performance art that honors the balance between
              nature and culture.
              Building on a pioneering artist camp from 1999, Horith has become a dynamic platform that
              combines community engagement with creative expression to highlight environmental
              challenges like deforestation and water scarcity. Along with Alikadam and beyond, the
              organization hosts Environmental Art Camps, using art to awaken public awareness and
              safeguard nature from disaster. Through immersive artistic experiences, Horith inspires
              collective responsibility and fosters lasting harmony between people and the natural world.
            </p>
          </div>  
        </div>
      </div>

        {/* Featured Projects */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          
          {/* Milestones Section */}
          <div className="py-16">
            <div className="container mx-auto px-6">
              <h3 className="text-3xl md:text-4xl font-bold text-santaran-charcoal text-center mb-12 font-playfair">
                Milestones of the Environmental Art Camps
              </h3>

              <div className="space-y-12">
                {[
                  {
                    year: "1999",
                    status: "Completed",
                    title: "Millennium in Alikadam",
                    location: "Alikadam, Bandarban",
                    image: "https://images.pexels.com/photos/16193143/pexels-photo-16193143.jpeg",
                    description: "A foundational camp blending art and nature at the turn of the millennium.",
                    impact: "Inspired the birth of Santaran’s green art movement."
                  },
                  {
                    year: "2001",
                    status: "Completed",
                    title: "Environmental Art Camp in Ruma",
                    location: "Ruma, Bandarban",
                    image: "https://images.pexels.com/photos/16193143/pexels-photo-16193143.jpeg",
                    description: "Explored ecological balance through sculpture and participatory installations.",
                    impact: "Engaged 30+ youth in creating eco-conscious art."
                  },
                  {
                    year: "2002",
                    status: "Completed",
                    title: "Art Camp in Alikadam",
                    location: "Alikadam, Bandarban",
                    image: "https://images.pexels.com/photos/16193143/pexels-photo-16193143.jpeg",
                    description: "Celebrated local traditions through environmental art and youth engagement.",
                    impact: "Revived indigenous artistic practices."
                  },
                  {
                    year: "2003",
                    status: "Completed",
                    title: "Matamuhuri (River)",
                    location: "Alikadam, Bandarban",
                    image: "https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg",
                    description: "Focused on river conservation through symbolic installations along the Matamuhuri.",
                    impact: "Raised awareness on waterway pollution among 5 local villages."
                  },
                  {
                    year: "2005",
                    status: "Completed",
                    title: "Mural Camp",
                    location: "Alikadam, Bandarban",
                    image: "https://images.pexels.com/photos/259957/pexels-photo-259957.jpeg",
                    description: "Created collaborative murals reflecting local biodiversity and environmental concerns.",
                    impact: "Public mural gallery became a permanent village landmark."
                  },
                  {
                    year: "2007",
                    status: "Completed",
                    title: "Life & Rights",
                    location: "Alikadam, Bandarban",
                    image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
                    description: "Linked human rights to environmental justice through interactive art experiences.",
                    impact: "Empowered local youth to advocate for forest protection."
                  },
                  {
                    year: "2008",
                    status: "Completed",
                    title: "Horith-1 (Green)",
                    location: "Purba Ecovillage, Hathazari, Chittagong",
                    image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
                    description: "Launched the Horith series with nature-based art in an ecovillage setting.",
                    impact: "Set a model for sustainable artist residencies in Bangladesh."
                  },
                  {
                    year: "2008",
                    status: "Completed",
                    title: "Horith-2 (Green)",
                    location: "Alikadam, Bandarban",
                    image: "https://images.pexels.com/photos/3601424/pexels-photo-3601424.jpeg",
                    description: "Expanded the Horith vision with deeper community involvement and eco-dialogues.",
                    impact: "Fostered long-term collaboration between artists and indigenous communities."
                  },
                  {
                    year: "2011",
                    status: "Completed",
                    title: "Artist Camp in Birishiri",
                    location: "Birishiri, Mymensingh",
                    image: "https://images.pexels.com/photos/3601424/pexels-photo-3601424.jpeg",
                    description: "Engaged indigenous communities in exploring land and identity through art.",
                    impact: "Amplified Garo cultural expression through visual storytelling."
                  },
                  {
                    year: "2012",
                    status: "Completed",
                    title: "Ecological Art and Idea",
                    location: "Lawachara National Park, Srimangal",
                    image: "https://images.pexels.com/photos/2832024/pexels-photo-2832024.jpeg",
                    description: "Immersive forest art emphasizing conservation and ecological storytelling.",
                    impact: "Influenced eco-curriculum in nearby schools."
                  },
                  {
                    year: "2018",
                    status: "Completed",
                    title: "Echo of the Mountain",
                    location: "Alikadam, Bandarban",
                    image: "https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg",
                    description: "Performance and sculpture echoing the silent calls of endangered landscapes.",
                    impact: "Documented as one of the first environmental performance art in the region."
                  },
                  {
                    year: "2019",
                    status: "Completed",
                    title: "Sound of Nature",
                    location: "Alikadam, Bandarban",
                    image: "https://images.pexels.com/photos/235605/pexels-photo-235605.jpeg",
                    description: "Used sound art to interpret natural rhythms and environmental harmony.",
                    impact: "Final milestone before Santaran’s digital expansion of Horith programs."
                  }
                ].map((item, index) => (
                  <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-90">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="aspect-[4/3] lg:aspect-auto overflow-hidden relative">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        {/* Status Badge */}
                        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold ${
                          item.status === 'Completed' ? 'bg-green-500 text-white' :
                          item.status === 'Ongoing' ? 'bg-yellow-500 text-white' :
                          'bg-blue-500 text-white'
                        }`}>
                          {item.status}
                        </div>
                        {/* Photo Gallery Icon */}
                        <div className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full">
                          <Camera className="h-5 w-5 text-santaran-charcoal" />
                        </div>
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <CardHeader className="p-0 mb-6">
                          <CardTitle className="text-green-700 text-xl font-bold">{item.title}</CardTitle>
                          <CardDescription className="text-santaran-charcoal font-semibold text-2xl">
                            Year - {item.year}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 space-y-6">
                          <CardDescription className="flex items-center text-green-600 font-medium text-lg">
                            <MapPin className="h-5 w-5 mr-2" />
                            {item.location}
                          </CardDescription>
                          <p className="text-santaran-charcoal/80 text-base leading-relaxed">
                            {item.description}
                          </p>
                          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg mb-6">
                            <div className="flex items-center mb-2">
                              <Award className="h-5 w-5 text-green-600 mr-2" />
                              <span className="font-bold text-green-700">Environmental Impact</span>
                            </div>
                            <p className="text-santaran-charcoal/80">{item.impact}</p>
                          </div>
                          <div className="flex gap-3">
                            <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white transition-all duration-300">
                              View Gallery
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      
      {/* Stats Section */}
      <div className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Green Installations", icon: TreePine, color: "text-green-600" },
              { number: "15,000+", label: "Plants Installed", icon: Leaf, color: "text-emerald-600" },
              { number: "50", label: "Community Gardens", icon: Sprout, color: "text-teal-600" },
              { number: "100K+", label: "People Reached", icon: Users, color: "text-green-700" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`h-10 w-10 ${stat.color}`} />
                </div>
                <div className={`text-4xl font-bold mb-2 font-playfair ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-santaran-charcoal/70 font-medium">
                  {stat.label}
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

export default Harith;
