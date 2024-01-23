import { BAR_LABEL } from "@/assets/icons";
import { useRef } from "react";
import useCloseOnClickOutside from "use-close-on-click-outside";

const BarLine = ({ amount, label }: { amount: number, label: string }) => {
    const percent_height = (amount / 50) * 100 
    const barRef = useRef(null);
    const [ is_active, setIsActive ] = useCloseOnClickOutside(barRef)

    return(
        <div className="flex flex-col gap-3 z-10">
            <div className="h-[294px] flex items-end">
                <div 
                    ref={barRef} 
                    onClick={() => setIsActive(true)} 
                    onMouseEnter={() => setIsActive(true)} 
                    onMouseLeave={() => setIsActive(false)} 
                    className={`w-[30px] bg-primary01 rounded-t-[20px] relative z-10 ${ is_active && '!bg-[linear-gradient(180deg,#34CAA5_0%,_rgba(52,202,165,0.00)_100%)]' }`} style={{ height: percent_height + "%" }}
                >
                {
                    is_active
                        &&
                    <div className="absolute -top-[35px] mx-auto left-auto right-auto relative flex justify-center">
                        <div className="absolute w-full h-full flex justify-center pt-[5px]">
                            <h5 className="text-white font-inter text-xs text-center font-medium dark:text-black">${amount}.000</h5>
                        </div>
                        <div><BAR_LABEL/></div>
                        
                    </div>
                }
                </div>
            </div>
            <div><h5 className="text-neutral600  text-sm leading-[22px] font-semibold dark:text-white50">{label}</h5></div>
        </div>
    )
}
export default BarLine;