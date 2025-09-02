import NavBar from "@/components/NavBar";
import SellForm from "@/components/SellForm";
import Footer from "@/components/Footer";

const Sell = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        <SellForm />
      </main>
      <Footer />
    </div>
  );
};

export default Sell;