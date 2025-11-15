// src/app/jobs/page.tsx
'use client';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Jobs() {
  const [selectedJobType, setSelectedJobType] = useState("Job");
  const [selectedExperience, setSelectedExperience] = useState("");

  const experienceLevels = [
    "Sequum", "Total", "Proximal", "Expert", "Intermediate", "Entry"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-[#001454] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Breadcrumb */}
            <div className="flex justify-center items-center space-x-2 text-white/80 mb-4">
              <span className="text-white font-semibold">Notes</span>
              <span className="text-white/60">›</span>
              <span className="text-white font-semibold">Freelance Job</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Freelance Job
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Sidebar - Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
                
                {/* Search Input */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Type job keyword
                  </label>
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0027A8] focus:border-transparent"
                  />
                </div>

                {/* Job Type Filter */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Job Type
                  </label>
                  <div className="space-y-2">
                    {["Job", "Talent"].map((type) => (
                      <label key={type} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="jobType"
                          value={type}
                          checked={selectedJobType === type}
                          onChange={(e) => setSelectedJobType(e.target.value)}
                          className="w-4 h-4 text-[#0027A8] focus:ring-[#0027A8] border-gray-300"
                        />
                        <span className="text-gray-700 font-medium">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Categories Section */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-700 mb-3">Categories</h3>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800 text-sm font-medium text-center">
                      Categories not found
                    </p>
                  </div>
                </div>

                {/* Speciality Section */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-700 mb-3">Speciality</h3>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800 text-sm font-medium text-center">
                      Speciality not found
                    </p>
                  </div>
                </div>

                {/* Experience Level Filter */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-700 mb-3">Experience Level</h3>
                  <div className="space-y-2">
                    {experienceLevels.map((level) => (
                      <label key={level} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="experience"
                          value={level}
                          checked={selectedExperience === level}
                          onChange={(e) => setSelectedExperience(e.target.value)}
                          className="w-4 h-4 text-[#0027A8] focus:ring-[#0027A8] border-gray-300"
                        />
                        <span className="text-gray-700 font-medium">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filter Actions */}
                <div className="space-y-3">
                  <button className="w-full bg-[#0027A8] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#001454] transition-colors duration-200">
                    Apply Filters
                  </button>
                  <button 
                    onClick={() => {
                      setSelectedJobType("Job");
                      setSelectedExperience("");
                    }}
                    className="w-full bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - Job Listings */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Job Listings</h2>
                    <p className="text-gray-600 mt-1">Find your next freelance opportunity</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0027A8] focus:border-transparent">
                      <option>Sort by: Newest</option>
                      <option>Sort by: Relevance</option>
                      <option>Sort by: Salary</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* No Jobs Found State */}
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <div className="max-w-md mx-auto">
                  <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">No job found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any jobs matching your current filters. Try adjusting your search criteria.
                  </p>
                  
                  <div className="space-y-3">
                    <button 
                      onClick={() => {
                        setSelectedJobType("Job");
                        setSelectedExperience("");
                      }}
                      className="bg-[#0027A8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#001454] transition-colors duration-200"
                    >
                      Clear Filters
                    </button>
                    <p className="text-sm text-gray-500">
                      Or <button className="text-[#0027A8] hover:text-[#001454] font-semibold">browse all categories</button>
                    </p>
                  </div>
                </div>
              </div>

              {/* Suggested Searches */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Suggested Searches</h3>
                <div className="flex flex-wrap gap-3">
                  {["Web Development", "Graphic Design", "Content Writing", "Digital Marketing", "Data Entry", "Virtual Assistant"].map((skill) => (
                    <button
                      key={skill}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <Footer />
    </div>
  );
}