"use client"

import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        amount: 2000,
    },
    {
        name: 'Feb',
        amount: 3000,
    },
    {
        name: 'Mar',
        amount: 2000,
    },
    {
        name: 'Apr',
        amount: 2780,
    },
    {
        name: 'May',
        amount: 1890,
    },
    {
        name: 'June',
        amount: 2390,
    },
    {
        name: 'July',
        amount: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Aug',
        amount: 2000,
    },
    {
        name: 'Sep',
        amount: 3490,
    },
    {
        name: 'Oct',
        amount: 400,
    },
];

const PaymentChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Payment Chart (Last 12 months)</h1>
                <Image src="/moreDark.png" alt="more" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" axisLine={false} tick={{fill:'#d1d5db'}} tickMargin={10}/>
                    <YAxis axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false}/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="amount" stroke="#FAE27C" activeDot={{ r: 8 }} strokeWidth={5} />
               
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PaymentChart