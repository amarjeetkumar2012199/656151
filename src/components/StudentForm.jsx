// StudentForm.jsx
import React from 'react';

const StudentForm = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Student Admission Form</h2>

      <form className="space-y-4">

        <div>
          <label className="block mb-1 font-semibold">Student's Name</label>
          <input type="text" placeholder="Enter Student's Name" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Father's Name</label>
          <input type="text" placeholder="Enter Father's Name" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Mobile Number</label>
          <input type="tel" placeholder="Enter Mobile Number" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Date of Birth</label>
          <input type="date" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Receipt Number</label>
          <input type="text" placeholder="Enter Receipt Number (Optional)" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Admission Date</label>
          <input type="date" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Batch</label>
          <select className="w-full border p-2 rounded">
            <option>Batch A</option>
            <option>Batch B</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Fee (Optional)</label>
          <input type="number" placeholder="Enter Fee" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Notes (Optional)</label>
          <textarea placeholder="Enter Notes" className="w-full border p-2 rounded"></textarea>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Photo Upload</label>
          <input type="file" className="w-full" />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
