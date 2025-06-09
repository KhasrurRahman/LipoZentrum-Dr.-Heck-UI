import BigCalender from "@/components/BigCalender"

const AppointPage = () => {
  return (
    <div className="p-4 flex">
        <div className="w-full">
            <h1 className="text-2xl font-bold mb-4">Appointments</h1>
            <p className="mb-4">Manage your appointments here.</p>
            {/* Placeholder for calendar component */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <BigCalender/>
            </div>
        </div>
    </div>
  )
}

export default AppointPage