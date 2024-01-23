const PlatformCard = ({ name, sales, percentage, percent_width, color  }: { name: string, sales: string, percentage: string, percent_width: number, color: string }) => {
    return(
        <div className="flex flex-col gap-4">
            <div><h4 className="text-black200 text-[18px] font-semibold leading-[26px] dark:text-white">{name}</h4></div>
            <div className="bg-grey70 w-full rounded-[40px] h-3"><div className="h-full rounded-[40px]" style={{ width: percent_width + "%", backgroundColor: color }}></div></div>
            <div className="flex items-center justify-between">
                <h5 className="text-neutral600 text-[18px] leading-[26px] dark:text-white50">{sales}</h5>
                <h5 className="text-neutral600 text-[18px] leading-[26px] dark:white50">{percentage}</h5>
            </div>
        </div>
    )
}
export default PlatformCard;