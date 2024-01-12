import Link from "next/link";
import "./styles/navbar.css";

export const Navbar = () => {
    return (
        <nav className="navGlobal py-5 fixed top-0 left-0 right-0">
            <Link href={"/"}><h1 className="md:text-3xl font-bold hover:text-red-800">NEXT.JS Proyect1</h1></Link> 
            <ul className="md:text-2xl font-semibold ">
                <li className="hover:text-red-800"><Link href="/">Home</Link></li>
                <li className="hover:text-red-800"><Link href="/about">About</Link></li>
                <li className="hover:text-red-800"><Link href="/posts">Posts</Link></li>
            </ul>
        </nav>
    )
};