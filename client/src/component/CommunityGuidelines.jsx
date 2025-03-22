import { useState } from "react";

const LearningModule = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // ✅ Replace with actual Google Drive File IDs
  const files = [
    { name: "Deep Learning Guide", type: "pdf", id: "1ZJ_2u-I1oCPM3MvOT6IPpUboHRjR4iNW" },
    { name: "Edge AI Basics (TXT)", type: "txt", id: "1LOPOXRwh3BjQMZJCCZYXApUlhH-lEUEt" },
    { name: "Generative AI Slides", type: "ppt", id: "1cxu8olBlBx47UuOOvXksCkzoOG4FWYTb" },
  ];

  const getEmbedURL = (file) => {
    switch (file.type) {
      case "pdf":
        return `https://drive.google.com/file/d/${file.id}/preview`; // ✅ Correct PDF embed URL
      // case "txt":
        return `https://drive.google.com/uc?export=view&id=${file.id}`; // ❌ Google Drive may not allow direct txt embedding
      case "ppt":
        return `https://docs.google.com/presentation/d/${file.id}/embed`; // ✅ Correct for Google Slides
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-4">Teaching Kit</h2>
      <div className="flex gap-4">
        {files.map((file) => (
          <button
            key={file.id}
            onClick={() => setSelectedFile(file)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            {file.name}
          </button>
        ))}
      </div>

      {selectedFile && (
        <div className="mt-6 w-full max-w-4xl h-[500px] border rounded-lg shadow">
          <iframe
            src={getEmbedURL(selectedFile)}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default LearningModule;
