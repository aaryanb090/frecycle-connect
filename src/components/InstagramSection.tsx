import { Button } from "@/components/ui/button";
import { Instagram, Mail, QrCode } from "lucide-react";
import { siteConfig } from "@/config/config";
import linksData from "@/data/links.json";

const InstagramSection = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${siteConfig.social.email}`;
  };

  const handleInstagramClick = () => {
    window.open(siteConfig.social.instagram.url, '_blank');
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-bold font-poppins text-brand-dark leading-tight">
              FOLLOW US ON INSTAGRAM FOR REGULAR PRODUCT UPDATES!
            </h2>
            
            <div className="space-y-4">
              {/* Instagram Chip */}
              <Button
                onClick={handleInstagramClick}
                variant="outline"
                className="rounded-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white transition-all duration-200 w-fit"
              >
                <Instagram className="h-4 w-4 mr-2" />
                Instagram: {siteConfig.social.instagram.handle}
              </Button>
              
              {/* Email Chip */}
              <Button
                onClick={handleEmailClick}
                variant="outline"
                className="rounded-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white transition-all duration-200 w-fit"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email: {siteConfig.social.email}
              </Button>
            </div>
          </div>

          {/* Right Content - QR Code */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-64 h-64 rounded-lg bg-muted border-2 border-dashed border-brand-green/30 flex items-center justify-center">
              <div className="text-center text-brand-green/60">
                <QrCode className="h-20 w-20 mx-auto mb-3" />
                <p className="font-inter text-sm">Instagram QR</p>
                <p className="font-inter text-xs opacity-60">{linksData.qrCodes.instagram}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;