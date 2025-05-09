import React from "react";

function page() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="flex flex-col items-center justify-center text-center py-20 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold mb-4">Our Coverage</h1>
        <p className="text-lg mb-6">
          We are proud to serve and deliver all over Bangladesh.
        </p>
      </section>

      <section className="py-16 px-6 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.1318534482534!2d88.91913628934404!3d25.42284574460489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fca517b7070c99%3A0x64aeb07ca9a3e622!2z4Kau4KeH4Ka44Ka-4Kaw4KeN4Ka4IOCmqOCmvuCmuOCmv-CmriDgpp_gp43gprDgp4fgpqHgpr7gprDgp43gprg!5e1!3m2!1sen!2sbd!4v1746814221951!5m2!1sen!2sbd"
          width="800"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}

export default page;
