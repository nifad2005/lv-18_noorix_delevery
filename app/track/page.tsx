import React from "react";

function TrackPage() {
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
          <form className="space-y-6">
            <div>
              <label htmlFor="trackingId" className="block text-sm font-medium text-gray-700">
                Tracking ID
              </label>
              <input
                type="text"
                id="trackingId"
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
    </div>
  );
}

export default TrackPage;