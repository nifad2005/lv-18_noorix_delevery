"use client";
import { Parcel } from "@/lib/types/client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";

function Parcels() {
    const {data: session} = useSession();
    const [parcels, setParcels] = React.useState<any >(null);
    const [loading, setLoading] = React.useState(false);
    const pathName = usePathname();



    React.useEffect(() => {
        setLoading(true);
        const fetchParcels = async () => {
            try{
                console.log("Fetching Users parcels...");
                const response = await fetch("/api/parcel/userparcel?userEmail="+session?.user?.email);
                if(!response.ok){
                    throw new Error("Failed to fetch parcels");
                }
                const data = await response.json();
                pathName ==="/dashboard" ? setParcels(data.slice(0, 5)) : setParcels(data);
                
            }catch(error){
                console.error("Error fetching parcels:", error);
            }finally{
                setLoading(false);
            }
        };
        fetchParcels();
    }, [session]);
    return (
    <div className="min-h-64 w-full  bg-gray-50 text-gray-800 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">User Parcels</h1>
        <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
         <thead className="bg-blue-500 text-white">
           <tr>
             <th className="py-3 px-6 text-left">ID eialeo</th>
             <th className="py-3 px-6 text-left">Sender Name</th>
             <th className="py-3 px-6 text-left">Receiver Name</th>
             <th className="py-3 px-6 text-left">Receiver Email</th>
              <th className="py-3 px-6 text-left">Receiver Phone</th>
              <th className="py-3 px-6 text-left">Created At</th>
              <th className="py-3 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {parcels === null ? (
              <tr>
                <td colSpan={7} className="py-3 px-6 text-center">No Parcels Found</td>
              </tr>
            ) : (
              parcels?.map((parcel:Parcel) => (
                <tr key={parcel?._id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6">{parcel._id}</td>
                  <td className="py-3 px-6">{parcel.sender.name}</td>
                  <td className="py-3 px-6">{parcel.receiver.name}</td>
                  <td className="py-3 px-6">{parcel.receiver.email}</td>
                  <td className="py-3 px-6">{parcel.receiver.phone}</td>
                  <td className="py-3 px-6">
                    {new Date(parcel.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-6">{parcel.additionalInfo.status}</td>
                </tr>
            )))}
          </tbody>
        </table>
      </div>
      {pathName === "/dashboard" && (
        <div className="mt-4">
          <Link
            href="/dashboard/add-parcel"
            className="px-4 py-2 cursor-pointer bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Parcel
          </Link>

            <Link href="/dashboard/all-parcels" className="text-blue-500 hover:underline mt-2 inline-block">
              See All Parcels
            </Link>
        </div>

      )}
    </div>
  );
}

export default Parcels;