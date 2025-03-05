"use client";

import React, { useState, useEffect, useRef } from "react";

// Online SVG Icons
const DropdownArrowOption =
  "https://www.svgrepo.com/show/509054/chevron-down.svg";
const DropdownArrowClosed =
  "https://www.svgrepo.com/show/509053/chevron-right.svg";
const Collapse = "https://www.svgrepo.com/show/509055/chevron-up.svg";
const SearchBig = "https://www.svgrepo.com/show/80117/search.svg";
const Employee = "https://www.svgrepo.com/show/509457/user.svg";
const Arrow = "https://www.svgrepo.com/show/509496/arrow-right.svg";

// Define User Type
interface User {
  emp_code: string;
  profilepic?: string;
  user_detail: {
    name: string;
    employee: string;
  };
  designation_name: string;
  department_name: string;
  subordinates: User[];
}

// Sample Manual Data
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
        profilepic: "/images/AboutUs/keymembers/123.JPG",
        designation_name: "COO",
        department_name: "Sales",
        user_detail: { name: "Sumit Bhati", employee: "Employee 2" },
        subordinates: [
          {
            emp_code: "E003",
            profilepic: "/images/AboutUs/keymembers/Lingam1.jpg",
            designation_name: "BDE Head",
            department_name: "Sales",
            user_detail: { name: "Bhaskar Lingam", employee: "Employee 3" },
            subordinates: [],
          },
          {
            emp_code: "E003",
            profilepic: "/images/AboutUs/keymembers/Manindedr Kumar.JPG",
            designation_name: "CFO",
            department_name: "Sales",
            user_detail: { name: "Maninder Kumar", employee: "Employee 3" },
            subordinates: [],
          },

          {
            emp_code: "E003",
            profilepic: "/images/AboutUs/keymembers/Sunil K.JPG",
            designation_name: "Senior VP",
            department_name: "Sales",
            user_detail: { name: "Sunil Kumar", employee: "Employee 3" },
            subordinates: [],
          },
          {
            emp_code: "E003",
            profilepic: "/images/AboutUs/keymembers/Rajveer Dangi.JPG",
            designation_name: "VP",
            department_name: "Sales",
            user_detail: { name: "Rajveer Dangi", employee: "Employee 3" },
            subordinates: [],
          },
          {
            emp_code: "E003",
            profilepic: "/images/AboutUs/keymembers/SumitMangotra.JPG",
            designation_name: "Design Head",
            department_name: "Sales",
            user_detail: { name: "Sumit Magotra", employee: "Employee 3" },
            subordinates: [
              {
                emp_code: "E003",
                profilepic: "/images/AboutUs/keymembers/akshay.JPG",
                designation_name: "BU Head (Highway)",
                department_name: "Sales",
                user_detail: { name: "Akshay Kumar", employee: "Employee 3" },
                subordinates: [],
              },
              {
                emp_code: "E003",
                profilepic: "/images/AboutUs/keymembers/Ankush.JPG",
                designation_name: "BU Head (Structure)",
                department_name: "Sales",
                user_detail: { name: "Ankush Sharma", employee: "Employee 3" },
                subordinates: [],
              },
              {
                emp_code: "E003",
                profilepic: "/images/AboutUs/keymembers/Shshank Gupta.JPG",
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

const Heirartwo: React.FC = () => {
  const [treeData, setTreeData] = useState<User[]>(manualData);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [targetEmpCode, setTargetEmpCode] = useState<string | null>(
    sessionStorage.getItem("emp_code")
  );
  const userRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleShowMyself = () => {
    const emp_code = sessionStorage.getItem("emp_code");
    if (emp_code) {
      handleLocateClick(emp_code);
    }
  };

  const closeSearchBox = () => {
    setShowSearchBox(false);
    setSearchValue("");
    setSearchResults([]);
  };

  const findInTree = (root: User, searchText: string): User[] => {
    const results: User[] = [];
    const regex = new RegExp(searchText, "i");

    const search = (node: User) => {
      if (regex.test(node.emp_code) || regex.test(node.user_detail.name)) {
        results.push(node);
      }
      if (Array.isArray(node.subordinates)) {
        node.subordinates.forEach(search);
      }
    };

    search(root);
    return results;
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchValue(searchTerm);
    if (searchTerm.length >= 3) {
      const results = findInTree(treeData[0], searchTerm);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const renderSearchResults = () => {
    return searchResults.map((result) => (
      <div className="list-item" key={result.emp_code}>
        <div className="image-wrapper">
          <img
            src={result.profilepic}
            alt={result.user_detail.name}
            className="image"
          />
        </div>
        <div className="description">
          <p className="name">
            {result.user_detail.name}-{result.emp_code}
          </p>
          <p className="position-name">{result.designation_name}</p>
          <p className="area">{result.department_name}</p>
        </div>
        <div className="buttons">
          <button
            className="btn-action btn-search-box"
            onClick={() => handleLocateClick(result.emp_code)}
          >
            Locate
          </button>
        </div>
      </div>
    ));
  };

  const handleLocateClick = (empCode: string) => {
    setExpandedNodes(new Set([empCode]));

    setTimeout(() => {
      const targetNode = userRefs.current[empCode];
      if (targetNode) {
        targetNode.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  const UserNode: React.FC<{ user: User }> = ({ user }) => {
    const [showSubordinates, setShowSubordinates] = useState<boolean>(true);

    useEffect(() => {
      if (expandedNodes.has(user.emp_code)) {
        setShowSubordinates(true);
      }
    }, [user.emp_code, expandedNodes]);

    return (
      <div className="mt-14">
        <div className="main-hierarchy-div">
          <div className="hierarchy-user-box">
            <div className="hierarchy-user-details">
              <span className="hierarchy-user-image">
                <img
                  src={user.profilepic}
                  alt="user-image"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              </span>
              <div className="mt-5">
                <h2>{user.user_detail.name}</h2>
                <h5>{user.emp_code}</h5>
                <p className="font-weight400">
                  {user.department_name}
                  <br />
                  {user.designation_name}
                </p>
              </div>
              <button
                onClick={() => setShowSubordinates(!showSubordinates)}
                className="hierarchy-toggle-button font-weight500"
              >
                {showSubordinates ? "▼" : "▶"}
              </button>
            </div>
          </div>

          {showSubordinates && user.subordinates.length > 0 && (
            <div className="hierarchy-subordinate-box">
              {user.subordinates.map((sub) => (
                <UserNode key={sub.emp_code} user={sub} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div id="full-container" className={isFullScreen ? "full-screen" : ""}>
      <div className="flex-row">
        <button className="btn-action" onClick={handleShowMyself}>
          Show Myself <img src={Employee} alt="Employee" />
        </button>
        <button
          className="btn-action"
          onClick={() => setShowSearchBox(!showSearchBox)}
        >
          Search <img src={SearchBig} alt="Search" />
        </button>
      </div>

      {showSearchBox && (
        <div className="user-search-box open">
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={handleSearch}
          />
          {renderSearchResults()}
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

export default Heirartwo;
