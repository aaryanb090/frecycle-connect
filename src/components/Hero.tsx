import { Button } from "@/components/ui/button";
import { Recycle } from "lucide-react";
import { siteConfig } from "@/config/config";

const Hero = () => {
  return (
    <section id="buy" className="relative min-h-[80vh] bg-hero-gradient">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-brand-dark/70 font-inter text-lg">
              {siteConfig.tagline}
            </p>
            
            <div className="flex items-center space-x-4">
              <h1 className="text-5xl lg:text-7xl font-bold font-poppins text-brand-dark">
                {siteConfig.name}
              </h1>
              <div className="flex-shrink-0">
                <div className="h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-brand-green/20 flex items-center justify-center">
                  <Recycle className="h-6 w-6 lg:h-8 lg:w-8 text-brand-green" />
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-8 py-4 h-14"
              >
                Latest
              </Button>
            </div>
          </div>

          {/* Right Content - Placeholder Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-brand-green/10 border-4 border-brand-green/20 flex items-center justify-center">
              <div className="text-center text-brand-green/60">
                <div className="w-24 h-24 mx-auto rounded-full bg-brand-green/20 flex items-center justify-center mb-4">
                  <Recycle className="h-12 w-12" />
                </div>
                <p className="font-inter text-sm">Hero Leaf Image</p>
                <p className="font-inter text-xs opacity-60">{siteConfig.placeholders.heroLeaf}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;