import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type SubMenuItem = {
  name: string;
  href: string;
};

type MenuItem = {
  name: string;
  href: string;
  submenu?: SubMenuItem[];
};

const mainMenuItems: MenuItem[] = [
  { name: "About", href: "/about" },
  {
    name: "Programs",
    href: "/Programs",
    submenu: [
      { name: "Horith", href: "/Programs/harith" },
      { name: "Kalpapuri", href: "/Programs/kalpapuri" },
      { name: "Shikar", href: "/Programs/shikar" },
      { name: "Samapran", href: "/Programs/samapran" },
      { name: "Institute", href: "/Programs/art-education" },
    ],
  },
  {
    name: "Initiatives",
    href: "/Initiatives",
    submenu: [
      { name: "Kalpapuri School of Arts & Crafts", href: "/projects/kalpapuri-school" },
      { name: "Kalpaloker Citra", href: "/Initiatives/kalpaloker-citra" },
      { name: "Kendrabindu", href: "/projects/kandrabindu" },
      { name: "Dharitri", href: "/projects/dharitri" },
    ],
  },
  {
    name: "Projects",
    href: "/Projects",
    submenu: [
      { name: "Yearly Outcomes", href: "/projects/yearly-outcome" },
      { name: "Art Factory", href: "/projects/art-factory" },
      { name: "Artist Residency", href: "/projects/artist-residency" },
      { name: "Art Can Fly", href: "/projects/art-can-fly" },
      { name: "Workshops", href: "/other-activities/workshops" },
      { name: "Seminars", href: "/other-activities/seminar" },
      { name: "Exhibitions", href: "/other-activities/exhibitions" },
    ],
  },
  {
    name: "Events",
    href: "/Events",
    submenu: [
      { name: "Karnaphuli Folk Triennale", href: "/Events/karnaphuli" },
      { name: "Multidisciplinary Art Show", href: "/Events/multidisciplinary" },
    ],
  },

  { 
    name: "Research", 
    href: "/research", 
  },
  {
    name: "Publication",
    href: "/publication",

  },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 shadow-md backdrop-blur-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between p-2">
          <a href="/" className="text-2xl font-playfair font-bold text-santaran-teal p-5">
            Santaran
            <span className="text-santaran-terracotta ml-1">Art</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-santaran-charcoal hover:text-santaran-teal transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
            {mainMenuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveItem(item.name)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <a
                  href={item.href}
                  className={cn(
                    "nav-link transition-colors duration-200",
                    scrolled ? "text-santaran-charcoal hover:text-santaran-teal" : "text-white hover:text-santaran-cream",
                    activeItem === item.name && "font-semibold"
                  )}
                >
                  {item.name}
                </a>

                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-64 hidden group-hover:block">
                    <div className="p-3 bg-white rounded-lg shadow-lg border border-slate-100">
                      <ul className="space-y-2">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.name}>
                            <a
                              href={subItem.href}
                              className="block px-4 py-2 text-sm hover:bg-santaran-cream rounded-md transition-colors hover:text-santaran-teal"
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white border-t">
            {mainMenuItems.map((item) => (
              <div key={item.name} className="mb-2">
                <div
                  className="flex items-center justify-between px-4 py-2 hover:bg-santaran-cream cursor-pointer"
                  onClick={() => setActiveItem(activeItem === item.name ? null : item.name)}
                >
                  <a href={item.href} className="font-medium">{item.name}</a>
                  {item.submenu && (
                    <span>{activeItem === item.name ? "−" : "+"}</span>
                  )}
                </div>
                {item.submenu && activeItem === item.name && (
                  <ul className="ml-4 mt-2 border-l-2 border-santaran-cream pl-4">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.name} className="mb-2">
                        <a
                          href={subItem.href}
                          className="block py-2 text-sm hover:text-santaran-teal"
                        >
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
