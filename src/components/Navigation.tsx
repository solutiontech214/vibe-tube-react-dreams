
import { Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
              <Youtube className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              VlogLife
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-red-500' : 'text-gray-700 hover:text-red-500'
              }`}
            >
              Home
            </a>
            <a 
              href="/videos" 
              className={`font-medium transition-colors ${
                isActive('/videos') ? 'text-red-500' : 'text-gray-700 hover:text-red-500'
              }`}
            >
              Videos
            </a>
            <a 
              href="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-red-500' : 'text-gray-700 hover:text-red-500'
              }`}
            >
              About
            </a>
            <a 
              href="/contact" 
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-red-500' : 'text-gray-700 hover:text-red-500'
              }`}
            >
              Contact
            </a>
          </nav>
          <Button className="bg-red-500 hover:bg-red-600 text-white">
            Subscribe
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
