import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main Pages
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import Projects from "./pages/Projects";
import Publication from "./pages/Publication";
import Research from "./pages/Research";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";

// Programs Subpages
import Harith from "./pages/Harith";
import Shikar from "./pages/Shikar";
import Kalpapuri from "./pages/Kalpapuri";
import Samapran from "./pages/Samapran";
import ArtEducation from "./pages/ArtEducation";

// Projects Subpages
import YearlyOutcomeArtShow from "./pages/YearlyOutcomeArtShow";
import ArtFactory from "./pages/ArtFactory";
import ArtistResidency from "./pages/ArtistResidency";
import ArtCanFly from "./pages/ArtCanFly";
import KalpapuriSchool from "./pages/KalpapuriSchool";
import KandrabinduCommunity from "./pages/KandrabinduCommunity";
import DharitriEcoTourism from "./pages/DharitriEcoTourism";

// Initiatives / Art Education
import KalpalokerCitra from "./pages/KalpalokerCitra";

// Events Subpages
import MultidisciplinaryArtShow from "./pages/MultidisciplinaryArtShow";
import KarnaphuliFolk from "./pages/KarnaphuliFolk";

// Art for Young
import YoungArtExhibition from "./pages/YoungArtExhibition";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/Programs" element={<Programs />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/Research" element={<Research />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          {/* Programs Subpages */}
          <Route path="/Programs/harith" element={<Harith />} />
          <Route path="/Programs/shikar" element={<Shikar />} />
          <Route path="/Programs/kalpapuri" element={<Kalpapuri />} />
          <Route path="/Programs/samapran" element={<Samapran />} />
          <Route path="/Programs/art-education" element={<ArtEducation />} />

          {/* Projects Subpages */}
          <Route path="/projects/yearly-outcome" element={<YearlyOutcomeArtShow />} />
          <Route path="/projects/art-factory" element={<ArtFactory />} />
          <Route path="/projects/artist-residency" element={<ArtistResidency />} />
          <Route path="/projects/art-can-fly" element={<ArtCanFly />} />
          <Route path="/projects/research" element={<Research />} />
          <Route path="/projects/kalpapuri-school" element={<KalpapuriSchool />} />
          <Route path="/projects/kandrabindu" element={<KandrabinduCommunity />} />
          <Route path="/projects/dharitri" element={<DharitriEcoTourism />} />

          {/* Initiatives Subpages */}
          <Route path="/Initiatives/kalpaloker-citra" element={<KalpalokerCitra />} />

          {/* Events Subpages */}
          <Route path="/Events/multidisciplinary" element={<MultidisciplinaryArtShow />} />
          <Route path="/Events/karnaphuli" element={<KarnaphuliFolk />} />

          {/* Art for Young */}
          <Route path="/art-for-young/exhibition" element={<YoungArtExhibition />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
