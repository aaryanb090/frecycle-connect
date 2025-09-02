import { Card, CardContent } from "@/components/ui/card";
import { Construction, Clock } from "lucide-react";

const Others = () => {
  return (
    <section id="others" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="shadow-soft border-border/50">
            <CardContent className="py-16 px-8">
              <div className="space-y-6">
                <div className="mx-auto w-20 h-20 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <Construction className="h-10 w-10 text-brand-green" />
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-brand-dark">
                  Others Section Coming Soon
                </h2>
                
                <p className="text-muted-foreground font-inter text-lg max-w-md mx-auto">
                  We're working on exciting new features for this section. Stay tuned for updates!
                </p>
                
                <div className="flex items-center justify-center space-x-2 text-brand-green">
                  <Clock className="h-5 w-5" />
                  <span className="font-inter text-sm">Under Development</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Others;