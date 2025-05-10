"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import DashNav from "../components/dashboard/DashNav";
import Parcels from "../components/dashboard/Parcels";


function DashboardPage() {
    const {data: session} = useSession();
    return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <DashNav />
      <div className="ml-52">

      <section className="flex flex-col  items-center justify-center text-center py-20 bg-blue-500 text-white relative">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p className="text-lg mb-6">Welcome to your dashboard. Manage your account and view your activities here.</p>
        <h1 className="text-4xl font-bold mb-4 text-slate-600">Hi - {session?.user?.name}</h1>
        <div className="absolute top-4 right-4">
        {
          session?.user && (
            <button
            onClick={() => signOut()}
            className="px-4 py-2 cursor-pointer bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
            Logout
          </button>)
        }
        </div>
      </section>

      {/* Content Section */}
      <section className=" px-6">
        <Parcels/>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <p>View and update your personal information.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Orders</h2>
            <p>Track your recent orders and delivery status.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <p>Manage your account settings and preferences.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Support</h2>
            <p>Contact support for any assistance or queries.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Contact Messages</h2>
            <p>View messages submitted by users through the contact form.</p>
            <Link
              href="/dashboard/contact-messages"
              className="text-blue-500 hover:underline mt-2 inline-block"
              >
              View Messages
            </Link>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Track Parcel</h2>
            <p>Track the status of your parcels in real-time.</p>
            <Link
              href="/track"
              className="text-blue-500 hover:underline mt-2 inline-block"
              >
              Track
            </Link>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default DashboardPage;