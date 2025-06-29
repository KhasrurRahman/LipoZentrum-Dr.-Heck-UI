import { UserButton, UserProfile } from "@clerk/nextjs"

const Page = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
            <h1 className="text-center font-bold p-10">user Page goes here. After completing user(Frontend part)</h1>
            <UserProfile />
            <UserButton/>
        </div>


    )
}

export default Page