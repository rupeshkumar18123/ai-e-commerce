import React from 'react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center mb-8">
        <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center mr-6">
          <span className="text-4xl font-bold text-indigo-600">U</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold">User Profile</h1>
          <p className="text-gray-600">user@example.com</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Full Name</label>
              <p className="font-medium">John Doe</p>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Email</label>
              <p className="font-medium">user@example.com</p>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Phone</label>
              <p className="font-medium">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">Address</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Shipping Address</label>
              <p className="font-medium">123 Main St, Anytown, CA 12345</p>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Billing Address</label>
              <p className="font-medium">Same as shipping address</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">Order History</h2>
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-3">
              <div>
                <p className="font-medium">Order #12345</p>
                <p className="text-sm text-gray-500">June 12, 2023</p>
              </div>
              <p className="font-medium">$89.99</p>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="font-medium">Order #12346</p>
                <p className="text-sm text-gray-500">May 28, 2023</p>
              </div>
              <p className="font-medium">$124.50</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">Preferences</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <input type="checkbox" id="newsletter" className="mr-2" defaultChecked />
              <label htmlFor="newsletter">Receive newsletter</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="promotions" className="mr-2" defaultChecked />
              <label htmlFor="promotions">Receive promotions</label>
            </div>
          </div>
          <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-md">
            Update Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;