import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ModuleDetail = () => {
    const { category, subcategory } = useParams();
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [expandedSubcategory, setExpandedSubcategory] = useState(null);

    // Example data for subcategories with nested items
    const subcategories = [
        {
            id: 2,
            title: "Introduction to Machine Learning",
            path: "introduction-to-machine-learning",
            nested: [
                { id: 21, title: "Lecture 1", path: "lecture-1.1", fileId: "1cxu8olBlBx47UuOOvXksCkzoOG4FWYTb" },
                { id: 22, title: "Lecture 2", path: "lecture-1.2", fileId: "1tCmysnYqZ8_9OkSVcSB_2bqEVXM4JEDm" },
                { id: 23, title: "Lecture 3", path: "lecture-1.3", fileId: "1SB8U0anqOUHV28hVKOIrFXI_AEdDr6Gx" },
            ],
        },
        {
            id: 3,
            title: "Introduction to Deep Learning",
            path: "introduction-to-deep-learning",
            nested: [
                { id: 24, title: "Lecture 1", path: "lecture-2.1", fileId: "1SJpcG-IkIErkKVsgVdklSnFPzbZzNnLE" },
                { id: 25, title: "Lecture 2", path: "lecture-2.2", fileId: "1RTs5sYGhC4I4-IK5B70QzNytQnbCLCq2" },
                { id: 26, title: "Lecture 3", path: "lecture-2.3", fileId: "1SB8U0anqOUHV28hVKOIrFXI_AEdDr6Gx" },
            ],
        },
        {
            id: 4,
            title: "Convolutional Neural Networks",
            path: "convolutional-neural-networks",
            nested: [
                { id: 27, title: "Lecture 1", path: "lecture-1", fileId: "1cxu8olBlBx47UuOOvXksCkzoOG4FWYTb" },
                { id: 28, title: "Lecture 2", path: "lecture-2", fileId: "1tCmysnYqZ8_9OkSVcSB_2bqEVXM4JEDm" },
            ],
        },
        {
            id: 5,
            title: "Energy Based Learning",
            path: "energy based learning",
            nested: [
                { id: 29, title: "Lecture 1", path: "lecture-1", fileId: "1cxu8olBlBx47UuOOvXksCkzoOG4FWYTb" },
                { id: 30, title: "Lecture 2", path: "lecture-2", fileId: "1tCmysnYqZ8_9OkSVcSB_2bqEVXM4JEDm" },
                { id: 31, title: "Lecture 2", path: "lecture-2", fileId: "1tCmysnYqZ8_9OkSVcSB_2bqEVXM4JEDm" },

            ],
        },
        {
            id: 6,
            title: "Optimization Techniques",
            path: "optimization techniques",
            nested: [
                { id: 32, title: "Lecture 1", path: "lecture-1", fileId: "1cxu8olBlBx47UuOOvXksCkzoOG4FWYTb" },
            ],
        },
        {
            id: 7,
            title: "Learning With Memory",
            path: "learning with memory",
            nested: [
                { id: 33, title: "Lecture 1", path: "lecture-1", fileId: "1cxu8olBlBx47UuOOvXksCkzoOG4FWYTb" },
                { id: 34, title: "Lecture 2", path: "lecture-2", fileId: "1tCmysnYqZ8_9OkSVcSB_2bqEVXM4JEDm" },
                { id: 35, title: "Lecture 3", path: "lecture-2", fileId: "1tCmysnYqZ8_9OkSVcSB_2bqEVXM4JEDm" },
                { id: 36, title: "Lecture 4", path: "lecture-2", fileId: "1tCmysnYqZ8_9OkSVcSB_2bqEVXM4JEDm" },
                { id: 37, title: "Lecture 5", path: "lecture-2", fileId: "1tCmysnYqZ8_9OkSVcSB_2bqEVXM4JEDm" },
                { id: 38, title: "Lecture 6", path: "lecture-2", fileId: "1tCmysnYqZ8_9OkSVcSB_2bqEVXM4JEDm" },

            ],
        },
        {
            id: 8,
            title: "Future Chalenges",
            path: "future chalenges",
            nested: [
                { id: 39, title: "Lecture 1", path: "lecture-1", fileId: "1cxu8olBlBx47UuOOvXksCkzoOG4FWYTb" },
            ],
        },
        {
            id: 9,
            title: "Quick Start Guide",
            path: "quick-start-guide",
            fileId: "1QUICKSTARTGUIDEID", // Add the corresponding file ID
        },
        {
            id: 10,
            title: "2nd Release Note",
            path: "2nd-release-note",
            fileId: "1RELEASENOTEID", // Add the corresponding file ID
        },
        {
            id: 11,
            title: "DLI Online Course and Certificate",
            path: "dli-online-course-and-certificate",
            fileId: "1DLICOURSEID", // Add the corresponding file ID
        },
        {
            id: 12,
            title: "Syllabus",
            path: "syllabus",
            fileId: "1SYLLABUSID", // Add the corresponding file ID
        },
    ];

    // Example data for files
    const files = [
        { name: "Lecture 1 Slides", type: "ppt", id: "1cxu8olBlBx47UuOOvXksCkzoOG4FWYTb" },
        { name: "Lecture 2 Slides", type: "ppt", id: "1tCmysnYqZ8_9OkSVcSB_2bqEVXM4JEDm" },
        { name: "Lecture 3 Slides", type: "ppt", id: "1SB8U0anqOUHV28hVKOIrFXI_AEdDr6Gx" },
        { name: "Lecture 1 Slides", type: "ppt", id: "1SJpcG-IkIErkKVsgVdklSnFPzbZzNnLE" },
        { name: "Lecture 2 Slides", type: "ppt", id: "1RTs5sYGhC4I4-IK5B70QzNytQnbCLCq2" },
        // Add more files as needed
    ];

    // Get embed link
    const getEmbedURL = (file) => {
        switch (file.type) {
            case "ppt":
                return `https://docs.google.com/presentation/d/${file.id}/embed`;
            case "pdf":
                return `https://drive.google.com/file/d/${file.id}/preview`;
            case "txt":
                return `https://drive.google.com/uc?export=view&id=${file.id}`;
            default:
                return "";
        }
    };

    // useEffect(() => {
    //     const disableShortcuts = (e) => {
    //         if (e.ctrlKey || e.metaKey) {
    //             e.preventDefault();
    //         }
    //     };

    //     window.addEventListener("keydown", disableShortcuts);

    //     return () => {
    //         window.removeEventListener("keydown", disableShortcuts);
    //     };
    // }, []);

    // Auto-select the first file on load
    useEffect(() => {
        if (files.length > 0 && !selectedFile) {
            setSelectedFile(files[0]);
        }
    }, [files]);

    const handleSubcategoryClick = (path, fileId) => {
        navigate(`/category/${category}/subcategory/${path}`);
        if (fileId) {
            const file = files.find((f) => f.id === fileId);
            if (file) {
                setSelectedFile(file);
            }
        }
    };

    const toggleNestedSubcategories = (id) => {
        setExpandedSubcategory((prev) => (prev === id ? null : id));
    };

    return (
        <div className="flex h-screen bg-background text-foreground">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white p-4 border-r border-gray-700">
                <h2 className="text-lg font-semibold mb-4">Subcategories</h2>
                <ul className="space-y-2">
                    {subcategories.map((sub) => (
                        <li key={sub.id}>
                            <div
                                className={`hover:bg-gray-700 hover:text-white p-2 rounded cursor-pointer ${subcategory === sub.path ? "bg-gray-700 text-white" : ""
                                    }`}
                                onClick={() => {
                                    if (sub.nested) {
                                        toggleNestedSubcategories(sub.id);
                                    } else {
                                        handleSubcategoryClick(sub.path);
                                    }
                                }}
                            >
                                {sub.title}
                            </div>
                            {/* Nested subcategories */}
                            {sub.nested && expandedSubcategory === sub.id && (
                                <ul className="pl-4 mt-2 space-y-2">
                                    {sub.nested.map((nestedSub) => (
                                        <li
                                            key={nestedSub.id}
                                            className={`hover:bg-gray-700 hover:text-white p-2 rounded cursor-pointer ${subcategory === nestedSub.path ? "bg-gray-700 text-white" : ""
                                                }`}
                                            // onClick={() => handleSubcategoryClick(nestedSub.path, nestedSub.fileId)}
                                        >
                                            {nestedSub.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4 text-center">{category}</h1>
                <p className="text-gray-500 mb-4 text-center">Selected Subcategory: {subcategory}</p>

                {/* Display the selected file in iframe */}
                {selectedFile && (
                    <div className="w-full max-w-6xl h-[80vh] border rounded-lg shadow overflow-hidden "
                    onContextMenu={(e) => e.preventDefault()}>
                            {/* <div className="absolute inset-0 z-10"></div> */}
                        <iframe
                            key={selectedFile.id} // Add key to force re-render
                            src={getEmbedURL(selectedFile)}
                            className="w-full h-full"
                            allowFullScreen
                        />
                    </div>
                    
                )}
            </div>
        </div>
    );
};

export default ModuleDetail;