import React from "react";

function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold mb-4">Our Pricing</h1>
        <p className="text-lg mb-6">Affordable and transparent pricing for all your delivery needs.</p>
      </section>

      {/* Pricing Table Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Service</th>
                <th className="py-3 px-4 text-left">Delivery Time</th>
                <th className="py-3 px-4 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">Express Delivery</td>
                <td className="py-3 px-4">Within 24 hours</td>
                <td className="py-3 px-4">$10</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="py-3 px-4">Standard Delivery</td>
                <td className="py-3 px-4">2-3 business days</td>
                <td className="py-3 px-4">$5</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">International Shipping</td>
                <td className="py-3 px-4">5-7 business days</td>
                <td className="py-3 px-4">$20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default PricingPage;