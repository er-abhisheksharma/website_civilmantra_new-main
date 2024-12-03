"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Add Axios for API calls

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState(""); // State for error messages
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Check if a user is already logged in
            const adminUser = localStorage.getItem("Admin");

            if (adminUser) {
                router.replace("/AdminPanel");
            }
        }
    }, [router]);
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        try {
            // Call the API with user credentials
            const response = await axios.post("https://cipl.aimantra.info/user/login/", {
                "email":username,
                "password":password,

            });

            if (response.status === 200) {
                const userData = response.data;

                // Save user data in local storage if the role matches
                if (role === "admin") {
                    localStorage.setItem("Admin", JSON.stringify(userData));
                }

                // Navigate to the admin panel
                router.replace("/AdminPanel");
            } else {
                setError("Invalid login credentials. Please try again.");
            }
        } catch (error: any) {
            console.error("Login failed", error);
            setError(error.response?.data?.message || "An error occurred. Please try again.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-28 mb-8 p-6 border border-gray-300 rounded-lg shadow-xl bg-white">
            <h2 className="text-2xl font-semibold text-left mb-4 text-logored">
                Login
            </h2>
            <p className="text-gray-600 text-left mb-6">
                Enter your credentials to access your account.
            </p>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                    <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Username/Email
                    </label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your username or email"
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[2px] focus:ring-[#990000]"
                    />
                </div>
                <div className="form-group">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-800"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[2px] focus:ring-[#990000]"
                    />
                </div>
                <div className="form-group">
                    <label
                        htmlFor="role"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Role
                    </label>
                    <select
                        id="role"
                        value={role}
                        required
                        onChange={(e) => setRole(e.target.value)}
                        className="mt-1 cursor-pointer block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[2px] focus:ring-[#990000]"
                    >
                        <option value="" disabled>
                            Select Role
                        </option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4  border border-transparent text-md font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-[#b80202] focus:outline-none"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default AdminLogin;
