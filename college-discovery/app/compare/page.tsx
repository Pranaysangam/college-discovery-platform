"use client";

import { useState } from "react";
import { colleges } from "../../data/colleges";

export default function ComparePage() {
  const [college1, setCollege1] = useState(colleges[0]);
  const [college2, setCollege2] = useState(colleges[1]);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">
        Compare Colleges
      </h1>

      <div className="flex gap-4 mb-8">
        <select
          onChange={(e) =>
            setCollege1(
              colleges.find(
                (c) => c.id === Number(e.target.value)
              )!
            )
          }
          className="border p-2 rounded bg-white text-black"
        >
          {colleges.map((college) => (
            <option
              key={college.id}
              value={college.id}
            >
              {college.name}
            </option>
          ))}
        </select>

        <select
          onChange={(e) =>
            setCollege2(
              colleges.find(
                (c) => c.id === Number(e.target.value)
              )!
            )
          }
          className="border p-2 rounded bg-white text-black"
        >
          {colleges.map((college) => (
            <option
              key={college.id}
              value={college.id}
            >
              {college.name}
            </option>
          ))}
        </select>
      </div>

      <table className="w-full border">
        <tbody>
          <tr>
            <td className="border p-2 font-bold">Fees</td>
            <td className="border p-2">
              ₹{college1.fees}
            </td>
            <td className="border p-2">
              ₹{college2.fees}
            </td>
          </tr>

          <tr>
            <td className="border p-2 font-bold">
              Rating
            </td>
            <td className="border p-2">
              ⭐ {college1.rating}
            </td>
            <td className="border p-2">
              ⭐ {college2.rating}
            </td>
          </tr>

          <tr>
            <td className="border p-2 font-bold">
              Placements
            </td>
            <td className="border p-2">
              {college1.placements}
            </td>
            <td className="border p-2">
              {college2.placements}
            </td>
          </tr>

          <tr>
            <td className="border p-2 font-bold">
              Location
            </td>
            <td className="border p-2">
              {college1.location}
            </td>
            <td className="border p-2">
              {college2.location}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}