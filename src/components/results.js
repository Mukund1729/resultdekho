import React from "react";

export default function Results() {
  // Dummy data (replace with Firebase later)
  const results = [
    { subject: "Math", marks: 85, grade: "A" },
    { subject: "Physics", marks: 78, grade: "B+" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Results</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Subject</th>
            <th className="p-2 border">Marks</th>
            <th className="p-2 border">Grade</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index} className="border">
              <td className="p-2 border">{result.subject}</td>
              <td className="p-2 border">{result.marks}</td>
              <td className="p-2 border">{result.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}