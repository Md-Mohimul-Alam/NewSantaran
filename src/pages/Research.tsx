import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Image, Landmark, Video, BookOpenCheck } from "lucide-react";

const Research = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-santaran-gold">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/754582/pexels-photo-754582.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1
            className={`text-4xl md:text-6xl font-bold text-santaran-charcoal mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Cultural <span className="text-santaran-teal">Research</span>
          </h1>
          <p
            className={`text-xl text-santaran-charcoal/80 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Preserving the soul of Bangladesh’s heritage through immersive fieldwork, documentation, and visual archiving.
          </p>
        </div>
      </div>

      {/* Research Narrative */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-santaran-charcoal mb-6 text-center">
            A Journey Through Time
          </h2>
          <p className="text-lg text-santaran-charcoal/80 mb-6">
            Since 2007, Santaran has embarked on a journey to uncover and preserve the rich tapestry of Bangladesh’s folk and architectural heritage. Beginning with a focused exploration of the Folk Art Museum in Sonargaon and the historic Panam City, our <strong>“Horith”</strong> program sparked fresh ideas and deepened our commitment to cultural research.
          </p>
          <p className="text-lg text-santaran-charcoal/80 mb-6">
            In 2010, our team undertook an immersive 10-day research expedition across northern Bangladesh—visiting majestic sites such as the King Palaces of Rangpur, Natore, and Puthia, the Kantaji Temple in Dinajpur, and the Mahastangar at Bogura. This journey was more than a tour; it was a quest to gather ancient archaeological, historical, political, religious, and environmental knowledge.
          </p>
          <p className="text-lg text-santaran-charcoal/80">
            Through careful documentation, Santaran created a vivid digital archive filled with images and videos capturing the intricate motifs, patterns, and stories of terracotta reliefs, especially from the Kantaji Temple and other significant monuments. This living archive preserves the soul of our heritage and inspires new generations to connect with Bangladesh’s timeless artistry.
          </p>
        </div>
      </div>

      {/* Archive Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-santaran-charcoal text-center mb-12">The Living Archive</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-santaran-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image className="h-8 w-8 text-santaran-teal" />
              </div>
              <h4 className="font-bold text-santaran-charcoal mb-2">Photographic Records</h4>
              <p className="text-santaran-charcoal/70 text-sm">Hundreds of high-resolution images documenting folk motifs and reliefs.</p>
            </div>
            <div className="text-center">
              <div className="bg-santaran-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-santaran-charcoal" />
              </div>
              <h4 className="font-bold text-santaran-charcoal mb-2">Field Videos</h4>
              <p className="text-santaran-charcoal/70 text-sm">Immersive site documentation through video storytelling.</p>
            </div>
            <div className="text-center">
              <div className="bg-santaran-terracotta/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Landmark className="h-8 w-8 text-santaran-terracotta" />
              </div>
              <h4 className="font-bold text-santaran-charcoal mb-2">Historic Sites</h4>
              <p className="text-santaran-charcoal/70 text-sm">Terracotta temples, palaces, and forgotten architectural wonders.</p>
            </div>
            <div className="text-center">
              <div className="bg-santaran-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpenCheck className="h-8 w-8 text-santaran-teal" />
              </div>
              <h4 className="font-bold text-santaran-charcoal mb-2">Knowledge Repository</h4>
              <p className="text-santaran-charcoal/70 text-sm">Collected wisdom from historical, religious, and ecological sources.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Research;
