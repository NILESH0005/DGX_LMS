import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Lms = () => {
  const navigate = useNavigate();

  const modules = [
    {
      id: 1,
      title: "Teaching Kits",
      description: "Access and render text files, PowerPoints, and Jupyter Notebooks",
      progress: 0,
      category: "teaching-kits",
      subcategory: "teaching-kits",
    },
    {
      id: 2,
      title: "Data Sets",
      description: "Access structured/constructured datasets with upload & manage options",
      progress: 0,
      category: "data-sets",
      subcategory: "data-sets",
    },
    // Add other modules similarly...
  ];

  const handleCardClick = (category, subcategory) => {
    // Navigate to the TeachingModules route
    navigate('/teaching-modules', { state: { category, subcategory } });
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      <div className="flex-1 flex flex-col">
        <header className="bg-card border-b border-border p-4">
          <h1 className="text-xl font-bold">Welcome to the LMS</h1>
        </header>

        <main className="flex-1 p-4">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold">LMS Platform</h1>
              <p className="text-muted-foreground">Explore our interactive learning modules</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {modules.map((module) => (
                <div
                  key={module.id}
                  className="bg-popover p-6 rounded-lg shadow cursor-pointer"
                  onClick={() => handleCardClick(module.category, module.subcategory)}
                >
                  <h2 className="text-lg font-semibold mb-2">{module.title}</h2>
                  <p className="text-muted-foreground text-sm mb-4">{module.description}</p>
                  <div className="w-full">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Progress</span>
                      <span>{module.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${module.progress}%` }}
                      ></div>
                    </div>
                  </div>
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