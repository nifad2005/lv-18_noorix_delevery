"use client";
import { Messages } from "@/lib/types/client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function ContactMessagesPage() {
  // Example data, replace with actual data fetching logic
  const [messages,setMessages] = useState<Messages>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [messages, setMessages] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
     setIsLoading(true);
      console.log("Session data:", session);
    
      const fetchMessages = async () => {
        console.log("Fetching messages for user:", session?.user?.email);
        try {
          const response = await fetch("/api/contact?userEmail=" + session?.user?.email);
          if (response.ok) {
            const data = await response.json();
            console.log("Fetched messages:", data);
            setMessages(data);
          } else {
            console.error("Error fetching messages:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching messages:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchMessages();
  }, [session]);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold mb-4">Contact Messages</h1>
        <p className="text-lg mb-6">View all messages submitted by user.</p>
      </section>

      {/* Messages Section */}
      {
        isLoading ? (
          <div className="flex items-center  justify-center py-20">
            <svg
              className="animate-spin h-10 w-10 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                fill="none"
                strokeWidth="4"
                stroke="currentColor"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"
              />
            </svg>
          </div>
          
        ) : messages.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">No Messages Found</h2>
            <p className="text-gray-600">There are no messages to display.</p>
          </div>
        ) : null
      }
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {messages.map((message, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex gap-2 justify-center w-fit">
                <Link href={"/dashboard"}>
                  <Image src={session?.user?.image} className="w-8 h-8 overflow-hidden hover:brightness-90  rounded-full" alt="User Image" width={50} height={50}/>
                </Link>
              <h2 className="text-2xl font-bold mb-2">{message?.subject?.toUpperCase()}</h2>

              </div>
              <p className="text-gray-600 mb-4">{message?.description}</p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Received on:</span> {message?.createdAt}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ContactMessagesPage;