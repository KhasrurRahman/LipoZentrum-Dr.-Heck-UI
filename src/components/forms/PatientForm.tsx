"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Inputfield from "../Inputfield";
import Image from "next/image";

const schema = z.object({
    username: z.string()
        .min(2, { message: 'Name must be at least 3 characters long!' })
        .max(20, { message: 'Name must be at most 3 characters long!' }),
    email: z.string()
        .email({ message: 'Invalid email address!' }),
    password: z.string()
        .min(6, { message: 'Password must be at least 6 characters long!' }),
    phone: z.string()
        .min(10, { message: 'Phone number must be at least 10 characters long!' })
        .max(15, { message: 'Phone number must be at most 15 characters long!' }),
    firstName: z.string().min(1, { message: 'First name is required!' }),
    lastName: z.string().min(1, { message: 'last name is required!' }),
    address: z.string().min(1, { message: 'Address is required!' }),
    bloodType: z.string().min(1, { message: 'Blood type is required!' }),
    birthday: z.date({ message: 'Birthday is Required!' }),
    gender: z.enum(['male', 'female'], { message: 'Gender is required!' }),
    img: z.instanceof(File, { message: 'Image is required!' }),
});


const PatientForm = ({ type, data }: { type: "create" | "update"; data?: any; }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = handleSubmit(data => {
        console.log(data);
    })

    return (
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <h1 className="text-xl font-semibold">Create a new patient</h1>
            <span className="text-xs text-gray-500 font-medium">Authentication information</span>

            <div className="flex gap-2 justify-between flex-wrap">
                <Inputfield label="Username" name="username" defaultValue={data?.username} register={register} error={errors.username} />
                <Inputfield label="Email" name="email" defaultValue={data?.email} register={register} error={errors.email} />
                <Inputfield label="Password" name="password" defaultValue={data?.password} register={register} error={errors.password} type="password"/>
            </div>

            <span className="text-xs text-gray-500 font-medium">Personal information</span>

            <div className="flex gap-4 justify-between flex-wrap">
                <Inputfield label="First Name" name="firstName" defaultValue={data?.firstName} register={register} error={errors.firstName} />
                <Inputfield label="Last Name" name="lastName" defaultValue={data?.lastName} register={register} error={errors.lastName} />
                <Inputfield label="Phone" name="phone" defaultValue={data?.phone} register={register} error={errors.phone} />
                <Inputfield label="Address" name="address" defaultValue={data?.address} register={register} error={errors.address} />
                <Inputfield label="Birthday" name="birthday" defaultValue={data?.birthday} register={register} error={errors.birthday} type="date" />
                <Inputfield label="Blood Type" name="bloodType" defaultValue={data?.bloodType} register={register} error={errors.bloodType} />

                <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
                    <span className="text-sm text-black">Gender</span>
                    <select className="ring-[1.5px] ring-gray-400 rounded-md text-sm p-2 w-full" {...register("gender")} defaultValue={data?.gender}>
                        <option value="male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    {errors.gender?.message &&
                        <p className="text-xs text-red-600">{errors.gender.message.toString()}</p>
                    }
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/4">
                    <label className="text-sm text-gray-500 flex items-center gap-2 cursor-pointer" htmlFor="img">
                        <Image src="/upload.png" alt="" width={28} height={28} />
                        <span>Upload a photo</span>
                    </label>
                    <input type="file" id="img" {...register} className="hidden" />
                    {errors.img?.message &&
                        <p className="text-xs text-red-600">{errors.img.message.toString()}</p>
                    }
                </div>
            </div>
            <button className="bg-blue-400 text-white p-2 rounded-md">
                {type === "create" ? "Create Patient" : "Update Patient"}
            </button>
        </form>
    )
}

export default PatientForm