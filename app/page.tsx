import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to FastTrack Delivery</h1>
        <p className="text-lg mb-6">
          Reliable and fast delivery services tailored to your needs.
        </p>
        <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100">
          Learn More
        </button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Express Delivery</h3>
            <p>Get your packages delivered within hours with our express service.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Standard Delivery</h3>
            <p>Affordable and reliable delivery for all your needs.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">International Shipping</h3>
            <p>We deliver across borders with ease and efficiency.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">What areas do you deliver to?</h3>
            <p>We deliver to all major cities and towns. Contact us for specific locations.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">How can I track my delivery?</h3>
            <p>You can track your delivery using the tracking ID provided after booking.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">What are your delivery charges?</h3>
            <p>Our charges depend on the service type and distance. Check our pricing page for details.</p>
          </div>
        </div>
      </section>

      {/* Quick Link to Become a Merchant */}
      <section className="py-16 px-6 bg-blue-500 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Partner with Us</h2>
        <p className="mb-6">Join our network and grow your business with FastTrack Delivery.</p>
        <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100">
          Become a Merchant
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2025 FastTrack Delivery. All rights reserved.</p>
      </footer>
    </main>
  );
}