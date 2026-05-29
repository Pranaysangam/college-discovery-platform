"use client";

import Link from "next/link";
import { useState } from "react";
import { colleges } from "../data/colleges";

export default function Home() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const filteredColleges = colleges.filter((college) => {
    const matchesSearch = college.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLocation =
      location === "" || college.location === location;

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-center gap-4 mb-8">
        <Link
          href="/"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Home
        </Link>

        <Link
          href="/compare"
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Compare Colleges
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-center text-black mb-8">
        College Discovery Platform
      </h1>

      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search colleges..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border rounded-lg bg-white text-black"
        />

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 border rounded-lg bg-white text-black mt-4"
        >
          <option value="">All Locations</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="West Bengal">West Bengal</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Telangana">Telangana</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map((college) => (
          <Link
            href={`/college/${college.id}`}
            key={college.id}
            className="bg-white p-6 rounded-xl shadow-md block hover:shadow-lg"
          >
            <h2 className="text-xl font-bold text-black">
              {college.name}
            </h2>

            <p className="text-gray-600">
              📍 {college.location}
            </p>

            <p className="text-gray-700">
              Fees: ₹{college.fees}
            </p>

            <p className="text-gray-700">
              Rating: ⭐ {college.rating}
            </p>
          </Link>
        ))}
      </div>

      <footer className="text-center mt-10 text-gray-600">
        By Pranay Chetan Sangam
      </footer>
    </div>
  );
}