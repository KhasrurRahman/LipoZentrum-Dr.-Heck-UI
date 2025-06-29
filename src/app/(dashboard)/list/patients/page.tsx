
import FormModal from "@/components/FormModal";
import Pagination from "@/components/pagination";
import Table from "@/components/table";
import TableSearch from "@/components/TableSearch";
import { role, patientsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Patient = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Patient ID",
    accessor: "patientId",
    className: "hidden md:table-cell",
  },

  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const PatientListPage = () => {
  const renderRow = (item: Patient) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/patients/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
          <FormModal table="patient" type="update" id={item.id} />
          <FormModal table="patient" type="delete" id={item.id} />
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Patients</h1>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          {/* <TableSearch /> */}
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <FormModal table="patient" type="create" />
          </div>
        </div>
      </div>

      {/* filter section */}
      <div className="flex flex-col md:flex-row items-center gap-4 my-5 p-2 border border-lamaSky rounded-md bg-lamaSkyLight shadow-sm">
        <div className="flex flex-col w-48">
          <label htmlFor="doctor" className="mb-1 text-xs text-gray-600 font-medium">Assigned Doctor</label>
          <select
            id="doctor"
            className="border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lamaSky bg-white appearance-none shadow-sm text-gray-700"
            defaultValue=""
          >
            <option value="" disabled>
              Select
            </option>
            <option value="active">Doctor -1</option>
            <option value="inactive">Doctor - 2</option>
            <option value="pending">Doctor - 3</option>
          </select>
        </div>

        <div className="flex flex-col w-48">
          <label htmlFor="stage" className="mb-1 text-xs text-gray-600 font-medium">Surgery Stage</label>
          <select
            id="stage"
            className="border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lamaSky bg-white appearance-none shadow-sm text-gray-700"
            defaultValue=""
          >
            <option value="" disabled>
              Select
            </option>
            <option value="active">1st Stage</option>
            <option value="inactive">2nd Stage</option>
            <option value="pending">3rd Stage</option>
          </select>
        </div>


        <div className="flex flex-col w-48">
          <label htmlFor="stage" className="mb-1 text-xs text-gray-600 font-medium">Consultation Type</label>
          <select
            id="stage"
            className="border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lamaSky bg-white appearance-none shadow-sm text-gray-700"
            defaultValue=""
          >
            <option value="" disabled>
              Select
            </option>
            <option value="active">Pre-consultation</option>
            <option value="inactive">post-consultation</option>
          </select>
        </div>

        <div className="flex flex-col w-48">
          <label htmlFor="name" className="mb-1 text-xs text-gray-600 font-medium">Age</label>
          <input
            id="age"
            type="number"
            placeholder="Age"
            className="border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lamaSky"
          />
        </div>

        <div className="flex flex-col w-48">
          <label htmlFor="phone" className="mb-1 text-xs text-gray-600 font-medium">Zip-code</label>
          <input
            id="zip_code"
            type="text"
            placeholder="Zip-code"
            className="border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lamaSky"
          />
        </div>

        <div className="flex flex-col w-48">
          <label className="mb-1 text-xs text-transparent select-none">Search</label>
          <button className="flex items-center gap-2 bg-lamaSky text-black px-4 py-2 rounded-md hover:bg-lamaSky/80 transition w-full">
            <Image src="/search.png" alt="Search" width={16} height={16} />
            <span className="hidden md:inline">Search</span>
          </button>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={patientsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default PatientListPage;