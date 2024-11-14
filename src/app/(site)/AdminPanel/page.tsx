"use client"

import { useState, useEffect } from "react";

export default function Admin() {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [projects, setProjects] = useState<{ id: number; name: string; description: string }[]>([]);
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");

    // Check if the user is authenticated from localStorage when the component mounts
    useEffect(() => {
        const storedAuth = localStorage.getItem("isAuthenticated");
        if (storedAuth === "true") {
            setIsAuthenticated(true);
        }
    }, []);

    const handlePasswordSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        const correctPassword = "hello";

        if (password === correctPassword) {
            setIsAuthenticated(true);
            localStorage.setItem("isAuthenticated", "true");
        } else {
            alert("Incorrect password. Please try again.");
        }
    };

    // Function to handle adding a new project
    const handleAddProject = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (projectName && projectDescription) {
            const newProject = { id: Date.now(), name: projectName, description: projectDescription };
            setProjects([...projects, newProject]);
            setProjectName("");
            setProjectDescription("");
        }
    };

    // Function to delete a project
    const handleDeleteProject = (projectId: number) => {
        setProjects(projects.filter(project => project.id !== projectId));
    };

    return (
        <>
            {!isAuthenticated ? (
                <div className="flex flex-col items-center justify-center min-h-screen mt-28 pt-20 mb-20 pb-20">
                    <div className="w-[300px] bg-white p-8 rounded-md">
                        <h1 className="text-2xl mb-4 text-center">Admin Login</h1>
                        <form onSubmit={handlePasswordSubmit} className="flex flex-col items-center">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="p-2 border text-center border-gray-800 mb-2"
                            />
                            <button type="submit" className="bg-blue-500 mt-5 rounded-md text-white w-full py-2">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            ) : 
            
            
            (
                <div className="mt-28 p-8 panel bg-white shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>

                    {/* Form to add a new project */}
                    <form onSubmit={handleAddProject} className="mb-8">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Project Name</label>
                            <input
                                type="text"
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                                className="w-full p-2 border rounded"
                                placeholder="Enter project name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Project Description</label>
                            <textarea
                                value={projectDescription}
                                onChange={(e) => setProjectDescription(e.target.value)}
                                className="w-full p-2 border rounded"
                                placeholder="Enter project description"
                            />
                        </div>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Add Project</button>
                    </form>

                    {/* List of Projects */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Projects</h3>
                        {projects.length > 0 ? (
                            <ul className="space-y-4">
                                {projects.map((project) => (
                                    <li key={project.id} className="p-4 border rounded flex justify-between items-center">
                                        <div>
                                            <h4 className="text-lg font-bold">{project.name}</h4>
                                            <p className="text-sm text-gray-600">{project.description}</p>
                                        </div>
                                        <button
                                            onClick={() => handleDeleteProject(project.id)}
                                            className="px-2 py-1 text-sm bg-red-500 text-white rounded"
                                        >
                                            Delete
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No projects added yet.</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
