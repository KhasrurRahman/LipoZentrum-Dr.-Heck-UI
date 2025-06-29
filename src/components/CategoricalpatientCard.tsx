"use client";

import { useState } from "react";

// Dummy data for categories and patients
const categories = [
    { key: "active", label: "Most Active" },
    { key: "pending", label: "Pending Bookings" },
    { key: "gamification", label: "Top Gamification" },
    { key: "connected", label: "Most Connected" },
];

const patientsByCategory = {
    active: [
        { id: 1, name: "Alice Smith", value: "120 min" },
        { id: 2, name: "Bob Jones", value: "110 min" },
        { id: 3, name: "Charlie Brown", value: "105 min" },
        { id: 4, name: "Diana Prince", value: "100 min" },
        { id: 5, name: "Ethan Hunt", value: "98 min" },
        { id: 6, name: "Fiona Gallagher", value: "95 min" },
        { id: 7, name: "George Miller", value: "92 min" },
        { id: 8, name: "Hannah Lee", value: "90 min" },
        { id: 9, name: "Ian Curtis", value: "88 min" },
        { id: 10, name: "Julia Roberts", value: "85 min" },
    ],
    pending: [
        { id: 11, name: "Kevin Hart", value: "Awaiting" },
        { id: 12, name: "Linda Kim", value: "Awaiting" },
        { id: 13, name: "Michael Scott", value: "Awaiting" },
        { id: 14, name: "Nina Simone", value: "Awaiting" },
        { id: 15, name: "Oscar Wilde", value: "Awaiting" },
        { id: 16, name: "Pam Beesly", value: "Awaiting" },
        { id: 17, name: "Quentin Blake", value: "Awaiting" },
        { id: 18, name: "Rachel Green", value: "Awaiting" },
        { id: 19, name: "Steve Rogers", value: "Awaiting" },
        { id: 20, name: "Tina Fey", value: "Awaiting" },
    ],
    gamification: [
        { id: 21, name: "Uma Thurman", value: "Level 5" },
        { id: 22, name: "Victor Hugo", value: "Level 5" },
        { id: 23, name: "Wendy Darling", value: "Level 4" },
        { id: 24, name: "Xander Cage", value: "Level 4" },
        { id: 25, name: "Yara Shahidi", value: "Level 4" },
        { id: 26, name: "Zane Malik", value: "Level 3" },
        { id: 27, name: "Ava Gardner", value: "Level 3" },
        { id: 28, name: "Ben Affleck", value: "Level 3" },
        { id: 29, name: "Cathy Freeman", value: "Level 2" },
        { id: 30, name: "David Tennant", value: "Level 2" },
    ],
    connected: [
        { id: 31, name: "Elon Musk", value: "12 connections" },
        { id: 32, name: "Felicity Jones", value: "11 connections" },
        { id: 33, name: "Gordon Ramsay", value: "10 connections" },
        { id: 34, name: "Helen Mirren", value: "10 connections" },
        { id: 35, name: "Isaac Newton", value: "9 connections" },
        { id: 36, name: "Jackie Chan", value: "9 connections" },
        { id: 37, name: "Katy Perry", value: "8 connections" },
        { id: 38, name: "Leonardo DiCaprio", value: "8 connections" },
        { id: 39, name: "Meryl Streep", value: "7 connections" },
        { id: 40, name: "Natalie Portman", value: "7 connections" },
    ],
};

export default function PatientCategoryStack() {
    const [selected, setSelected] = useState(categories[0].key);

    return (
        <div className="w-full flex flex-col items-center mt-4 bg-white rounded-xl pt-4">
            <div className="flex gap-4 mb-6">
                {categories.map((cat) => (
                    <button
                        key={cat.key}
                        onClick={() => setSelected(cat.key)}
                        className={`px-6 py-4 rounded-xl shadow-md font-semibold transition-all
              ${selected === cat.key ? "bg-lamaSky text-white scale-105" : "bg-white text-gray-700 hover:bg-lamaSkyLight"}
            `}>
                        {cat.label}
                    </button>
                ))}
            </div>
            <div className="w-[95%] mb-4 bg-lamaSkyLight rounded-xl shadow-lg p-6">
                <h2 className="text-lg font-bold mb-4">
                    Top 10 Patients: {categories.find((c) => c.key === selected)?.label}
                </h2>
                <ul className="divide-y divide-gray-100">
                    {patientsByCategory[selected]?.slice(0, 10).map((p, idx) => (
                        <li key={p.id} className="py-2 flex justify-between">
                            <span className="font-medium">{idx + 1}. {p.name}</span>
                            <span className="text-sm text-gray-400">{p.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}