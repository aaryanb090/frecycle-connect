import { Target, QrCode } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aimData from "@/data/aim.json";
import linksData from "@/data/links.json";

const AimSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="bg-accent/50 border-brand-green/20 shadow-soft">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Our Aim */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-brand-green flex items-center justify-center">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold font-poppins text-brand-dark">
                    OUR AIM
                  </h2>
                </div>
                
                <ul className="space-y-4">
                  {aimData.map((aim, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0"></div>
                      <span className="font-inter text-brand-dark/80">{aim}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help Us Improve */}
              <div className="space-y-6">
                <h2 className="text-2xl lg:text-3xl font-bold font-poppins text-brand-dark">
                  HELP US IMPROVE
                </h2>
                
                <div className="flex justify-center">
                  <div className="w-48 h-48 rounded-lg bg-background border-2 border-dashed border-brand-green/30 flex items-center justify-center">
                    <div className="text-center text-brand-green/60">
                      <QrCode className="h-16 w-16 mx-auto mb-3" />
                      <p className="font-inter text-sm">Feedback QR</p>
                      <p className="font-inter text-xs opacity-60">{linksData.qrCodes.feedback}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AimSection;