import React from "react";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
        <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
        <p className="text-xl mb-6 max-w-2xl">
          At <span className="font-bold">NOORIX_Delivery</span>, we are committed to providing high-quality services to meet your delivery needs with speed and reliability.
        </p>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Mission</h2>
          <p className="text-lg mb-10 leading-relaxed">
            Our mission is to ensure fast, reliable, and efficient delivery services across Bangladesh. We strive to exceed customer expectations with every package we deliver, making your experience seamless and stress-free.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-blue-600">Why Choose Us?</h2>
          <p className="text-lg leading-relaxed">
            We take pride in offering high-quality services, ensuring your packages are handled with care and delivered on time. Our dedicated team works tirelessly to provide you with the best delivery experience possible.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;