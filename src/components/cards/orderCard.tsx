import { INVOICE_ICON } from "@/assets/icons";

const OrderCard = ({ image, name, amount, date, status }: { name: string, image: string, date: string, amount: string, status: string }) => {
    return(
        <div className="grid grid-cols-9 pt-3 pb-4 border-t border-grey90">
            <div className="col-span-3 flex gap-2.5 items-center">
                <div><img src={image} alt="" width={32} height={32}/></div>
                <div><h5 className="text-black200 text-base font-medium dark:text-white">{name}</h5></div>
            </div>
            <div className="col-span-2">
                <h5 className="text-neutral500 text-base dark:text-white50">{date}</h5>
            </div>
            <div className="col-span-2">
                <h5 className="text-black50 text-base font-medium dark:text-white50">{amount}</h5>
            </div>
            <div className="col-span-1">
                <h5 className={`text-red text-base ${ status === 'Paid' && '!text-primary' }`}>{status}</h5>
            </div>
            <div className="col-span-1 flex justify-end">
                <button className="flex gap-[6px] items-center text-sm leading-[22px] text-black50 dark:text-white50">
                    <INVOICE_ICON/>
                    View
                </button>
            </div>
        </div>
    )
}
export default OrderCard;