
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Award, Eye, Heart, Share2 } from "lucide-react";

const YearlyOutcomeArtShow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [likedArtworks, setLikedArtworks] = useState<number[]>([]);
  const [viewCounts, setViewCounts] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    setIsVisible(true);
    // Initialize view counts
    const initialCounts: { [key: number]: number } = {};
    artworks.forEach((_, index) => {
      initialCounts[index] = Math.floor(Math.random() * 500) + 100;
    });
    setViewCounts(initialCounts);
  }, []);

  const handleLike = (index: number) => {
    if (likedArtworks.includes(index)) {
      setLikedArtworks(likedArtworks.filter(id => id !== index));
    } else {
      setLikedArtworks([...likedArtworks, index]);
    }
  };

  const handleView = (index: number) => {
    setViewCounts(prev => ({
      ...prev,
      [index]: (prev[index] || 0) + 1
    }));
  };

  const artworks = [
    {
      title: "Santaran",
      meaning:"The Swim",
      organizer: "Alliance Française",
      location: "Chittagong",
      Year: "1999",
      image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg",
      description: "A powerful exploration of urbanization's impact on traditional life",
      seq: "1"
    },
    {
      title: "Sahasrabder Chabi",
      meaning:"Images of the Millennium",
      organizer: "Chittagong Club",
      location: "Chittagong",
      Year: "2000",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg",
      description: "Interactive digital piece exploring technology and humanity",
      seq: "2"
    },
    {
      title: "Pahela Baishakh",
      meaning:"The First Day of Bengali Year",
      organizer: "Alliance Française",
      location: "Chittagong",
      Year: "2002",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg",
      description: "Nostalgic journey through forgotten spaces and moments",
      seq: "3"
    },
    {
      title: "Cultural Heritage of Chittagong ",
      meaning:"Cultural Heritage of Chittagong ",
      organizer: "Indian Cultural Centre",
      location: "Dhaka",
      Year: "2002",
      image: "https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg",
      description: "Abstract interpretation of modern life's complexities",
      seq: "4"
    },
    {
      title: "Ekush Moder Garab",
      meaning: "Proud of 21st February",
      organizer: "Shilpakala Academy",
      location: "Chittagong",
      Year: "2003",
      image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg",
      description: "A tribute to the language martyrs of Bangladesh",
      seq: "5"
    },
    {
      title: "Bhanumatir Khel",
      meaning: "The Tricky Magical Game",
      organizer: "Shilpakala Academy",
      location: "Chittagong",
      Year: "2003",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg",
      description: "Exploration of childhood memories and games",
      seq: "6"
    },
    {
      title: "Thought Wave",
      meaning: "Thought Wave",
      organizer: "Nalinikanta Bhattashali Art Gallery, National Museum",
      location: "Dhaka",
      Year: "2005",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg",
      description: "A conceptual piece on the flow of ideas and creativity",
      seq: "7"
    },
    {
      title: "Unity in Diversity",
      meaning: "Unity in Diversity",
      organizer: "Nepal Art Council Gallery",
      location: "Kathmandu, Nepal",
      Year: "2007",
      image: "https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg",
      description: "Celebration of cultural diversity through art",
      seq: "8"
    },
    {
      title: "Introspection",
      meaning: "Introspection",
      organizer: "Nalinikanta Bhattashali Art Gallery, National Museum",
      location: "Dhaka",
      Year: "2009",
      image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg",
      description: "A personal reflection on the artist's journey",
      seq: "9"
    },
    {
      title: "Time Art and Space",
      meaning: "1st Multidisciplinary Art Show, 12th Anniversary",
      organizer: "Rashid Chowdhury Art Gallery, Institute of Fine Arts",
      location: "University of Chittagong",
      Year: "2011",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg",
      description: "Exploration of time and space through various mediums",
      seq: "10"
    },
    {
      title: "From the Karnaphuli",
      meaning:"2nd Multidisciplinary Art Show",
      organizer:"Residence of Italian Ambassador", 
      location:"Dhaka", 
      Year:"2012", 
      image:"https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg", 
      description:"A tribute to the Karnaphuli River and its significance",
      seq:"11"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-santaran-cream via-white to-santaran-cream">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-santaran-charcoal/90 via-santaran-charcoal/70 to-transparent" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-8 transition-all duration-1000 font-playfair ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <span className="block text-santaran-gold italic">Yearly Outcome</span>
          </h1>
          <p className={`text-lg text-justify text-white/90 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
            For over twenty years, Santaran has been a dynamic platform where member organizers unfold their research-driven visions, engaging audiences both locally and globally. Since 1999, this creative voyage has welcomed new mediums and ideas, beginning with intimate exhibitions of personal insight. In 1999, the groundbreaking Site-Specific organizer Camp ignited a creative surge that led to the first Multi-Disciplinary Art Exhibition in 2005 at the National Museum. Today, Santaran carries forward this spirit, celebrating diverse and boundary-breaking art through annual showcases that unite communities through the transformative power of creativity.
          </p>
          
          <div className={`mt-12 flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <Calendar className="h-5 w-5 mr-3 text-santaran-gold" />
              <span className="text-white font-medium">March 15 - April 30, 2025</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <MapPin className="h-5 w-5 mr-3 text-santaran-gold" />
              <span className="text-white font-medium">Santaran Main Gallery</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <Users className="h-5 w-5 mr-3 text-santaran-gold" />
              <span className="text-white font-medium">45+ Featured organizers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Artworks */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-santaran-charcoal font-playfair">
              <span className="text-santaran-terracotta italic">Exhibition Highlights</span>
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Discover the most compelling pieces from this year's exhibition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {artworks.map((artwork, index) => (
              <Card key={index} className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                    onClick={() => handleView(index)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Interactive Overlay */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button 
                      onClick={() => handleLike(index)}
                      className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                    >
                      <Heart className={`h-5 w-5 ${likedArtworks.includes(index) ? 'text-red-500 fill-current' : 'text-santaran-charcoal'}`} />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200">
                      <Share2 className="h-5 w-5 text-santaran-charcoal" />
                    </button>
                  </div>

                  {/* View Counter */}
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Eye className="h-4 w-4 text-white mr-2" />
                    <span className="text-white text-sm">{viewCounts[index] || 0}</span>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-santaran-charcoal font-playfair">
                    {artwork.title}
                  </CardTitle>
                  <CardDescription className="text-santaran-teal font-medium text-lg">
                    by {artwork.organizer}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-santaran-charcoal/80 leading-relaxed">
                    {artwork.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-santaran-charcoal">location:</span>
                      <p className="text-santaran-charcoal/70">{artwork.location}</p>
                    </div>
                    <div>
                      <span className="font-medium text-santaran-charcoal">Year:</span>
                      <p className="text-santaran-charcoal/70">{artwork.Year}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-santaran-cream">
                    <span className="text-2xl font-bold text-santaran-terracotta font-playfair">
                      {artwork.seq}
                    </span>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-santaran-teal text-santaran-teal hover:bg-santaran-teal hover:text-white transition-all duration-300"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Event Information */}
      <div className="py-20 bg-santaran-charcoal text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6 font-playfair">
                Exhibition <span className="text-santaran-gold italic">Details</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-santaran-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Curatorial Excellence</h4>
                    <p className="text-white/80">Carefully curated selection representing the finest contemporary works from established and emerging organizers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-santaran-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">organizer Talks</h4>
                    <p className="text-white/80">Join intimate conversations with featured organizers every weekend during the exhibition period.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="h-6 w-6 text-santaran-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Special Events</h4>
                    <p className="text-white/80">Opening reception, collectors' preview, and closing ceremony with live performances.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg"
                alt="Gallery Space"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-santaran-gold/30 w-32 h-32 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default YearlyOutcomeArtShow;
