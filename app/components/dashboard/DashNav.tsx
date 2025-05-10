import Link from "next/link";

export default function DashNav() {
  return (
    <nav className="bg-gray-800 z-11 text-white w-64 h-screen fixed   left-0 top-[100px] flex-col">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        Dashboard Menu
      </div>
      <ul className="flex-1 space-y-4 p-4">
        <li>
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/dashboard/all-parcels" className="hover:underline">
            All Parcels
          </Link>
        </li>
        <li>
          <Link href="/dashboard/add-parcel" className="hover:underline">
            Add Parcel
          </Link>
        </li>
         <li>
          <Link href="/dashboard/contact-messages" className="hover:underline">
            Contact Messages
          </Link>
        </li>
      </ul>
    </nav>
  );
}