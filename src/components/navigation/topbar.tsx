import { ARROW, CALENDAR_ICON, LOGO, NOTIFICATIONS_ICON, SEARCH_ICON } from "@/assets/icons";
import { USER_IMG } from "@/assets/images";
import { useRef } from "react";
import useCloseOnClickOutside from "use-close-on-click-outside";
import Sidebar from "./sidebar";

const TopBar = () => {
    const sidebarRef = useRef(null);
    const [ sidebarActive, setSidebarActive ] = useCloseOnClickOutside(sidebarRef)
    return(
        <div className="border-b border-grey50 px-5 flex items-center justify-between bg-white50 py-[18px] w-full dark:bg-[linear-gradient(to_left,_#3C3C3C,_#333333)] dark:border-black ml-[-1px]">
            { sidebarActive && <div ref={sidebarRef} className="fixed h-[100dvh] bottom-0 left-0 z-40"><Sidebar/></div> }
            <div className="hidden max-[768px]:block">
                <div onClick={() => setSidebarActive(true)}><LOGO/></div>
            </div>
            <div className="max-[768px]:hidden">
                <h1 className="text-black100 text-[20px] leading-[28px] font-semibold dark:text-white">Dashboard</h1>
            </div>
            <div className="flex items-center">
                <div className="rounded-[24px] px-4 flex gap-2 items-center border border--grey400 bg-white py-3 w-[349px] max-[1000px]:rounded-full max-[1000px]:p-0 max-[1000px]:justify-center max-[1000px]:w-10 max-[1000px]:h-10">
                    <SEARCH_ICON/>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="text-base text-black100 placeholder:text-grey300 bg-transparent w-full outline-none max-[1000px]:hidden"
                    />
                </div>
                <div className="flex items-center gap-2.5 ml-[38px] max-[1100px]:hidden">
                    <CALENDAR_ICON/>
                    <div><h5 className="text-black100 text-sm leading-[22px] font-medium dark:text-white">{new Intl.DateTimeFormat('en-US',  { year: 'numeric',  month: 'long', day: 'numeric' }).format( new Date())}</h5></div>
                </div>
                <div className="ml-9">
                    <NOTIFICATIONS_ICON/>
                </div>
                <div className="ml-5 border border-grey400 rounded-[28px] flex gap-2 items-center p-2 max-[1000px]:hidden">
                    <div>
                        <img src={USER_IMG} alt="" width={38} height={38}/>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="flex flex-col gap-1">
                            <h5 className="text-black100 text-base leading-[19px] text-right dark:text-white">Justin Bergson</h5>
                            <h6 className="text-grey600 text-sm leading-[17px] text-right dark:text-white">Justin@gmail.com</h6>
                        </div>
                        <div><ARROW/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopBar;