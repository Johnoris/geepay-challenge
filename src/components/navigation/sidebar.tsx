import { ARROW_LEFT_ICON, ARROW_RIGHT_ICON, BOX_ICON, DARK_MODE_ICON, DISCOUNT_ICON, HOME_ICON, INFO_ICON, LIGHT_MODE_ICON, LOGO, PEOPLE_ICON, SETTINGS_ICON, TRENDS_ICON } from "@/assets/icons";
import AppNavigator from "../buttons/appNavigator";
import { useState } from "react";

const Sidebar = () => {
    const [ activeRoute, setActiveRoute ] = useState("home");
    const [ isDarkMode, setIsDarkMode ] = useState(false)

    return(
        <div className="bg-white20 border-r border-grey50 w-max py-5 h-full oveflow-y-scroll hide-scroll dark:bg-[#3C3C3C] dark:border-black">
            <div className="px-5">
                <LOGO/>
            </div>
            <div className="mt-5 flex flex-col gap-8">
                <AppNavigator icon={<HOME_ICON/>} alias="home" activeRoute={activeRoute} setActiveRoute={setActiveRoute}/>
                <AppNavigator icon={<TRENDS_ICON/>} alias="trends" activeRoute={activeRoute} setActiveRoute={setActiveRoute}/>
                <AppNavigator icon={<PEOPLE_ICON/>} alias="people" activeRoute={activeRoute} setActiveRoute={setActiveRoute}/>
                <AppNavigator icon={<BOX_ICON/>} alias="orders" activeRoute={activeRoute} setActiveRoute={setActiveRoute}/>
                <AppNavigator icon={<DISCOUNT_ICON/>} alias="discount" activeRoute={activeRoute} setActiveRoute={setActiveRoute}/>
                <AppNavigator icon={<INFO_ICON/>} alias="info" activeRoute={activeRoute} setActiveRoute={setActiveRoute}/>
            </div>
            <div className="p-2 rounded-[100px] flex flex-col gap-4 bg-white w-max mx-auto relative mt-6 dark:bg-[linear-gradient(to_bottom_right,_#d2b48c,_#333333)] dark:backdrop-blur">
                <div className="w-[30px] h-[30px] grid place-items-center z-10 cursro-pointer" onClick={() => { document.querySelector('html')?.classList.remove('dark'); setIsDarkMode(false)}}><LIGHT_MODE_ICON color={ isDarkMode ? '#B2ABAB' : undefined }/></div>
                <div className="w-[30px] h-[30px] grid place-items-center z-10 cursor-pointer" onClick={() => { document.querySelector('html')?.classList.add('dark'); setIsDarkMode(true)}}><DARK_MODE_ICON color={ isDarkMode ? '#000' : '#B2ABAB'}/></div>
                <div className={`absolute w-full h-full top-0 left-0 p-2 flex ${ isDarkMode && 'items-end' }`}>
                    <div className={`w-[30px] h-[30px] rounded-full bg-primary ${ isDarkMode && 'bg-white' }`}></div>
                </div>
            </div>
            <div className="flex flex-col gap-8 mt-[202px]">
                <AppNavigator icon={<ARROW_RIGHT_ICON/>} alias="right" activeRoute={activeRoute} setActiveRoute={setActiveRoute}/>
                <AppNavigator icon={<SETTINGS_ICON/>} alias="settings" activeRoute={activeRoute} setActiveRoute={setActiveRoute}/>
                <AppNavigator icon={<ARROW_LEFT_ICON/>} alias="left" activeRoute={activeRoute} setActiveRoute={setActiveRoute}/>
            </div>
        </div>
    )
}
export default Sidebar;