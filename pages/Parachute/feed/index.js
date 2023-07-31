import Footer from "@/components/Parachute/Footer";
import Navbar from "@/components/Parachute/Navbar";
import Feed from "@/components/Parachute/Feed";

export default function ParachuteFeed() {
  return (
    <div className="bg-[#080808ed]">
      <Navbar />
      <Feed />
      <Footer />
    </div>
  );
}
