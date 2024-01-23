import Sidebar from "@/components/navigation/sidebar";
import TopBar from "@/components/navigation/topbar";
import Home from "@/pages/home";

const App = () => {
    return(
        <div className="flex">
            <div className="top-0 h-screen max-[768px]:hidden w-20"><Sidebar/></div>
            <div className="w-full flex flex-col">
                <TopBar/>
                <Home/>
            </div>
        </div>
    )
}
export default App;