import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SellForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    productTitle: "",
    sellerName: "",
    sellerMobile: "",
    sellerEmail: "",
    productDescription: "",
    price: "",
    offerPrice: "",
    category: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Placeholder form submission
    toast({
      title: "Form Submitted!",
      description: "Your product listing has been submitted successfully. (This is a placeholder - no backend connected yet)",
    });
    
    // Reset form
    setFormData({
      productTitle: "",
      sellerName: "",
      sellerMobile: "",
      sellerEmail: "",
      productDescription: "",
      price: "",
      offerPrice: "",
      category: "",
    });
  };

  return (
    <div className="min-h-screen bg-hero-gradient py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="shadow-hover border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold font-poppins text-brand-dark">
              Sell Your Product
            </CardTitle>
            <p className="text-muted-foreground font-inter">
              Fill out the form below to list your item on FREECYCLE
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Title */}
              <div className="space-y-2">
                <Label htmlFor="productTitle" className="font-medium font-inter">
                  Product Title *
                </Label>
                <Input
                  id="productTitle"
                  value={formData.productTitle}
                  onChange={(e) => handleInputChange("productTitle", e.target.value)}
                  placeholder="Enter product title"
                  required
                  className="font-inter"
                />
              </div>

              {/* Seller Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sellerName" className="font-medium font-inter">
                    Seller Name *
                  </Label>
                  <Input
                    id="sellerName"
                    value={formData.sellerName}
                    onChange={(e) => handleInputChange("sellerName", e.target.value)}
                    placeholder="Your full name"
                    required
                    className="font-inter"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sellerMobile" className="font-medium font-inter">
                    Mobile Number *
                  </Label>
                  <Input
                    id="sellerMobile"
                    type="tel"
                    value={formData.sellerMobile}
                    onChange={(e) => handleInputChange("sellerMobile", e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="font-inter"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="sellerEmail" className="font-medium font-inter">
                  Email Address *
                </Label>
                <Input
                  id="sellerEmail"
                  type="email"
                  value={formData.sellerEmail}
                  onChange={(e) => handleInputChange("sellerEmail", e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="font-inter"
                />
              </div>

              {/* Product Description */}
              <div className="space-y-2">
                <Label htmlFor="productDescription" className="font-medium font-inter">
                  Product Description *
                </Label>
                <Textarea
                  id="productDescription"
                  value={formData.productDescription}
                  onChange={(e) => handleInputChange("productDescription", e.target.value)}
                  placeholder="Describe your product in detail..."
                  rows={4}
                  required
                  className="font-inter resize-none"
                />
              </div>

              {/* Price Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price" className="font-medium font-inter">
                    Original Price *
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    placeholder="₹0"
                    required
                    className="font-inter"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="offerPrice" className="font-medium font-inter">
                    Offer Price *
                  </Label>
                  <Input
                    id="offerPrice"
                    type="number"
                    value={formData.offerPrice}
                    onChange={(e) => handleInputChange("offerPrice", e.target.value)}
                    placeholder="₹0"
                    required
                    className="font-inter"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category" className="font-medium font-inter">
                  Product Category *
                </Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger className="font-inter">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="books">Books</SelectItem>
                    <SelectItem value="furniture">Furniture</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="sports">Sports & Fitness</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <Label className="font-medium font-inter">
                  Product Images
                </Label>
                <div className="border-2 border-dashed border-brand-green/30 rounded-lg p-8 text-center hover:border-brand-green/50 transition-colors cursor-pointer">
                  <div className="space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center">
                      <Upload className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <p className="font-medium font-inter text-brand-dark">
                        Drag & drop images here
                      </p>
                      <p className="text-sm text-muted-foreground font-inter">
                        or click to browse files
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <ImageIcon className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-sm text-muted-foreground font-inter">
                        PNG, JPG up to 10MB
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full text-lg"
              >
                ADD
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SellForm;