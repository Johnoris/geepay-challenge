import { ACTIVE_NAVIGATOR_ICON } from "@/assets/icons";
import { Dispatch, ReactNode, SetStateAction} from "react";

const AppNavigator = ({ alias, icon, activeRoute, setActiveRoute }: { alias: string, icon: ReactNode, activeRoute: string, setActiveRoute: Dispatch<SetStateAction<string>> }) => {

    const isActive = activeRoute === alias;

    return(
        <div className="px-[28px] cursor-pointer relative" onClick={() => setActiveRoute(alias)}>
            <div className="no-transition"><div className={`stroke-grey100 fill-grey100 dark:stroke-[#666666] dark:fill-[#666666]  ${ isActive && '!stroke-black50 !fill-black50 dark:!stroke-white dark:!fill-white' }`}>{icon}</div></div>
            {
                isActive
                    &&
                <div className="absolute w-full h-full flex justify-end items-center left-0 top-0"><ACTIVE_NAVIGATOR_ICON/></div>
            }
        </div>
    )
}
export default AppNavigator;