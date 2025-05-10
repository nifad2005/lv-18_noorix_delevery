"use client"
import React from "react";

function TrackPage() {
  const [trackingId, setTrackingId] = React.useState("");
  const [trackingData, setTrackingData] = React.useState<any>(null);

  const handleTrackParcel = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!trackingId) {
      alert("Please enter a tracking ID");
      return;
    }
    const restponse = await fetch("/api/parcel?id=" + trackingId)
    if (restponse.ok) {
      const data = await restponse.json();
      console.log(data);
      setTrackingData(data);
    } else {
      alert("Error fetching tracking data");
    }
  }
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold mb-4">Track Your Parcel</h1>
        <p className="text-lg mb-6">Enter your tracking ID to get the latest status of your parcel.</p>
      </section>

      {/* Tracking Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <form className="space-y-6" onSubmit={handleTrackParcel}>
            <div>
              <label htmlFor="trackingId" className="block text-sm font-medium text-gray-700">
                Tracking ID
              </label>
              <input
                type="text"
                id="trackingId"
                onChange={(e) => setTrackingId(e.target.value)}
                value={trackingId}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your tracking ID"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Track Parcel
              </button>
            </div>
          </form>
        </div>
      </section>
      {trackingData && (
        <section className="py-16 px-6">
          <div className="w-fit mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Tracking Information</h2>
            <div className="space-y-8">
              <div className="flex  justify-between gap-8">

                <div>
                  <h3 className="text-xl font-bold py-2 ">Sender Information</h3>
                  <p><strong>Name:</strong> {trackingData?.sender?.name}</p>
                  <p><strong>Email:</strong> {trackingData?.sender?.email}</p>
                  <p><strong>Phone:</strong> {trackingData?.sender?.phone}</p>
                  <p><strong>Address:</strong> {trackingData?.sender?.address}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold py-2 ">Receiver Information</h3>
                  <p><strong>Name:</strong> {trackingData?.receiver?.name}</p>
                  <p><strong>Email:</strong> {trackingData?.receiver?.email}</p>
                  <p><strong>Phone:</strong> {trackingData?.receiver?.phone}</p>
                  <p><strong>Address:</strong> {trackingData?.receiver?.address}</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl py-2 font-bold ">Additional Information</h3>
                <p><strong>Weight:</strong> {trackingData?.additionalInfo?.weight} kg</p>
                <p><strong>Status:</strong> {trackingData?.additionalInfo?.status}</p>
              </div>
              <div>
                <h3 className="text-xl py-2 font-bold">Timestamps</h3>
                <p><strong>Created At:</strong> {new Date(trackingData.createdAt).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default TrackPage;