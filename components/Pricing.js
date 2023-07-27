import React from 'react';

const Pricing = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-200 p-8 rounded">
            <h3 className="text-xl font-bold mb-4">Basic</h3>
            <p className="text-gray-700 mb-4">Description of the basic plan.</p>
            <p className="text-2xl">$9.99/month</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Get Started</button>
          </div>
          <div className="bg-gray-200 p-8 rounded">
            <h3 className="text-xl font-bold mb-4">Standard</h3>
            <p className="text-gray-700 mb-4">Description of the standard plan.</p>
            <p className="text-2xl">$19.99/month</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Get Started</button>
          </div>
          <div className="bg-gray-200 p-8 rounded">
            <h3 className="text-xl font-bold mb-4">Premium</h3>
            <p className="text-gray-700 mb-4">Description of the premium plan.</p>
            <p className="text-2xl">$29.99/month</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
