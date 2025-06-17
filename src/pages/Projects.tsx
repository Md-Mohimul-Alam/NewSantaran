import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Sparkles } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Yearly Outcome",
      slug: "yearly-outcome",
      description: "Annual creative milestone showcasing diverse outputs of Santaran's artistic community.",
      image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg",
      location: "Main Gallery",
      participants: "60+ Artists"
    },
    {
      title: "Art Factory",
      slug: "art-factory",
      description: "A collaborative art-making space exploring material, process, and experimentation.",
      image: "https://images.pexels.com/photos/1337036/pexels-photo-1337036.jpeg",
      location: "Workshop Studio",
      participants: "30+ Artists"
    },
    {
      title: "Artist Residency",
      slug: "artist-residency",
      description: "A nurturing environment for local and international artists to develop work in situ.",
      image: "https://images.pexels.com/photos/374679/pexels-photo-374679.jpeg",
      location: "Residency Lab",
      participants: "15 Residents"
    },
    {
      title: "Art Can Fly",
      slug: "art-can-fly",
      description: "Mobile art outreach project bringing art practice to rural and underserved communities.",
      image: "https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg",
      location: "Mobile Units",
      participants: "Various Communities"
    },
    {
      title: "Workshops",
      slug: "Workshops",
      description: "Visual and contextual investigations driving knowledge and innovation in art.",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
      location: "Santaran Lab",
      participants: "Ongoing Workshops"
    },
    {
      title: "Seminars",
      slug: "Seminars",
      description: "Experimental art school for children focusing on imagination, play, and learning.",
      image: "https://images.pexels.com/photos/861308/pexels-photo-861308.jpeg",
      location: "Seminars",
      participants: "80+ Students"
    },
    {
      title: "Exhibitions",
      slug: "Exhibitions",
      description: "Community-focused art and craft hub for women, artisans, and local creatives.",
      image: "https://images.pexels.com/photos/462120/pexels-photo-462120.jpeg",
      location: "Exhibitions",
      participants: "40+ Women Artists"
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
            Our <span className="text-santaran-gold">Projects</span>
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Santaran’s projects are cross-disciplinary initiatives that blend art, research, and community engagement to create lasting cultural impact.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              Featured Projects
            </h2>
            <p className="text-lg text-santaran-charcoal/80">
              From rural villages to contemporary studios, Santaran's projects empower artists to connect with the world through meaningful, contextual practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow hover:shadow-xl overflow-hidden transition duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-santaran-charcoal mb-3">{project.title}</h3>
                  <p className="text-santaran-charcoal/70 mb-4">{project.description}</p>
                  <div className="flex items-center text-santaran-teal mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-santaran-teal mb-4">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{project.participants}</span>
                  </div>
                  <Button 
                    className="bg-santaran-teal hover:bg-santaran-teal/90 text-white"
                    onClick={() => window.location.href = `/projects/${project.slug}`}
                  >
                    View Project Details
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-santaran-teal rounded-lg p-12 text-white mt-20">
            <Sparkles className="h-16 w-16 mx-auto mb-6 text-santaran-gold" />
            <h3 className="text-3xl font-bold mb-6">Bring Your Vision to Life</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're researching, designing, or dreaming, Santaran welcomes bold, community-minded creative projects. Let’s build together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-santaran-gold text-santaran-charcoal hover:bg-santaran-gold/90">
                Start a Project
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Collaborate With Us
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

export default Projects;
