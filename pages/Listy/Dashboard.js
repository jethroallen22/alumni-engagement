import Barchart from "@/components/Listy/Dashboard/Barchart";
import History from "@/components/Listy/Dashboard/History";
import TopCards from "@/components/Listy/Dashboard/TopCards";


export default function Dashboard() {

    return (
        <main>
            <TopCards />
            <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
                <Barchart />
                <History />
            </div>
        </main>
    );
}