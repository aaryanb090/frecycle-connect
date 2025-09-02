import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, User, Recycle } from "lucide-react";
import { siteConfig } from "@/config/config";

const NavBar = () => {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green">
            <Recycle className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold font-poppins text-brand-dark">
            {siteConfig.name}
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {siteConfig.nav.map((item) => (
            <Button
              key={item.id}
              variant="nav"
              size="nav"
              onClick={() => handleNavClick(item.href)}
              className="font-inter"
            >
              {item.name}
            </Button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="font-inter">
            <User className="h-4 w-4 mr-2" />
            Login
          </Button>
          <div className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              0
            </Badge>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden px-4 pb-4">
        <nav className="flex justify-center space-x-4">
          {siteConfig.nav.map((item) => (
            <Button
              key={item.id}
              variant="nav"
              size="sm"
              onClick={() => handleNavClick(item.href)}
            >
              {item.name}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;