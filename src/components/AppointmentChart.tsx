"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        NumberOfAppointment: 10,
    },
    {
        name: 'Tue',
        NumberOfAppointment: 5,
    },
    {
        name: 'Wed',
        NumberOfAppointment: 3,
    },
    {
        name: 'Thu',
        NumberOfAppointment: 7,
    },
    {
        name: 'Fri',
        NumberOfAppointment: 2,
    },
];


const AppointmentChart = () => {
    return (
        <div className='bg-white rounded-lg p-4 h-full'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Weekly Appointment Chart</h1>
                <Image src="/moreDark.png" alt="more" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                    <XAxis dataKey="name" axisLine={false} tick={{fill:'#d1d5db'}} tickMargin={10}/>
                    <YAxis axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false}/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="NumberOfAppointment" fill="#C3EBFA" legendType='circle' radius={[10,10,0,0]} activeBar={<Rectangle fill="pink" stroke="blue" />} />

                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}

export default AppointmentChart