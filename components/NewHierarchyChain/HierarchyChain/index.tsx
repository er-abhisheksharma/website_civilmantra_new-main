"use client";

import { useEffect, useRef, useState } from "react";

interface UserDetail {
    name: string;
    employee: string;
}

interface User {
    emp_code: string;
    profilepic?: string;
    designation_name: string;
    department_name: string;
    user_detail: UserDetail;
    subordinates: User[];
}

const manualData: User[] = [
    {
        emp_code: "E001",
        profilepic: "/images/AboutUs/keymembers/Susheel bhardwaj.png",
        designation_name: "Managing Director",
        department_name: "Management",
        user_detail: { name: "Shusheel Bhardwaj", employee: "Employee 1" },
        subordinates: [
            {
                emp_code: "E002",
                profilepic: "",
                designation_name: "COO",
                department_name: "Sales",
                user_detail: { name: "Sumit Bhaati", employee: "Employee 2" },
                subordinates: [
                    {
                        emp_code: "E003",
                        profilepic: "",
                        designation_name: "BDE Head",
                        department_name: "Sales",
                        user_detail: { name: "Bhaskar Lingham", employee: "Employee 3" },
                        subordinates: [],
                    },
                    {
                        emp_code: "E003",
                        profilepic: "",
                        designation_name: "CFO",
                        department_name: "Sales",
                        user_detail: { name: "Maninder", employee: "Employee 3" },
                        subordinates: [],
                    },
                    
                    {
                        emp_code: "E003",
                        profilepic: "",
                        designation_name: "Senior VP",
                        department_name: "Sales",
                        user_detail: { name: "Sunil Kumar", employee: "Employee 3" },
                        subordinates: [],
                    },
                    {
                        emp_code: "E003",
                        profilepic: "",
                        designation_name: "VP",
                        department_name: "Sales",
                        user_detail: { name: "Rajveer Dangi", employee: "Employee 3" },
                        subordinates: [],
                    },
                    {
                        emp_code: "E003",
                        profilepic: "",
                        designation_name: "Design Head",
                        department_name: "Sales",
                        user_detail: { name: "Sumit Manghotra", employee: "Employee 3" },
                        subordinates: [
                            {
                                emp_code: "E003",
                                profilepic: "",
                                designation_name: "BU Head (Highway)",
                                department_name: "Sales",
                                user_detail: { name: "Akshay Kumar", employee: "Employee 3" },
                                subordinates: [],
                            },
                            {
                                emp_code: "E003",
                                profilepic: "",
                                designation_name: "BU Head (Structure)",
                                department_name: "Sales",
                                user_detail: { name: "Ankush", employee: "Employee 3" },
                                subordinates: [],
                            },
                            {
                                emp_code: "E003",
                                profilepic: "",
                                designation_name: "BU Head (Speacial Structure)",
                                department_name: "Sales",
                                user_detail: { name: "Shashank", employee: "Employee 3" },
                                subordinates: [],
                            },
                        ],
                    },

                ],
            },
        ],
    },
];

const HierarchyChain = () => {
    const [treeData] = useState<User[]>(manualData);
    const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
    const [searchValue, setSearchValue] = useState<string>("");
    const [searchResults, setSearchResults] = useState<User[]>([]);
    const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
    const userRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const findUserAndExpand = (data: User[], targetCode: string, expandedNodesSet: Set<string>): boolean => {
        for (const user of data) {
            expandedNodesSet.add(user.emp_code);
            if (user.emp_code === targetCode) {
                return true;
            }
            if (user.subordinates.length > 0) {
                const foundInSubordinates = findUserAndExpand(user.subordinates, targetCode, expandedNodesSet);
                if (foundInSubordinates) return true;
            }
            expandedNodesSet.delete(user.emp_code);
        }
        return false;
    };

    const handleLocateClick = (empCode: string) => {
        const expandedNodesSet = new Set<string>();
        const pathFound = findUserAndExpand(treeData, empCode, expandedNodesSet);

        if (pathFound) {
            setExpandedNodes(expandedNodesSet);
            setTimeout(() => {
                const targetNode = userRefs.current[empCode];
                if (targetNode) {
                    targetNode.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }, 100);
        }
    };

    const findInTree = (root: User[], searchText: string) => {
        const results: User[] = [];
        const regex = new RegExp(searchText, "i");

        const search = (nodes: User[]) => {
            nodes.forEach((node) => {
                if (regex.test(node.emp_code) || regex.test(node.user_detail.name)) {
                    results.push(node);
                }
                if (node.subordinates.length > 0) {
                    search(node.subordinates);
                }
            });
        };

        search(root);
        return results;
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value;
        setSearchValue(searchTerm);
        setSearchResults(searchTerm.length >= 3 ? findInTree(treeData, searchTerm) : []);
    };

    const renderSearchResults = () => {
        return searchResults.map((result) => (
            <div className="list-item" key={result.emp_code}>
                <div className="image-wrapper">
                    <img
                        src={"/images/heirar/photoprofile.jpg"}
                        alt={result.user_detail.name}
                        className="image"
                    />
                </div>
                <div className="description">
                    <p className="name">{result.user_detail.name} - {result.emp_code}</p>
                    <p className="position-name">{result.designation_name}</p>
                    <p className="area">{result.department_name}</p>
                </div>
                <div className="buttons">
                    <button className="btn-action btn-search-box" onClick={() => handleLocateClick(result.emp_code)}>Locate</button>
                </div>
            </div>
        ));
    };

    const UserNode = ({ user }: { user: User }) => {
        const [showSubordinates, setShowSubordinates] = useState<boolean>(true);

        useEffect(() => {
            if (expandedNodes.has(user.emp_code)) {
                setShowSubordinates(true);
            }
        }, [user.emp_code, expandedNodes]);

        return (
            <div className="main-hireachy-div" >
                <div className="hireachry-user-box">

                    <div className="hireachry-user-details " onClick={() => setShowSubordinates(!showSubordinates)}>
                        <img
                            src={user.profilepic}
                            alt="user-image"
                            style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "cover",
                                borderRadius: "6px 6px 0 0 ",
                            }}
                            className=""
                        />
                        <div className=" gap-x-5 mt-2 pb-2">
                            <h2 className="font-bold"><span className="font-medium">Name:</span> {user.user_detail.name}</h2>
                            {/* <h5>{user.emp_code}</h5> */}
                            <h2 className="font-bold"><span className="font-medium">Designation:</span> {user.designation_name}</h2>
                        </div>
                        {user.subordinates.length > 0 && (
                            <button className="hireachy-toggle-button">
                                {showSubordinates ? "Collapse" : `Expand (${user.subordinates.length})`}
                            </button>
                        )}
                    </div>
                </div>
                {showSubordinates && user.subordinates.length > 0 && (
                    <div className="hireachy-subordinate-box">
                        {user.subordinates.map((sub) => (
                            <UserNode key={sub.emp_code} user={sub} />
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div id="full-container">
            {/* <div className="controls">
        <button className="btn-action btn-search" onClick={() => setShowSearchBox(!showSearchBox)}>Search</button>
      </div> */}

            {showSearchBox && (
                <div className="user-search-box">
                    <input type="text" placeholder="Search" value={searchValue} onChange={handleSearch} />
                    <div className="result-list">{renderSearchResults()}</div>
                </div>
            )}

            <div className="hierarchy-container">
                {treeData.map((user) => (
                    <UserNode key={user.emp_code} user={user} />
                ))}
            </div>
        </div>
    );
};

export default HierarchyChain;
