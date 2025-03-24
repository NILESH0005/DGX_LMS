import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChalkboardTeacher, FaDatabase } from 'react-icons/fa'; // Example icons from react-icons

export const Lms = () => {
  const navigate = useNavigate();

  const modules = [
    {
      id: 1,
      title: "Teaching Kits",
      description: "Access and render text files, PowerPoints, and Jupyter Notebooks",
      category: "teaching-kits",
      subcategory: "teaching-kits",
      icon: <FaChalkboardTeacher className="w-16 h-16 text-DGXblue" />, // Increased icon size and applied DGXblue
    },
    {
      id: 2,
      title: "Data Sets",
      description: "Access structured/unstructured datasets with upload & manage options",
      category: "data-sets",
      subcategory: "data-sets",
      icon: <FaDatabase className="w-16 h-16 text-DGXgreen" />, // Increased icon size and applied DGXgreen
    },
    // Add other modules similarly...
  ];

  const handleCardClick = (category, subcategory) => {
    // Navigate to different paths based on the category
    if (category === 'data-sets') {
      navigate('/data-modules', { state: { category, subcategory } }); // New path for Data Sets
    } else {
      navigate('/teaching-modules', { state: { category, subcategory } }); // Existing path for Teaching Kits
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm p-6">
          <h1 className="text-5xl font-bold text-DGXblue">LMS Platform</h1>
          <p className="text-gray-600 mt-2 text-2xl">Explore our interactive learning modules</p> {/* Increased text size and applied DGXblue */}
        </header>

        <main className="flex-1 p-8">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {modules.map((module) => (
                <div
                  key={module.id}
                  className="bg-white p-8 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-shadow transform hover:-translate-y-1"
                  onClick={() => handleCardClick(module.category, module.subcategory)}
                >
                  <div className="flex justify-center mb-6">
                    {module.icon}
                  </div>
                  <h2 className="text-2xl font-semibold text-center mb-4 text-DGXblue">{module.title}</h2> {/* Increased text size and applied DGXblue */}
                  <p className="text-gray-600 text-lg text-center">{module.description}</p> {/* Increased text size */}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Lms;