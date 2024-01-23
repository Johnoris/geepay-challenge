import { TREND_ICON } from "@/assets/icons";
import { ReactNode } from "react";

const MetricCard = ({icon, graph, label, value, change}: { icon: ReactNode, graph: ReactNode, label: string, value: string, change: string }) => {
    const is_crashing = change.includes("-");
    return(
        <div className="p-4 rounded-[14px] bg-white rounded-[14px] border border-grey700 flex flex-col justify-between dark:bg-[#191717]">
            <div className="flex items-center justify-between">
                <div>
                    {icon}
                </div>
                <div>
                    {graph}
                </div>
            </div>
            <div className="mt-2.5">
                <div><h4 className="text-grey900 text-[18px] font-medium leading-[26px] dark:text-white">{label}</h4></div>
                <div className="mt-[5px]">
                    <p className="text-black200 text-[24px] leading-[32px] font-semibold dark:text-white">{value}</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-y-1 items-center gap-2.5 mt-2.5">
                <div className={`flex gap-1 items-center px-2 py-1 rounded-[1000px] bg-primary012 stroke-primary ${ is_crashing && '!bg-red012' } `}>
                    <div className={`${ is_crashing && '!stroke-red rotate-[60deg]' } `}><TREND_ICON/></div>
                    <h5 className={`text-xs font-medium text-primary ${ is_crashing && '!text-red' } `}>{change?.replace("-","").replace(".",",")}%</h5>
                </div>
                <div><h5 className="text-grey1000 text-sm font-inter dark:text-white">vs. previous month</h5></div>
            </div>
        </div>
    )
}
export default MetricCard;