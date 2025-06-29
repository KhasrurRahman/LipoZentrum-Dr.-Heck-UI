import BigCalender from "@/components/BigCalender"
import EventCalendar from "@/components/EventCalendar"
import FormModal from "@/components/FormModal"
import PatientNotes from "@/components/PatientNote"
import SurgeryAppointment from "@/components/SurgeryAppointment"
import Table from "@/components/table"
import { role, PatientPaymentHistory, patientEmailHistoryData, patientDocuments } from "@/lib/data"
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
                    <div className="bg-lamaSky py-6 px-4 mb-2 rounded-xl flex flex-1 gap-4 shadow-lg">
                        <div className="flex-shrink-0 flex items-center justify-center">
                            <Image
                                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                alt=""
                                width={144}
                                height={144}
                                className="w-36 h-36 rounded-full object-cover border-4 border-white shadow"
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-3xl font-bold text-gray-900">Leonard Snyder</h1>
                                <FormModal table="patient" type="update" /* ...props */ />
                            </div>
                            <p className="text-lg text-gray-600 mb-6">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-base text-gray-800">
                                    {/* Height/Weight Icon */}
                                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 2v20m6-10H6" /></svg>
                                    Height: 180cm, Weight: 80kg
                                </div>
                                <div className="flex items-center gap-3 text-base text-gray-800">
                                    {/* Birthday Icon */}
                                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    Birthday: January 2025
                                </div>
                                <div className="flex items-center gap-3 text-base text-gray-800">
                                    {/* Calendar Icon */}
                                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    Surgery Appointment: 5th January 2025
                                </div>
                                <div className="flex items-center gap-3 text-base text-gray-800">
                                    {/* Doctor Icon */}
                                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" /><path d="M6 21v-2a4 4 0 014-4h0a4 4 0 014 4v2" /></svg>
                                    Assigned Doctor: Doctor - 2
                                </div>
                                <div className="flex items-center gap-3 text-base text-gray-800">
                                    {/* Mail Icon */}
                                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /><path d="M22 6l-10 7L2 6" /></svg>
                                    user@gmail.com
                                </div>
                                <div className="flex items-center gap-3 text-base text-gray-800">
                                    {/* Phone Icon */}
                                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M22 16.92V21a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h4.09a2 2 0 012 1.72c.13 1.13.37 2.23.72 3.29a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c1.06.35 2.16.59 3.29.72A2 2 0 0122 16.92z" /></svg>
                                    +1 234 567
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* BOTTOM */}
                {/* SMALL CARDS */}
                <div className="flex-1 flex gap-2 justify-between flex-wrap">
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
                {/* Documents Section */}
                <div className="mt-4 bg-white rounded-md p-4">
                    <h1 className="text-xl font-semibold mb-4">Documents</h1>
                    <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                        {patientDocuments.length === 0 ? (
                            <div className="text-gray-400 text-sm">No documents uploaded.</div>
                        ) : (
                            patientDocuments.map((doc) => (
                                <div
                                    key={doc.id}
                                    className="flex items-center justify-between p-3 rounded-md border border-gray-100 hover:shadow transition"
                                >
                                    <div className="flex items-center gap-3">
                                        {/* Icon based on type */}
                                        {doc.type === "PDF" && (
                                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 2v20m6-10H6" /></svg>
                                        )}
                                        {doc.type === "Image" && (
                                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                                        )}
                                        {doc.type === "Word" && (
                                            <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 17l2-7 2 7 2-7 2 7" /></svg>
                                        )}
                                        <div>
                                            <div className="font-medium">{doc.name}</div>
                                            <div className="text-xs text-gray-400">Uploaded: {doc.uploadedAt}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <a
                                            href={doc.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-3 py-1 rounded bg-lamaSky text-black text-xs hover:bg-lamaSky/80 transition"
                                        >
                                            View
                                        </a>
                                        <a
                                            href={doc.url}
                                            download
                                            className="px-3 py-1 rounded bg-lamaPurple text-black text-xs hover:bg-lamaPurple/80 transition"
                                        >
                                            Download
                                        </a>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
                    <h1 className="text-xl font-semibold">Patient&apos;s Appointment</h1>
                    <BigCalender />
                </div>

            </div>
            {/* RIGHT */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
                {/* Notes */}
                        <PatientNotes />
                {/* Shortcuts */}
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
                {/* Payment History */}
                <div className="my-1 bg-white h-auto p-5 rounded-md border-lamaSky border">
                    <h1 className="text-xl font-semibold">payment History (Last 10)</h1>
                    <Table columns={paymentColumns} renderRow={renderpaymentRow} data={PatientPaymentHistory} />
                </div>
                <div className="my-1 bg-white h-auto p-5 rounded-md border-lamaSky border">
                    <h1 className="text-xl font-semibold">Email Notification History (Last 5)</h1>
                    <Table columns={patientEmailDataColumns} renderRow={renderEmailHistoryRow} data={patientEmailHistoryData} />
                </div>

            </div>
        </div>
    )
}

export default SinglePatientPage