import BarLine from "./barLine";

const SalesGraph = () => {
    return(
        <div className="flex items-end gap-6 min-w-[700px]">
            <div className="flex flex-col gap-[33px] pb-[25px] justify-end">
                <h6 className="text-neutral600 text-xs font-semibold dark:text-white">50.000</h6>
                <h6 className="text-neutral600 text-xs font-semibold dark:text-white">40.000</h6>
                <h6 className="text-neutral600 text-xs font-semibold dark:text-white">30.000</h6>
                <h6 className="text-neutral600 text-xs font-semibold dark:text-white">20.000</h6>
                <h6 className="text-neutral600 text-xs font-semibold dark:text-white">10.000</h6>
                <h6 className="text-neutral600 text-xs font-semibold dark:text-white">5.000</h6>
                <h6 className="text-neutral600 text-xs font-semibold dark:text-white">0</h6>
            </div>
            <div className="flex gap-5 items-end h-full w-[calc(100%-70px)] justify-between relative">
                <div className="absolute w-full h-full flex flex-col justify-between pb-[33px] svg-full">
                    <div className="w-full border border-dashed border-t border-[#EAEAEA] dark:border-white20 dark:opacity-60"></div>
                    <div className="w-full border border-dashed border-t border-[#EAEAEA] dark:border-white20 dark:opacity-60"></div>
                    <div className="w-full border border-dashed border-t border-[#EAEAEA] dark:border-white20 dark:opacity-60"></div>
                    <div className="w-full border border-dashed border-t border-[#EAEAEA] dark:border-white20 dark:opacity-60"></div>
                    <div className="w-full border border-dashed border-t border-[#EAEAEA] dark:border-white20 dark:opacity-60"></div>
                    <div className="w-full border border-dashed border-t border-[#EAEAEA] dark:border-white20 dark:opacity-60"></div>
                    <div className="w-full border border-dashed border-t border-[#EAEAEA] dark:border-white20 dark:opacity-60"></div>
                </div>
                <BarLine amount={6} label="Jan"/>
                <BarLine amount={20} label="Feb"/>
                <BarLine amount={3} label="Mar"/>
                <BarLine amount={25} label="Apr"/>
                <BarLine amount={8} label="May"/>
                <BarLine amount={45} label="Jun"/>
                <BarLine amount={9} label="Aug"/>
                <BarLine amount={32} label="Sep"/>
                <BarLine amount={8} label="Oct"/>
                <BarLine amount={30} label="Nov"/>
                <BarLine amount={27} label="Dec"/>
            </div>
        </div>
    )
}
export default SalesGraph;