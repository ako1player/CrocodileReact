import { IoIosCheckmarkCircleOutline } from "react-icons/io"
const Success = () =>{
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <IoIosCheckmarkCircleOutline size="100px" />
            <h1 className="text-3xl">Password was changed!!</h1>
        </div>
    )
}

export default Success;