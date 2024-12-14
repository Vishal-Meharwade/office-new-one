import React, { useState } from "react";

const PrintingSection = ({ calculatePrice, section }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    jobName: "",
    size: "",
    quantity: "",
    color: "single",
    sides: "single",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculatePrice(section, formData);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center mb-4">Printing Section</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="jobName"
          placeholder="Job Name"
          className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          value={formData.jobName}
          onChange={handleChange}
        />
        <select
          name="size"
          className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          value={formData.size}
          onChange={handleChange}
        >
          <option value="">Select Size</option>
          <option value="A4">A4</option>
          <option value="A3">A3</option>
        </select>
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          value={formData.quantity}
          onChange={handleChange}
        />
        <div className="space-y-2">
          <label className="block text-sm font-medium">Color</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="color"
                value="single"
                checked={formData.color === "single"}
                onChange={handleChange}
              />
              <span>Single Color</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="color"
                value="double"
                checked={formData.color === "double"}
                onChange={handleChange}
              />
              <span>Double Color</span>
            </label>
          </div>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Sides</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="sides"
                value="single"
                checked={formData.sides === "single"}
                onChange={handleChange}
              />
              <span>Single Side</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="sides"
                value="both"
                checked={formData.sides === "both"}
                onChange={handleChange}
              />
              <span>Both Sides</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Calculate Price
        </button>
      </form>
    </div>
  );
};

export default PrintingSection;
