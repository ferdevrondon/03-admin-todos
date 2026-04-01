import Link from "next/link";
import { FcRadarPlot } from "react-icons/fc";

export const Logo = () => {
    return (
        <div className="-mx-6 px-6 py-4">
            <Link href={'#'}>
                <FcRadarPlot className='text-5xl' />
            </Link>
        </div>
    )
}
