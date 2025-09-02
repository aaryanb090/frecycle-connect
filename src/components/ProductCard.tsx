import { Card, CardContent } from "@/components/ui/card";
import { Package } from "lucide-react";

interface Product {
  id: number;
  name: string;
  before: string;
  now: string;
  img: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-hover hover:-translate-y-1 border-border/50">
      <CardContent className="p-4">
        {/* Product Image Placeholder */}
        <div className="aspect-square rounded-lg bg-muted flex items-center justify-center mb-4 overflow-hidden">
          <div className="text-center text-muted-foreground">
            <Package className="h-12 w-12 mx-auto mb-2" />
            <p className="text-sm font-inter">{product.name}</p>
            <p className="text-xs opacity-60">{product.img}</p>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-medium font-poppins text-foreground group-hover:text-brand-green transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground line-through font-inter">
              {product.before}
            </span>
            <span className="text-lg font-bold text-brand-green font-inter">
              {product.now}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;