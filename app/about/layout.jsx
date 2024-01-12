import Link from "next/link";

const navAbout = ({children}) => {
    return (
        <>
            <nav>
                <ul className="flex justify-around text-2xl font-semibold pt-2">
                    <li className="hover:text-red-800 border-2 p-1"><Link href="/about/aboutus">About Us</Link></li>
                    <li className="hover:text-red-800 border-2 p-1"><Link href="/about/aboutme">About Me</Link></li>
                </ul>
            </nav>

            {children}
        </>
    )
}

export default navAbout;