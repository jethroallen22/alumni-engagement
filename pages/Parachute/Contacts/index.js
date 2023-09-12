import Navbar from "@/components/Parachute/Navbar";
import Footer from "@/components/Parachute/Footer";
import Contacts from "@/components/Parachute/Contacts";

function ParachuteContacts() {
  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <div className="flex-grow">
        <Navbar />
        <Contacts />
      </div>
      <Footer className="sticky bottom-0" />
    </div>
  );
}

export default ParachuteContacts;
