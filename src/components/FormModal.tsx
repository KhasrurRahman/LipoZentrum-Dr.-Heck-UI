"use client";

import Image from "next/image";
import { useState } from "react";
import PatientForm from "./forms/PatientForm";

const FormModal = ({ table, type, data, id }: {
    table: "patient" | "newContact" | "email" | "appointment",
    type: "create" | "update" | "delete",
    data?: any,
    id?: number;
}) => {

    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bdColor = type === "create" ? "bg-lamaYellow" : type === "update" ? "bg-lamaSky" : "bg-lamaPurple";

    const [open, setOpen] = useState(false);

    const Form = () => {
        return type === "delete" && id ? (
            <form action="" className="p-4 flex flex-col gap-">
                <span className="text-center font-medium">All data will be lost. Are you sure?</span>
                <button className="bg-red-500 text-white py-2 px-4 rounded-md border-none w-max self-center">delete</button>
            </form>
        ) : (<PatientForm type="update" data={data}/>);
    };

    return (
        <>
            <button className={`${size} ${bdColor} flex items-center justify-center rounded-full`} onClick={() => setOpen(true)}>
                <Image src={`/${type}.png`} alt="" width={16} height={16} />
            </button>
            {open && (
                <div className="w-screen absolute h-screen left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center ">
                    <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[60%] lg:w-[60%] xl:w-[50%]">
                        <div className="absolate top-4 right-4 corsor-pointer float-right" onClick={() => setOpen(false)}>
                            <Image src="/close.png" width={14} height={14}/>
                        </div>
                        <Form/>
                    </div>
                </div>
            )}
        </>
    )
}

export default FormModal