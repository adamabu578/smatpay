import React from "react";
// import ServiceCard from "../ServiceCard";
import WhiteServiceCard from "../WhiteServiceCard";
import electricity from "../../assets/electricity.png";
import data from "../../assets/mobile-data.png";
import tv from "../../assets/smart-tv.png";
import airtime from "../../assets/touch.png";

const Service = () => {
  const services = [
    {
      title: "Airtime Top-up",
      image: airtime,
      details: "Top up your mobile airtime easily. Whether you're on the go or at home, say goodbye to scratch cards."
    },
    {
      title: "Electricity Bill",
      image: electricity,
      details: "Effortlessly access and pay your electricity bills. Power your home without the hassle of queues."
    },
    {
      title: "Data Bundle",
      image: data,
      details: "Instant data top-ups for all networks. Stay connected with our reliable and fast data services."
    },
    {
      title: "TV Subscription",
      image: tv,
      details: "Seamlessly renew your TV subscriptions. Never miss your favorite shows with our quick payment system."
    }
  ];

  return (
    <div className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/10 dark:bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <span className="text-primary dark:text-primary-light font-bold tracking-widest uppercase text-sm bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-full inline-block mb-4">What we offer</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-neutral-dark dark:text-white mt-2 mb-6 tracking-tight">
            Our Premium Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our comprehensive suite of services encompasses seamless VTU transactions and bill payments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <WhiteServiceCard
              key={index}
              image={service.image}
              title={service.title}
              details={service.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
