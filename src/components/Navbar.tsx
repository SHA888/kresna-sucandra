
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <a href="#" className="text-xl font-bold tracking-tight">
          Dr. Kresna
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* Blog Dropdown - Using DropdownMenu instead of NavigationMenu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-1 focus:outline-none">
              Blog <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <a
                  href="https://medium.com/@drkresna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col w-full"
                >
                  <span className="font-medium">Medium</span>
                  <span className="text-xs text-muted-foreground mt-1">
                    Medical AI and technology insights
                  </span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://substack.com/@drkresna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col w-full"
                >
                  <span className="font-medium">Substack</span>
                  <span className="text-xs text-muted-foreground mt-1">
                    Research findings and publications
                  </span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 p-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Blog Links */}
            <div className="py-2">
              <div className="text-foreground/80 mb-2">Blog</div>
              <div className="pl-4 flex flex-col space-y-3">
                <a
                  href="https://medium.com/@drkresna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Medium
                </a>
                <a
                  href="https://substack.com/@drkresna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Substack
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
