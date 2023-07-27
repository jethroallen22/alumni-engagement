import Sidebar from "./Sidebar";


export default function Content({ children }) {

    return (
        <div>
        <Sidebar>
        {children}
        </Sidebar>
        </div>
    )

}