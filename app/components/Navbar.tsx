"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";



export default function Navbar() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <nav className="bg-white text-slate-600 fixed top-0 left-0 z-11  right-0  py-4 px-4 shadow-md md:py-6 md:px-6">
      <div className="container mx-auto flex   flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">NOORIX_Delivery</Link>
        </div>

        {/* Links */}
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-center items-center md:space-x-6 mt-4 md:mt-0">
          <li>
            <Link href="/pricing" className="hover:underline">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/coverage" className="hover:underline">
              Coverage
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/track" className="hover:underline">
              Track Parcel
            </Link>
          </li>
          {session?.user ? (
            <li>
              <Link href="/dashboard" className="hover:underline flex flex-col-reverse ml-2 items-center">
                Dashboard
                {session.user.image && (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    width={30}
                    height={30}
                    className="rounded-full mr-2"
                  />
                )}
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/api/auth/signin" className="hover:underline">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}