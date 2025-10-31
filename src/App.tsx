import { useState } from "react";
import { Mode } from "./types";
import { cafeMenu, restaurantMenu } from "./data/menuData";
import ModeToggle from "./components/ModeToggle";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
// import PartyOrders from "./components/PartyOrders"; // ❌ Removed
import OrderModal from "./components/OrderModal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookTableForm from "./components/BookTableForm"; // ✅ Keep booking form

function App() {
  const [mode, setMode] = useState<Mode>("cafe");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleMode = () => setMode(mode === "cafe" ? "restaurant" : "cafe");
  const handleExploreMenu = () =>
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });

  const handleOrderClick = (itemName: string) => setSelectedItem(itemName);
  const handleCloseModal = () => setSelectedItem(null);

  const currentMenu = mode === "cafe" ? cafeMenu : restaurantMenu;

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/10758468.png')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Page Content */}
      <div className="relative z-10">
        <ModeToggle mode={mode} onToggle={toggleMode} />
        <Hero mode={mode} onExploreMenu={handleExploreMenu} />
        <About mode={mode} />
        <Services mode={mode} />
        <Menu mode={mode} items={currentMenu} onOrderClick={handleOrderClick} />
        <Gallery mode={mode} />

        {/* ✅ Removed PartyOrders section */}
        {/* <PartyOrders mode={mode} /> */}

        {/* ✅ Keep booking form */}
        <BookTableForm />

        <Contact mode={mode} />
        <Footer mode={mode} />

        {selectedItem && (
          <OrderModal
            mode={mode}
            selectedItem={selectedItem}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
}

export default App;
