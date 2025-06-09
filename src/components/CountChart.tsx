"use client"
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'total',
        count: 100,
        fill: 'white',
    },
    {
        name: 'New',
        count: 55,
        fill: '#C3EBFA',
    },
    {
        name: 'Old',
        count: 45,
        fill: '#FAE27C',
    },
    
   
];


const CountChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            {/* title */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Old & New Patient</h1>
                <Image src="/moreDark.png" alt="more" width={20} height={20} />
            </div>
            {/* chart */}
            <div className='w-full h-[75%]'>
                <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
        
          
            background
            
            dataKey="count"
          />
        
        </RadialBarChart>
      </ResponsiveContainer>
            </div>
            {/* footer */}
            <div className='flex justify-center gap-16'>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-lamaSky rounded-full'></div>
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-300'>New (55%)</h2>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-lamaYellow rounded-full'></div>
                    <h1 className='font-bold'>700</h1>
                    <h2 className='text-xs text-gray-300'>Old (45%)</h2>
                </div>
            </div>

        </div>
    )
}

export default CountChart