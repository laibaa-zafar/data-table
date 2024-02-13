import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "./App.css";

function App() {
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={`./Images/ellipse.png`}
            alt={row.name}
            style={{ width: "30px", marginRight: "10px" }}
          />
          {row.name}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Product-Name",
      selector: (row) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={`./Images/ellipse.png`}
            alt={row.email}
            style={{ width: "30px", marginRight: "10px" }}
          />
          {row.email}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <div>
          <button
            className="status-btn"
            style={{
              backgroundColor: getStatusColor(row?.status).backgroundColor,
              color: getStatusColor(row?.status).color,
            }}
          >
            {row?.status}
          </button>
        </div>
      ),
      sortable: true,
    },
  ];


  useEffect(() => {
    const getRandomStatus = () => {
      const statuses = ["Pending", "Overdue", "Paid"];
      const randomIndex = Math.floor(Math.random() * statuses.length);
      return statuses[randomIndex];
    };
    const updatedData = data.map((row) => {
      return { ...row, status: getRandomStatus() };
    });

    setRecords(updatedData);
  }, []);
  const data = [
    {
      id: 1,
      name: "laiba",
      email: "Lorem ipsum dolor",
      gender: "female",
      city: "Islamabad",
      age: "25",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "Lorem ipsum dolor",
      gender: "Female",
      city: "New York City",
      age: "32",
    },
    {
      id: 3,
      name: "Michael Smith",
      email: "Lorem ipsum dolor",
      gender: "Male",
      city: "Los Angeles",
      age: "31",
    },
    {
      id: 4,
      name: "Emily Chen",
      email: "Lorem ipsum dolor",
      gender: "Female",
      city: "Toronto",
      age: "21",
    },
    {
      id: 5,
      name: "David Rodriguez",
      email: "Lorem ipsum dolor",
      gender: "Male",
      city: "London",
      age: "32",
    },
    {
      id: 6,
      name: "Jessica Nguyen",
      email: "Lorem ipsum dolor",
      gender: "Female",
      city: "Sydney",
      age: "42",
    },
    {
      id: 7,
      name: "Alexander Kim",
      email: "Lorem ipsum dolor ",
      gender: "Male",
      city: "Seoul",
      age: "52",
    },
    {
      id: 8,
      name: "Sophia Martinez",
      email: "Lorem ipsum dolor",
      gender: "Female",
      city: "Mexico City",
      age: "92",
    },
    {
      id: 9,
      name: "Mohammed Khan",
      email: "Lorem ipsum dolor",
      gender: "Male",
      city: "Dubai",
      age: "92",
    },
    {
      id: 10,
      name: "Ava Wilson",
      email: "Lorem ipsum dolor",
      gender: "Female",
      city: "Paris",
      age: "90",
    },
    {
      id: 11,
      name: "Liam Brown",
      email: "Lorem ipsum dolor",
      gender: "Male",
      city: "Berlin",
      age: "25",
    },
    {
      id: 12,
      name: "Isabella Lee",
      email: "Lorem ipsum dolor",
      gender: "Female",
      city: "Tokyo",
      age: "43",
    },
    {
      id: 13,
      name: "Ethan Garcia",
      email: "Lorem ipsum dolor",
      gender: "Male",
      city: "Madrid",
      age: "09",
    },
    {
      id: 14,
      name: "Olivia Anderson",
      email: "Lorem ipsum dolor",
      gender: "Female",
      city: "Rome",
      age: "12",
    },
    {
      id: 15,
      name: "Noah Thompson",
      email: "Lorem ipsum dolor",
      gender: "Male",
      city: "Moscow",
      age: "12",
    },
    {
      id: 16,
      name: "Emma Hernandez",
      email: "Lorem ipsum dolor",
      gender: "Female",
      city: "Rio de Janeiro",
      age: "13",
    },
    {
      id: 17,
      name: "William Martinez",
      email: "Lorem ipsum dolor",
      gender: "Male",
      city: "Buenos Aires",
      age: "19",
    },
    {
      id: 18,
      name: "Amelia Kim",
      email: "Lorem ipsum dolor",
      gender: "Female",
      city: "Seoul",
      age: "32",
    },
    {
      id: 19,
      name: "James Johnson",
      email: "Lorem ipsum dolor",
      gender: "Male",
      city: "New York City",
      age: "22",
    },
    {
      id: 20,
      name: "Sophia Brown",
      email: "Lorem ipsum dolor",
      gender: "Female",
      city: "Los Angeles",
      age: "52",
    },
    {
      id: 21,
      name: "Oliver Taylor",
      email: "Lorem ipsum dolor sit amet",
      gender: "Male",
      city: "Toronto",
      age: "12",
    },
    {
      id: 22,
      name: "Mia Martinez",
      email: "Lorem ipsum dolor",
      gender: "Female",
      city: "London",
      age: "22",
    },
    {
      id: 23,
      name: "Benjamin Wilson",
      email: "Lorem ipsum dolor",
      gender: "Male",
      city: "Sydney",
      age: "32",
    },
    {
      id: 24,
      name: "Charlotte Lee",
      email: "Lorem ipsum dolor",
      gender: "Female",
      city: "Seoul",
      age: "22",
    },
    {
      id: 25,
      name: "Lucas Nguyen",
      email: "Lorem ipsum dolor",
      gender: "Male",
      city: "Mexico City",
      age: "15",
    },
    {
      id: 26,
      name: "Lucas Nguyen",
      email: "Lorem ipsum dolor",
      gender: "Male",
      city: "Mexico City",
      age: "16",
    },
    {
      id: 27,
      name: "Lucas Nguyen",
      email: "Lorem ipsum dolor",
      gender: "Male",
      city: "Mexico City",
      age: "32",
    },
    {
      id: 28,
      name: "Lucas Nguyen",
      email: "Lorem ipsum dolor",
      gender: "Male",
      city: "Mexico City",
      age: "22",
    },
    {
      id: 29,
      name: "Lucas Nguyen",
      email: "Lorem ipsum dolor",
      gender: "Male",
      city: "Mexico City",
      age: "18",
    },
    {
      id: 30,
      name: "Lucas Nguyen",
      email: "Lorem ipsum dolor",
      gender: "Male",
      city: "Mexico City",
    },
  ];
  const itemsPerPage = 10; 
  const [currentPage, setCurrentPage] = useState(1);
  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter((row) =>
      row.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRecords(newData);
  }

  function getStatusColor(status) {
    switch (status?.toLowerCase()) {
      case "paid":
        return { backgroundColor: "#D6EEDD", color: "#00976A" }; // Dark green 
      case "pending":
        return { backgroundColor: "#EFE9D4", color: "#978800" }; // Brown 
      case "overdue":
        return { backgroundColor: "#ECD7D7", color: "#970000" }; // Dark red 
      default:
        return { backgroundColor: "", color: "#000" }; 
    }
  }

  const totalPages = Math.ceil(records.length / itemsPerPage);

  const paginatedData = records.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container-mt-5">
      <div className="table-heading">
        <h1> Search Transactions</h1>
      </div>
      <div className="text-end">
        <div className="search-container">
          <input
            type="text"
            onChange={handleFilter}
            placeholder="Search"
            className="search-input"
          />
        </div>
      </div>
      
      <DataTable
        columns={columns}
        data={paginatedData}
        fixedHeader
        customStyles={{
          table: {
            
          },
        }}
      />
      <div className="pagination-container">
        <p>
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, records.length)} of{" "}
          {records.length} entries
        </p>
        <div className="pagination-controls">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
