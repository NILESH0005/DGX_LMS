import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DeepLearningKit = () => {
    const { category, subcategory } = useParams();
    const navigate = useNavigate();
    const [selectedFileId, setSelectedFileId] = useState(null); // Track the selected fileId
    const [expandedSubcategory, setExpandedSubcategory] = useState(null);
    const [selectedFileType, setSelectedFileType] = useState("ppt"); // Default to PPT

    // Example data for subcategories with nested items
    const subcategories = [
        {
            id: 2,
            title: "Introduction to Machine Learning",
            path: "introduction-to-machine-learning",
            nested: [
                { id: 21, title: "Lecture 1", path: "lecture-1", fileId: "1cxu8olBlBx47UuOOvXksCkzoOG4FWYTb", type: "ppt"  },
                { id: 22, title: "Lecture 2", path: "lecture-1", fileId: "1tCmysnYqZ8_9OkSVcSB_2bqEVXM4JEDm", type: "ppt" },
                { id: 23, title: "Lecture 3", path: "lecture-1", fileId: "1SB8U0anqOUHV28hVKOIrFXI_AEdDr6Gx", type: "ppt" },
            ],
        },
        {
            id: 3,
            title: "Introduction to Deep Learning",
            path: "introduction-to-deep-learning",
            nested: [
                { id: 24, title: "Lecture 1", path: "lecture-2", fileId: "1SJpcG-IkIErkKVsgVdklSnFPzbZzNnLE", type: "ppt"  },
                { id: 25, title: "Lecture 2", path: "lecture-2", fileId: "1RTs5sYGhC4I4-IK5B70QzNytQnbCLCq2", type: "ppt"  },
                { id: 26, title: "Lecture 3", path: "lecture-2", fileId: "11BqsB-JjyRhY5GdVeONPZB8Iqelozqwy", type: "ppt"  },
            ],
        },
        {
            id: 4,
            title: "Convolutional Neural Networks",
            path: "convolutional-neural-networks",
            nested: [
                { id: 27, title: "Lecture 1", path: "lecture-1", fileId: "1B6tUpU5OK9yPrORfOSEidwnG_1SYajL5", type: "ppt"  },
                { id: 28, title: "Lecture 2", path: "lecture-2", fileId: "10xmgrDssO2b0Usi9G2OGibo2pjtLGnYH", type: "ppt"  },
                { id: 29, title: "Lecture 3", path: "lecture-3", fileId: "1IXb-sDk8_LK0SGWgikZ8JiYcijtMJDdn", type: "ppt"  },

            ],
        },
        {
            id: 5,
            title: "Energy Based Learning",
            path: "energy based learning",
            nested: [
                { id: 30, title: "Lecture 2", path: "lecture-2", fileId: "1CIi-gmxYTyRM0VcrtVenAXmG5W4w5HCj", type: "ppt"  },
                { id: 31, title: "Lecture 2", path: "lecture-2", fileId: "1Mf4YV6XYCE56FVOzomyCNj-gHdFjydMp", type: "ppt" },
                { id: 32, title: "Lecture 3", path: "lecture-3", fileId: "10XXxuyhk46g2B5VZ7Bn-7c9F65setZHk", type: "ppt" },

            ],
        },
        {
            id: 6,
            title: "Optimization Techniques",
            path: "optimization techniques",
            nested: [
                { id: 33, title: "Lecture 1", path: "lecture-1", fileId: "1IAs20TnsM3Zebpnrd6yROezZ5JnXhcfg", type: "ppt" },
            ],
        },
        {
            id: 7,
            title: "Learning With Memory",
            path: "learning with memory",
            nested: [
                { id: 34, title: "Lecture 2", path: "lecture-2", fileId: "1NsfQjhY4Dpn1y2aV5hOVOelN7UQY_X4z" },
                { id: 35, title: "Lecture 3", path: "lecture-2", fileId: "1TgNQGoGnMM5VTlkJJgOM1L8cf6LIWXiX" },
                { id: 36, title: "Lecture 4", path: "lecture-2", fileId: "1QU4s8XCAMpkzLnMscN-T2eFvccOv2R7t" },
                { id: 37, title: "Lecture 5", path: "lecture-2", fileId: "1lMwLxL_pA5Y_f7Z8xJCImenVMTYK2bkJ" },
                { id: 38, title: "Lecture 6", path: "lecture-2", fileId: "1lygf6GXexJp3qhu0IMUNCO5ZkDsLeFg2" },
                { id: 39, title: "Lecture 1", path: "lecture-1", fileId: "1mydloBanxw39e8iVn41Ow3nIX3Wq0MBs" },
            ],
        },
        {
            id: 8,
            title: "Future Chalenges",
            path: "future chalenges",
            fileId: "1KGQ00fu9ZLQjwFHQOxw7PASmY0xAaLkg",
            
        },
        {
            id: 9,
            title: "Quick Start Guide",
            path: "quick-start-guide",
            fileId: "1ZJ_2u-I1oCPM3MvOT6IPpUboHRjR4iNW",
            type: "pdf",
        },
        {
            id: 10,
            title: "2nd Release Note",
            path: "2nd-release-note",
            fileId: "1fw_MKjMWCK0GP5vWAS9Dqj8IXTv7YHmG",
            type: "pdf",
        },
        {
            id: 11,
            title: "DLI Online Course and Certificate",
            path: "dli-online-course-and-certificate",
            fileId: "19gtDdyGFK-1RoFN1H_fR1xU9zraVn0Vx",
            type: "pdf",
        },
        {
            id: 12,
            title: "Syllabus",
            path: "syllabus",
            fileId: "16vkcuE7xa0Syh0mZAfCfxpGdm93v4tdj",
            type: "pdf",
        },
    ];

    // Get embed link
    const getEmbedURL = (fileId, type = "ppt") => {
        switch (type) {
            case "ppt":
                return `https://docs.google.com/presentation/d/${fileId}/embed`;
            case "pdf":
                return `https://drive.google.com/file/d/${fileId}/preview`;
            case "txt":
                return `https://drive.google.com/uc?export=view&id=${fileId}`;
            default:
                return "";
        }
    };

    // Auto-select the first file on load
    useEffect(() => {
        if (subcategories.length > 0 && !selectedFileId) {
            const firstSubcategory = subcategories[0];
            if (firstSubcategory.nested && firstSubcategory.nested.length > 0) {
                setSelectedFileId(firstSubcategory.nested[0].fileId); // Set the first fileId
                setSelectedFileType(firstSubcategory.nested[0].type); // Set the first file type
            } else if (firstSubcategory.fileId) {
                setSelectedFileId(firstSubcategory.fileId); // Set the fileId for non-nested subcategories
                setSelectedFileType(firstSubcategory.type); // Set the file type
            }
        }
    }, [subcategories]);

    const handleSubcategoryClick = (path, fileId, type = "ppt") => {
        console.log("Navigating to:", path, "with fileId:", fileId, "and type:", type); // Debugging
        if (fileId) {
            setSelectedFileId(fileId);
            setSelectedFileType(type); // Set the file type
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
                                        handleSubcategoryClick(sub.path, sub.fileId, sub.type); // Pass type for non-nested
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
                                            onClick={(e) => {
                                                e.preventDefault(); // Prevent default navigation
                                                handleSubcategoryClick(nestedSub.path, nestedSub.fileId, nestedSub.type); // Pass type for nested
                                            }}
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
                {selectedFileId && (
                    <div className="w-full max-w-6xl h-[80vh] border rounded-lg shadow overflow-hidden"
                        onContextMenu={(e) => e.preventDefault()}>
                        <iframe
                            key={selectedFileId} // Add key to force re-render
                            src={getEmbedURL(selectedFileId, selectedFileType)}
                            className="w-full h-full"
                            allowFullScreen
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DeepLearningKit;