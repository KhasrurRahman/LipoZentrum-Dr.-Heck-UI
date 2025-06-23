import { FieldError } from "react-hook-form";

type InputfieldProps = {
    label: string;
    type?: string;
    register: any;
    name: string;
    defaultValue?: string;
    error?: FieldError;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const Inputfield = ({
    label,
    type = 'text',
    register,
    name,
    defaultValue,
    error,
    inputProps,
}: InputfieldProps) => {
    return (
        <div className="flex flex-col gap-2 w-full md:w-1/4">
            <span className="text-sm text-black">{label}</span>
            <input type={type} {...register(name)} className="ring-[1.5px] ring-gray-400 rounded-md text-sm p-2 w-full" {...inputProps} defaultValue={defaultValue}/>
            {error?.message &&
                <p className="text-xs text-red-600">{error?.message.toString()}</p>
            }
        </div>
    )
}

export default Inputfield