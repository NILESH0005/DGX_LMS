import React from 'react';

export const Lms = () => {
  // Example data for modules
  const modules = [
    {
      id: 1,
      title: "Teaching Kits",
      description: "Access and render text files, PowerPoints, and Jupyter Notebooks",
      progress: 0,
    },
    {
      id: 2,
      title: "Data Sets",
      description: "Access structured/constructured datasets with upload & manage options",
      progress: 0,
    },
    {
      id: 3,
      title: "Digital Learning",
      description: "Interactive e-learning with videos, self-paced learning, and quizzes",
      progress: 0,
    },
    {
      id: 4,
      title: "Algorithms",
      description: "AUML algorithms with practical case studies",
      progress: 0,
    },
    {
      id: 5,
      title: "Pre-Trained Models",
      description: "Repository of AUML models with fine-tuning and deployment options",
      progress: 0,
    },
    {
      id: 6,
      title: "AI, ML, and Deep Learning Concepts",
      description: "Structured courses with tutorials, simulations, and hands-on projects",
      progress: 0,
    },
    {
      id: 7,
      title: "Annotation Tools & Dataset Creation",
      description: "Integrated image, text, and video annotation tools",
      progress: 0,
    },
    {
      id: 8,
      title: "Computer Vision",
      description: "Modules for object detection, image processing, and classification",
      progress: 0,
    },
  ];

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <div className="w-64 bg-sidebar-background text-sidebar-foreground p-4 border-r border-sidebar-border">
        <h2 className="text-lg font-semibold mb-4">LMS Dashboard</h2>
        <ul className="space-y-2">
          <li className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 rounded">
            <a href="#" className="block">Courses</a>
          </li>
          <li className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 rounded">
            <a href="#" className="block">Students</a>
          </li>
          <li className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 rounded">
            <a href="#" className="block">Assignments</a>
          </li>
          <li className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 rounded">
            <a href="#" className="block">Grades</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-card border-b border-border p-4">
          <h1 className="text-xl font-bold">Welcome to the LMS</h1>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-4">
          <div className="space-y-8">
            {/* Title and Description */}
            <div>
              <h1 className="text-3xl font-bold">LMS Platform</h1>
              <p className="text-muted-foreground">Explore our interactive learning modules</p>
            </div>

            {/* Grid of Modules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {modules.map((module) => (
                <div key={module.id} className="bg-popover p-6 rounded-lg shadow">
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