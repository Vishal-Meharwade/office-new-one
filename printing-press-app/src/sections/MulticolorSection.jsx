import React, { useState } from "react";

const MulticolorSection = ({ calculatePrice, section }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    jobName: "",
    size: "",
    quantity: "",
    lamination: false,
    laminationType: "gloss",
    creasing: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculatePrice(section, formData); // Calculate the price when form is submitted
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center mb-4">
        Multicolor Printing Section
      </h2>
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
          <label className="block text-sm font-medium">Lamination</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="lamination"
                checked={formData.lamination}
                onChange={handleChange}
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="lamination"
                checked={!formData.lamination}
                onChange={handleChange}
              />
              <span>No</span>
            </label>
          </div>
        </div>
        {formData.lamination && (
          <div className="space-y-2">
            <label className="block text-sm font-medium">Lamination Type</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="laminationType"
                  value="gloss"
                  checked={formData.laminationType === "gloss"}
                  onChange={handleChange}
                />
                <span>Gloss</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="laminationType"
                  value="mat"
                  checked={formData.laminationType === "mat"}
                  onChange={handleChange}
                />
                <span>Mat</span>
              </label>
            </div>
          </div>
        )}
        <div className="space-y-2">
          <label className="block text-sm font-medium">Creasing</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="creasing"
                checked={formData.creasing}
                onChange={handleChange}
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="creasing"
                checked={!formData.creasing}
                onChange={handleChange}
              />
              <span>No</span>
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

export default MulticolorSection;
