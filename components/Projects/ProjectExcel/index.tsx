"use client"

import React, { useEffect, useState, useCallback } from "react"
import * as XLSX from "xlsx"
import { ChevronLeft, ChevronRight, AlertCircle } from "lucide-react"
import { useSearchParams } from "next/navigation"

// Define types for our data
type ServiceType =
  | "All"
  | "Pre-Feasibility Studies"
  | "Pre & Post Tender Engineering Services"
  | "Proof & Safety Consultant"
  | "Detailed Project Report (DPR)"
  | "Project Management Consultancy (PMC)"
  | "Authority Engineer (AE)"
  | "Independent Engineer (IE)"
  | "Financial Modeling"
  | "Due Diligence"

interface Project {
  [key: string]: any
  Services?: string
}

type ProjectType = "DPR" | "Ongoing"

const EnhancedProjectSectors = () => {
  // Get URL search parameters
  const searchParams = useSearchParams()

  // State for Excel data
  const [allProjects, setAllProjects] = useState<Project[]>([])
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [headers, setHeaders] = useState<string[]>([])

  // UI state
  const [activeProjectType, setActiveProjectType] = useState<ProjectType>("DPR")
  const [activeSector, setActiveSector] = useState<ServiceType>("All")
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [error, setError] = useState<string | null>(null)

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(10)
  const [totalPages, setTotalPages] = useState<number>(1)

  // Define sectors with their display names and filter values
  const sectors = React.useMemo(
    () => [
      { id: "All", name: "All Projects", filter: "" },
      { id: "Pre-Feasibility Studies", name: "Pre-Feasibility Studies", filter: "Pre-Feasibility Studies" },
      {
        id: "Pre & Post Tender Engineering Services",
        name: "Pre & Post Tender Engineering Services",
        filter: "Pre & Post Tender Engineering Services",
      },
      { id: "Proof & Safety Consultant", name: "Proof & Safety Consultant", filter: "Proof & Safety Consultant" },
      {
        id: "Detailed Project Report (DPR)",
        name: "Detailed Project Report (DPR)",
        filter: "Detailed Project Report (DPR)",
      },
      {
        id: "Project Management Consultancy (PMC)",
        name: "Project Management Consultancy (PMC)",
        filter: "Project Management Consultancy (PMC)",
      },
      { id: "Authority Engineer (AE)", name: "Authority Engineer (AE)", filter: "Authority Engineer (AE)" },
      { id: "Independent Engineer (IE)", name: "Independent Engineer (IE)", filter: "Independent Engineer (IE)" },
      { id: "Financial Modeling", name: "Financial Modeling", filter: "Financial Modeling" },
      { id: "Due Diligence", name: "Due Diligence", filter: "Due Diligence" },
    ],
    [],
  )

  // Filter projects by sector
  const filterProjectsBySector = useCallback(
    (projects: Project[], sector: ServiceType) => {
      if (sector === "All") {
        setFilteredProjects(projects)
      } else {
        const sectorFilter = sectors.find((s) => s.id === sector)?.filter || ""
        const filtered = projects.filter(
          (project) => project.Services && project.Services.toLowerCase().includes(sectorFilter.toLowerCase()),
        )
        setFilteredProjects(filtered)
      }
    },
    [sectors],
  )

  // Function to fetch and process Excel data
  const fetchExcelFile = useCallback(
    async (projectType: ProjectType) => {
      setIsLoading(true)
      setError(null)
      try {
        const filePath = `/Excel/${projectType === "DPR" ? "1.xlsx" : "Ongoing_Project_List_CIPL.xlsx"}`

        const response = await fetch(filePath)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const arrayBuffer = await response.arrayBuffer()
        const data = new Uint8Array(arrayBuffer)
        const workbook = XLSX.read(data, { type: "array" })

        if (!workbook.SheetNames.length) {
          throw new Error("No sheets found in the Excel file")
        }

        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        if (!worksheet["!ref"]) {
          throw new Error("The sheet is empty")
        }

        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
        if (!jsonData.length) {
          throw new Error("No data found in the Excel file")
        }

        // Extract headers (first row)
        const extractedHeaders = jsonData[0] as string[]
        setHeaders(extractedHeaders)

        // Convert data to array of objects
        const projects = jsonData.slice(1).map((row: any) => {
          const project: Project = {}
          extractedHeaders.forEach((header, index) => {
            project[header] = row[index]
          })
          return project
        })

        setAllProjects(projects)
        filterProjectsBySector(projects, activeSector)
      } catch (error) {
        console.error("Error fetching Excel file:", error)
        setError(`Error loading projects: ${error instanceof Error ? error.message : String(error)}`)
        setAllProjects([])
        setFilteredProjects([])
        setDisplayedProjects([])
      } finally {
        setIsLoading(false)
      }
    },
    [activeSector, filterProjectsBySector],
  )

  // Handle search
  const handleSearch = useCallback(
    (term: string) => {
      setSearchTerm(term)
      setCurrentPage(1) // Reset to first page on new search

      if (!term.trim()) {
        // If search is cleared, show all filtered projects
        updateDisplayedProjects(filteredProjects, 1)
        return
      }

      const lowerTerm = term.toLowerCase()
      const searchResults = filteredProjects.filter((project) => {
        // Search across all fields
        return Object.values(project).some((value) => value && String(value).toLowerCase().includes(lowerTerm))
      })

      updateDisplayedProjects(searchResults, 1)
    },
    [filteredProjects],
  )

  // Update displayed projects based on pagination
  const updateDisplayedProjects = useCallback(
    (projects: Project[], page: number) => {
      const totalItems = projects.length
      const calculatedTotalPages = Math.ceil(totalItems / itemsPerPage)
      setTotalPages(calculatedTotalPages || 1)

      const startIndex = (page - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      setDisplayedProjects(projects.slice(startIndex, endIndex))
    },
    [itemsPerPage],
  )

  // Handle sector button click
  const handleSectorClick = useCallback(
    (sector: ServiceType) => {
      setActiveSector(sector)
      setCurrentPage(1) // Reset to first page when changing sectors
      setSearchTerm("") // Clear search when changing sectors
      filterProjectsBySector(allProjects, sector)

      // Update URL with the selected sector (without page reload)
      const url = new URL(window.location.href)
      if (sector === "All") {
        url.searchParams.delete("sector")
      } else {
        url.searchParams.set("sector", sector)
      }
      window.history.pushState({}, "", url)
    },
    [allProjects, filterProjectsBySector],
  )

  // Handle project type button click
  const handleProjectTypeClick = useCallback(
    (type: ProjectType) => {
      setActiveProjectType(type)
      setCurrentPage(1) // Reset to first page
      setSearchTerm("") // Clear search
      fetchExcelFile(type)
    },
    [fetchExcelFile],
  )

  // Handle page change
  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page)
      updateDisplayedProjects(filteredProjects, page)
    },
    [filteredProjects, updateDisplayedProjects],
  )

  // Export to Excel
  const exportToExcel = useCallback(() => {
    // Create a new workbook
    const wb = XLSX.utils.book_new()

    // Convert filtered projects to worksheet
    const ws = XLSX.utils.json_to_sheet(
      filteredProjects.map((project) => {
        const newObj: { [key: string]: any } = {}
        headers.forEach((header) => {
          newObj[header] = project[header] || ""
        })
        return newObj
      }),
    )

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, "Projects")

    // Generate filename
    const fileName = `${activeProjectType}_${activeSector !== "All" ? activeSector + "_" : ""}Projects.xlsx`

    // Save file
    XLSX.writeFile(wb, fileName)
  }, [activeProjectType, activeSector, filteredProjects, headers])

  // Check URL parameters on component mount and when they change
  useEffect(() => {
    const sectorParam = searchParams.get("sector")
    if (sectorParam) {
      const matchedSector = sectors.find(
        (s) => s.id.toLowerCase() === sectorParam.toLowerCase() || s.filter.toLowerCase() === sectorParam.toLowerCase(),
      )

      if (matchedSector) {
        setActiveSector(matchedSector.id as ServiceType)
      }
    }
  }, [searchParams, sectors])

  // Load data when component mounts or when project type changes
  useEffect(() => {
    fetchExcelFile(activeProjectType)
  }, [activeProjectType, fetchExcelFile])

  // Update displayed projects when filtered projects or pagination changes
  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm)
    } else {
      updateDisplayedProjects(filteredProjects, currentPage)
    }
  }, [filteredProjects, currentPage, searchTerm, handleSearch, updateDisplayedProjects])

  // Generate pagination items
  const renderPaginationItems = useCallback(() => {
    const items = []
    const maxVisiblePages = 5

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    // Previous button
    items.push(
      <button
        key="prev"
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="flex items-center justify-center h-10 w-10 rounded-md border border-border bg-white text-Black hover:bg-primary hover:text-white disabled:opacity-50"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>,
    )

    // First page
    if (startPage > 1) {
      items.push(
        <button
          key="1"
          onClick={() => handlePageChange(1)}
          className={`h-10 w-10 rounded-md border ${
            currentPage === 1
            ? "bg-primary text-white"
            : "border-border bg-white text-gray-900 hover:bg-primary/10 hover:bg-gray-700"
          }`}
        >
          1
        </button>,
      )

      // Ellipsis if needed
      if (startPage > 2) {
        items.push(
          <span key="ellipsis1" className="flex items-center justify-center h-10 w-10">
            ...
          </span>,
        )
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      if (i === totalPages) continue // Skip last page as it's handled separately

      items.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`h-10 w-10 rounded-md border ${
            currentPage === i
               ? "bg-primary text-white"
              : "border-border bg-white text-gray-900 hover:bg-primary/10 hover:bg-gray-700"
          }`}
        >
          {i}
        </button>,
      )
    }

    // Last page
    if (endPage < totalPages) {
      // Ellipsis if needed
      if (endPage < totalPages - 1) {
        items.push(
          <span key="ellipsis2" className="flex items-center justify-center h-10 w-10 ">
            ...
          </span>,
        )
      }

      items.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`h-10 w-10 rounded-md border ${
            currentPage === totalPages
              ? "bg-primary text-white"
              : "border-border bg-white text-gray-900 hover:bg-primary/10"
          }`}
        >
          {totalPages}
        </button>,
      )
    }

    // Next button
    items.push(
      <button
        key="next"
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center h-10 w-10 rounded-md border border-border bg-white  text-Black hover:bg-primary hover:text-white disabled:opacity-50"
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </button>,
    )

    return items
  }, [currentPage, totalPages, handlePageChange])

  return (
    <div className="px-4 md:px-16 max-w-[88vw] mx-auto mb-10 py-[40px]">
      {/* Sector Filter Buttons */}
      <div className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {sectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => handleSectorClick(sector.id as ServiceType)}
              className={`px-4 py-2 rounded-md text-sm transition duration-300 ease-in-out ${
                activeSector === sector.id
                  ? "bg-primary text-white "
                  : "bg-card hover:bg-primary/10 border border-border"
              }`}
            >
              {sector.name}
            </button>
          ))}
        </div>
      </div>

      {/* Table Title */}
      <h2 className="text-3xl md:text-4xl font-bold my-8 text-center">
        {`${sectors.find((s) => s.id === activeSector)?.name}`}
      </h2>

      {/* Error Message */}
      {error && (
        <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          <p>{error}</p>
        </div>
      )}

      {/* Loading State */}
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-muted/30 rounded-lg">
          <p className="text-xl text-muted-foreground">No projects found for this sector.</p>
        </div>
      ) : (
        <>
          {/* Project Table */}
          <div className="overflow-x-auto rounded-lg border border-border shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary">
                  {headers.map((header, index) => (
                    <th
                      key={index}
                      className="border-b border-border px-4 py-3 text-sm text-white font-medium text-muted-foreground"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {displayedProjects.length > 0 ? (
                  displayedProjects.map((project, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0
                        ? "bg-background text-gray-900"
                        : "bg-primary/10"}>
                      {headers.map((header, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`border-b border-border px-4 py-3 text-sm ${
                            !project[header] ? "text-center" : ""
                          }`}
                        >
                          {project[header] || "—"}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={headers.length} className="px-4 py-8 text-center text-muted-foreground">
                      No matching projects found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {filteredProjects.length > 0 && (
            <div className="mt-6 flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                Showing {displayedProjects.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} to{" "}
                {Math.min(currentPage * itemsPerPage, filteredProjects.length)} of {filteredProjects.length} projects
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value))
                    setCurrentPage(1) // Reset to first page when changing items per page
                  }}
                  className="h-10 rounded-md border border-border bg-white text-gray-900 hover:bg-primary/10 px-3 text-sm"
                >
                  <option value={10}>10 per page</option>
                  <option value={25}>25 per page</option>
                  <option value={50}>50 per page</option>
                  <option value={100}>100 per page</option>
                </select>

                <div className="flex items-center gap-1">{renderPaginationItems()}</div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default EnhancedProjectSectors

