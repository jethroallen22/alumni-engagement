import Footer from "@/components/Parachute/Footer";
import Navbar from "@/components/Parachute/Navbar";
import Jobs from "@/components/Parachute/Jobs";

export default function Parachute() {
  return (
    <div className="bg-[#080808ed]">
      <Navbar />
      <Jobs />
      <Footer />
    </div>
  );
}
