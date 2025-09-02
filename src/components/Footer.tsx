import { Recycle, Instagram, User, Phone } from "lucide-react";
import { siteConfig } from "@/config/config";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-brand-green flex items-center justify-center">
              <Recycle className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold font-poppins">
              {siteConfig.name}
            </span>
          </div>

          {/* Mission */}
          <p className="text-white/80 font-inter max-w-md mx-auto">
            Mission placeholder text goes here. Connecting students and preserving resources for a sustainable future.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a 
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-white/10 hover:bg-brand-green transition-colors duration-200 flex items-center justify-center"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="#"
              className="h-10 w-10 rounded-full bg-white/10 hover:bg-brand-green transition-colors duration-200 flex items-center justify-center"
            >
              <User className="h-5 w-5" />
            </a>
            <a 
              href="#"
              className="h-10 w-10 rounded-full bg-white/10 hover:bg-brand-green transition-colors duration-200 flex items-center justify-center"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/60 font-inter text-sm">
              © 2024 {siteConfig.name} – All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;