import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white text-slate-600 py-4 px-4 shadow-md md:py-6 md:px-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">NOORIX_Delivery</Link>
        </div>

        {/* Links */}
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
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
          <li>
            <Link href="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}