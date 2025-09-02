import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";
import AimSection from "@/components/AimSection";
import InstagramSection from "@/components/InstagramSection";
import Others from "@/components/Others";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        <Hero />
        <PopularProducts />
        <AimSection />
        <InstagramSection />
        <Others />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
