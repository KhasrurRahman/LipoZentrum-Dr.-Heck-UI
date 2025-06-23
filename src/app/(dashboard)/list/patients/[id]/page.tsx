import BigCalender from "@/components/BigCalender"
import EventCalendar from "@/components/EventCalendar"
import FormModal from "@/components/FormModal"
import SurgeryAppointment from "@/components/SurgeryAppointment"
import Table from "@/components/table"
import { role, PatientPaymentHistory, patientEmailHistoryData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type paymentdata = {
    id: number;
    date: string;
    amount: string;
}

const paymentColumns = [
    {
        header: "Id",
        accessor: "id",
    },
    {
        header: "Payment Date",
        accessor: "date",
    },
    {
        header: "Amount",
        accessor: "amount",
    },
]
type patientEmaildata = {
    id: number;
    subject: string;
    date: string;
}

const patientEmailDataColumns = [
    {
        header: "Id",
        accessor: "id",
    },
    {
        header: "Subject",
        accessor: "subject",
    },
    {
        header: "Sent Date",
        accessor: "sentDate",
    },
]

const renderpaymentRow = (item: paymentdata) => (
    <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
        <td className="flex items-center gap-4 p-4">
            <div className="flex flex-col">
                <h3 className="font-semibold">{item.id}</h3>
            </div>
        </td>

        <td className="table-cell">{item.date}</td>
        <td className="table-cell">{item.amount}</td>
    </tr>
);

const renderEmailHistoryRow = (item: patientEmaildata) => (
    <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
        <td className="flex items-center gap-4 p-4">
            <div className="flex flex-col">
                <h3 className="font-semibold">{item.id}</h3>
            </div>
        </td>

        <td className="table-cell">{item.subject}</td>
        <td className="table-cell">{item.date}</td>
    </tr>
);


const SinglePatientPage = () => {

    return (
        <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
            {/* LEFT */}
            <div className="w-full xl:w-2/3">
                {/* TOP */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* USER INFO CARD */}
                    <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
                        <div className="w-1/3">
                            <Image
                                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                alt=""
                                width={144}
                                height={144}
                                className="w-36 h-36 rounded-full object-cover"
                            />
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <h1 className="text-xl font-semibold">Leonard Snyder</h1>
                                <FormModal table="patient" type="update"
                                    data={{
                                        username: "leonard_snyder",
                                        email: "asdasd@gmail.com",
                                        firstName: "Leonard",
                                        lastName: "Snyder",
                                        phone: "+1 234 567",
                                        address: "123 Main St, City, Country",
                                        birthday: "1990-01-01",
                                        bloodType: "A+",
                                        gender: "male",
                                        img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                                    }}
                                />
                            </div>
                            <p className="text-sm text-gray-500">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p>
                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/blood.png" alt="" width={14} height={14} />
                                    <span>A+</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/date.png" alt="" width={14} height={14} />
                                    <span>January 2025</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/mail.png" alt="" width={14} height={14} />
                                    <span>user@gmail.com</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/phone.png" alt="" width={14} height={14} />
                                    <span>+1 234 567</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SMALL CARDS */}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image
                                src="/singleAttendance.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div className="">
                                <h1 className="text-xl font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Task progress</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image
                                src="/singleBranch.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div className="">
                                <h1 className="text-xl font-semibold">1st</h1>
                                <span className="text-sm text-gray-400">Consultation Done</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image
                                src="/singleLesson.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div className="">
                                <h1 className="text-xl font-semibold">6</h1>
                                <span className="text-sm text-gray-400">Task Completed</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image
                                src="/singleClass.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div className="">
                                <h1 className="text-xl font-semibold">12,000.00</h1>
                                <span className="text-sm text-gray-400">paid</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BOTTOM */}
                <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
                    <h1 className="text-xl font-semibold">Patient&apos;s Appointment</h1>
                    <BigCalender />
                </div>

                <div className="mt-4 mb-4 bg-white h-auto p-5 rounded-md border-lamaSky border">
                    <h1 className="text-xl font-semibold">payment History (Last 10)</h1>
                    <Table columns={paymentColumns} renderRow={renderpaymentRow} data={PatientPaymentHistory} />

                </div>


            </div>
            {/* RIGHT */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
                <div className="bg-white p-4 rounded-md">
                    <h1 className="text-xl font-semibold">Shortcuts</h1>
                    <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
                        <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
                            payment History
                        </Link>
                        <Link className="p-3 rounded-md bg-lamaPurpleLight" href="/">
                            Appointment History
                        </Link>
                        <Link className="p-3 rounded-md bg-lamaYellowLight" href="/">
                            Assign Task
                        </Link>
                        <Link className="p-3 rounded-md bg-pink-50" href="/">
                            Send Custom Email
                        </Link>
                        <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
                            Send Custom SMS
                        </Link>
                    </div>
                </div>
                {/* <Performance /> */}
                <SurgeryAppointment />
                <div className="mt-4 mb-4 bg-white h-auto p-5 rounded-md border-lamaSky border">
                    <h1 className="text-xl font-semibold">Email Notification History (Last 5)</h1>
                    <Table columns={patientEmailDataColumns} renderRow={renderEmailHistoryRow} data={patientEmailHistoryData} />

                </div>

            </div>
        </div>
    )
}

export default SinglePatientPage