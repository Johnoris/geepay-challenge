import { AVERAGE_SALES_ICON, CRASHING_GRAPH, INCREASING_GRAPH, TOTAL_INCOME_ICON, TOTAL_ORDERS_ICON, TOTAL_REFUNDS_ICON } from "@/assets/icons"
import { DUMMY_ORDER_1, DUMMY_ORDER_2, DUMMY_ORDER_3, DUMMY_ORDER_4, DUMMY_ORDER_5 } from "@/assets/images"
import MetricCard from "@/components/cards/metricCard"
import OrderCard from "@/components/cards/orderCard"
import PlatformCard from "@/components/cards/platformCard"
import SalesGraph from "@/components/graphs/salesGraph"

const Home = () => {
    return(
        <div className="bg-white50 h-full p-5 dark:bg-[linear-gradient(to_bottom_right,_#3C3C3C,_#333333)]">
            <section className="grid grid-cols-5 gap-5 max-[1200px]:grid-cols-2">
                <div className="col-span-3 max-[1200px]:col-span-2 bg-white rounded-[14px] px-5 py-4 border border-grey700 flex flex-col justify-between dark:bg-[#191717]">
                    <div className="flex justify-between items-center max-[425px]:flex-col max-[425px]:items-start gap-y-2">
                        <div><h4 className="text-black100 text-[18px] font-semibold dark:text-white">Sales Trends</h4></div>
                        <div className="flex gap-2.5 items-center">
                            <label className="text-black200 text-sm font-medium leading-[22px] dark:text-white50" htmlFor="filter">Sort by : </label>
                            <select className="px-3 py-[6px] border border-grey800 rounded-[20px] text-xs outline-none bg-white" id="filter">
                                <option disabled>Select an option</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-5  overflow-x-scroll hide-scroll">
                        <SalesGraph/>
                    </div>
                </div>
                <div className="grid grid-cols-2 col-span-2 gap-4 max-[620px]:grid-cols-1">
                    <MetricCard
                        icon={<TOTAL_ORDERS_ICON/>}
                        graph={<INCREASING_GRAPH/>}
                        change="23.5"
                        label="Total Order"
                        value="350"
                    />
                    <MetricCard
                        icon={<TOTAL_REFUNDS_ICON/>}
                        graph={<CRASHING_GRAPH/>}
                        change="-23.5"
                        label="Total Refund"
                        value="270"
                    />
                    <MetricCard
                        icon={<AVERAGE_SALES_ICON/>}
                        graph={<CRASHING_GRAPH/>}
                        change="-23.5"
                        label="Average Sales"
                        value="1567"
                    />
                    <MetricCard
                        icon={<TOTAL_INCOME_ICON/>}
                        graph={<INCREASING_GRAPH/>}
                        change="23.5"
                        label="Total Income"
                        value="$350.000"
                    />
                </div>
            </section>
            <section className="grid grid-cols-5 gap-5 mt-5 max-[1200px]:grid-cols-2">
                <div className="col-span-3 max-[1200px]:col-span-2 bg-white rounded-[14px] px-5 pt-[18px] border border-grey700 dark:bg-[#191717]">
                    <div className="flex justify-between items-center">
                        <div><h4 className="text-[18px] font-semibold leading-[26px] dark:text-white">Last Orders</h4></div>
                        <button className="text-primary text-[18px] font-medium leading-[26px]">See All</button>
                    </div>
                    <div className="mt-[14px] overflow-x-scroll hide-scroll">
                        <div className="min-w-[700px]">
                            <div className="grid grid-cols-9">
                                <div className="col-span-3">
                                    <h5 className="text-grey80 text-base font-medium dark:text-white">Name</h5>
                                </div>
                                <div className="col-span-2">
                                    <h5 className="text-grey80 text-base font-medium dark:text-white">Date</h5>
                                </div>
                                <div className="col-span-2">
                                    <h5 className="text-grey80 text-base font-medium dark:text-white">Amount</h5>
                                </div>
                                <div className="col-span-1">
                                    <h5 className="text-grey80 text-base font-medium dark:text-white">Status</h5>
                                </div>
                                <div className="col-span-1">
                                    <h5 className="text-grey80 text-base font-medium text-right dark:text-white">Invoice</h5>
                                </div>
                            </div>
                            <div className="mt-5">
                                <OrderCard
                                    amount="$80,000"
                                    date="Nov 15, 2023"
                                    image={DUMMY_ORDER_1}
                                    name="Marcus Bergson"
                                    status="Paid"
                                />
                                <OrderCard
                                    amount="$150,000"
                                    date="Nov 15, 2023"
                                    image={DUMMY_ORDER_2}
                                    name="Jaydon Vaccaro"
                                    status="Refund"
                                />
                                <OrderCard
                                    amount="$87,000"
                                    date="Nov 14, 2023"
                                    image={DUMMY_ORDER_3}
                                    name="Corey Schleifer"
                                    status="Paid"
                                />
                                <OrderCard
                                    amount="$100,000"
                                    date="Nov 14, 2023"
                                    image={DUMMY_ORDER_4}
                                    name="Cooper Press"
                                    status="Refund"
                                />
                                <OrderCard
                                    amount="$78,000"
                                    date="Nov 14, 2023"
                                    image={DUMMY_ORDER_5}
                                    name="Phillip Lubin"
                                    status="Paid"
                                />
                                <OrderCard
                                    amount="$80,000"
                                    date="Nov 15, 2023"
                                    image={DUMMY_ORDER_1}
                                    name="Marcus Bergson"
                                    status="Paid"
                                />
                                <OrderCard
                                    amount="$150,000"
                                    date="Nov 15, 2023"
                                    image={DUMMY_ORDER_2}
                                    name="Jaydon Vaccaro"
                                    status="Refund"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 bg-white rounded-lg px-5 py-4 pb-8 border border-grey700 dark:bg-[#191717]">
                    <div className="flex justify-between items-center">
                        <div><h4 className="text-[18px] font-semibold leading-[26px] dark:text-white">Top Platform</h4></div>
                        <button className="text-primary text-[18px] font-medium leading-[26px]">See All</button>
                    </div>
                    <div className="flex flex-col gap-5 mt-5">
                        <PlatformCard
                            name="Book Bazaar"
                            sales="$2,500,000"
                            percent_width={54.2}
                            percentage="+15%"
                            color="#6160DC"
                        />
                        <PlatformCard
                            name="Artisan Aisle"
                            sales="$1,800,000"
                            percent_width={45.1}
                            percentage="+10%"
                            color="#54C5EB"
                        />
                        <PlatformCard
                            name="Toy Troop"
                            sales="$1,200,000"
                            percent_width={27}
                            percentage="+8%"
                            color="#FFB74A"
                        />
                        <PlatformCard
                            name="Book Bazaar"
                            sales="$600,000"
                            percent_width={27}
                            percentage="+5%"
                            color="#FF4A55"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home