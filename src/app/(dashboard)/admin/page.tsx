import AppointmentChart from "@/components/AppointmentChart"
import CountChart from "@/components/CountChart"
import EventCalendar from "@/components/EventCalendar"
import PaymentChart from "@/components/PaymentChart"
import SurgeryAppointment from "@/components/SurgeryAppointment"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* user card */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Patient" />
          <UserCard type="New Appointment" />
          <UserCard type="1s Surgery patient" />
          <UserCard type="Total Payment" />
        </div>
        {/* middle chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* old and new patient */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AppointmentChart />
          </div>

        </div>
        {/* Bottom chart */}
        <div className="w-full h-[500px]">
          <PaymentChart />
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <SurgeryAppointment />
      </div>
    </div>
  )
}

export default AdminPage 