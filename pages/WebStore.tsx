"use client";

import { useEffect, useState } from "react";
import ListOptions from "./conponents/UI/ListOptions";
import Footer from "./conponents/Section/Footer";
import Card from "./conponents/UI/Card";

type Apps = {
  name: string;
  Icon: string;
  Description: string;
  category: string;
};

export default function WebStore() {
  const Category: string[] = ["All", "Education", "Productivity", "Entertainment"];
  const [Search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [AppList, setAppList] = useState<Apps[]>([]);

  useEffect(() => {
    fetch("/api/List")
      .then((res) => res.json())
      .then((data) => setAppList(data));
  }, []);

  const filteredApps = AppList.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(Search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen justify-between bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="flex flex-row justify-between px-6 py-4 items-center border-b border-gray-700">
        <div className="flex flex-col items-center">
          <img
            src="/icon.png"
            alt="company logo"
            className="w-14 h-14 bg-transparent rounded-lg p-2"
          />
          <p className="font-bold text-xl bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            Web Store
          </p>
        </div>

        <div>
          <input
            type="text"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-800 border border-gray-600 px-3 py-2 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400 text-white"
            placeholder="Search apps..."
          />
        </div>
      </header>

      {/* Main Section */}
      <section className="flex flex-col flex-grow p-6">
        <div className="flex flex-row justify-between items-center mb-6">
          <p className="font-semibold text-lg">Categories</p>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg text-center appearance-none w-44 text-md py-2 px-4 focus:outline-none"
          >
            {Category.map((item, index) => (
              <option
                key={index}
                value={item}
                className="bg-gray-800 text-white"
              >
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Apps */}
        <p className="text-2xl font-bold mb-4">Apps :</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredApps.length > 0 ? (
            filteredApps.map((item, index) => (
              <Card
                key={index}
                Icon={item.Icon}
                AppName={item.name}
                Description={item.Description}
              />
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full">
              No apps found.
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}