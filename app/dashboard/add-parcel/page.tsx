"use client"
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

function AddParcelPage() {
  const { data: session } = useSession();
  const [trackingId, setTrackingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    senderName: "",
    senderAddress: "", // Removed session?.user?.address as it does not exist
    senderPhone: "",
    senderEmail: "",
    recipientName: "",
    recipientAddress: "",
    recipientPhone: "",
    recipientEmail: "",
    parcelWeight: "",
    deliveryDate: "",
  });

  useEffect(() => {
    session?.user && setFormData((prev) => {
      return {
        ...prev,
        senderName: session?.user?.name || "",
        senderEmail: session?.user?.email || "",
      };    
    });
  }, [session]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your form submission logic here
    const response = await fetch("/api/parcel",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

          sender:{
            senderId: "nifad",
            name: formData.senderName,
            email: formData.senderEmail,
            phone: formData.senderPhone,
            address: formData.senderAddress,
          },

          receiver:{
            name: formData.recipientName,
            email: formData.recipientEmail,
            phone: formData.recipientPhone,
            address: formData.recipientAddress,
          },

          additionalInfo:{
            weight: formData.parcelWeight,
            
            status: "pending",
          }

      })

    })
    const data = await response.json();
    setTrackingId(data.id);
    setIsLoading(false);

  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold mb-4">Add New Parcel</h1>
        <p className="text-lg mb-6">Fill out the form below to add a new parcel for delivery.</p>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="senderName" className="block text-sm font-medium text-gray-700">
                Sender Name
              </label>
              <input
                type="text"
                id="senderName"
                value={formData.senderName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Sender's Name"
              />
            </div>

            <div>
              <label htmlFor="senderAddress" className="block text-sm font-medium text-gray-700">
                Sender Address
              </label>
              <textarea
                id="senderAddress"
                value={formData.senderAddress}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Sender's Address"
              ></textarea>
            </div>

            <div>
              <label htmlFor="senderPhone" className="block text-sm font-medium text-gray-700">
                Sender Phone
              </label>
              <input
                type="tel"
                id="senderPhone"
                value={formData.senderPhone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Sender's Phone Number"
              />
            </div>

            <div>
              <label htmlFor="senderEmail" className="block text-sm font-medium text-gray-700">
                Sender Email
              </label>
              <input
                type="email"
                id="senderEmail"
                value={formData.senderEmail}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Sender's Email Address"
              />
            </div>

            <div>
              <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700">
                Recipient Name
              </label>
              <input
                type="text"
                id="recipientName"
                value={formData.recipientName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Recipient's Name"
              />
            </div>

            <div>
              <label htmlFor="recipientAddress" className="block text-sm font-medium text-gray-700">
                Recipient Address
              </label>
              <textarea
                id="recipientAddress"
                value={formData.recipientAddress}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Recipient's Address"
              ></textarea>
            </div>

            <div>
              <label htmlFor="recipientPhone" className="block text-sm font-medium text-gray-700">
                Recipient Phone
              </label>
              <input
                type="tel"
                id="recipientPhone"
                value={formData.recipientPhone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Recipient's Phone Number"
              />
            </div>

            <div>
              <label htmlFor="recipientEmail" className="block text-sm font-medium text-gray-700">
                Recipient Email
              </label>
              <input
                type="email"
                id="recipientEmail"
                value={formData.recipientEmail}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Recipient's Email Address"
              />
            </div>

            <div>
              <label htmlFor="parcelWeight" className="block text-sm font-medium text-gray-700">
                Parcel Weight (kg)
              </label>
              <input
                type="number"
                id="parcelWeight"
                value={formData.parcelWeight}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Weight in kilograms"
              />
            </div>

            <div>
              <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700">
                Delivery Date
              </label>
              <input
                type="date"
                id="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isLoading ? "Adding..." : "Add Parcel"}
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Tracking ID Section */}
      {trackingId && (
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Parcel Added Successfully!</h2>
            <p className="text-lg">Your tracking ID is: <strong>{trackingId}</strong></p>
            <button className="mt-2 px-4 py-2 cursor-pointer bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={()=>navigator.clipboard.writeText(trackingId)}>Copy Tracking   ID</button>
          </div>
        </section>
      )}
    </div>
  );
}

export default AddParcelPage;