import { useState } from "react";
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
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
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
  ];

  const data = [
    {
      id: 1,
      name: "laiba",
      email: "laibazafar2699@gmail.com",
      gender: "female",
      city: "Islamabad",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      gender: "Female",
      city: "New York City",
    },
    {
      id: 3,
      name: "Michael Smith",
      email: "michael.smith@example.com",
      gender: "Male",
      city: "Los Angeles",
    },
    {
      id: 4,
      name: "Emily Chen",
      email: "emily.chen@example.com",
      gender: "Female",
      city: "Toronto",
    },
    {
      id: 5,
      name: "David Rodriguez",
      email: "david.rodriguez@example.com",
      gender: "Male",
      city: "London",
    },
    {
      id: 6,
      name: "Jessica Nguyen",
      email: "jessica.nguyen@example.com",
      gender: "Female",
      city: "Sydney",
    },
    {
      id: 7,
      name: "Alexander Kim",
      email: "alexander.kim@example.com",
      gender: "Male",
      city: "Seoul",
    },
    {
      id: 8,
      name: "Sophia Martinez",
      email: "sophia.martinez@example.com",
      gender: "Female",
      city: "Mexico City",
    },
    {
      id: 9,
      name: "Mohammed Khan",
      email: "mohammed.khan@example.com",
      gender: "Male",
      city: "Dubai",
    },
    {
      id: 10,
      name: "Ava Wilson",
      email: "ava.wilson@example.com",
      gender: "Female",
      city: "Paris",
    },
    {
      id: 11,
      name: "Liam Brown",
      email: "liam.brown@example.com",
      gender: "Male",
      city: "Berlin",
    },
    {
      id: 12,
      name: "Isabella Lee",
      email: "isabella.lee@example.com",
      gender: "Female",
      city: "Tokyo",
    },
    {
      id: 13,
      name: "Ethan Garcia",
      email: "ethan.garcia@example.com",
      gender: "Male",
      city: "Madrid",
    },
    {
      id: 14,
      name: "Olivia Anderson",
      email: "olivia.anderson@example.com",
      gender: "Female",
      city: "Rome",
    },
    {
      id: 15,
      name: "Noah Thompson",
      email: "noah.thompson@example.com",
      gender: "Male",
      city: "Moscow",
    },
    {
      id: 16,
      name: "Emma Hernandez",
      email: "emma.hernandez@example.com",
      gender: "Female",
      city: "Rio de Janeiro",
    },
    {
      id: 17,
      name: "William Martinez",
      email: "william.martinez@example.com",
      gender: "Male",
      city: "Buenos Aires",
    },
    {
      id: 18,
      name: "Amelia Kim",
      email: "amelia.kim@example.com",
      gender: "Female",
      city: "Seoul",
    },
    {
      id: 19,
      name: "James Johnson",
      email: "james.johnson@example.com",
      gender: "Male",
      city: "New York City",
    },
    {
      id: 20,
      name: "Sophia Brown",
      email: "sophia.brown@example.com",
      gender: "Female",
      city: "Los Angeles",
    },
    {
      id: 21,
      name: "Oliver Taylor",
      email: "oliver.taylor@example.com",
      gender: "Male",
      city: "Toronto",
    },
    {
      id: 22,
      name: "Mia Martinez",
      email: "mia.martinez@example.com",
      gender: "Female",
      city: "London",
    },
    {
      id: 23,
      name: "Benjamin Wilson",
      email: "benjamin.wilson@example.com",
      gender: "Male",
      city: "Sydney",
    },
    {
      id: 24,
      name: "Charlotte Lee",
      email: "charlotte.lee@example.com",
      gender: "Female",
      city: "Seoul",
    },
    {
      id: 25,
      name: "Lucas Nguyen",
      email: "lucas.nguyen@example.com",
      gender: "Male",
      city: "Mexico City",
    },
    {
      id: 26,
      name: "Lucas Nguyen",
      email: "lucas.nguyen@example.com",
      gender: "Male",
      city: "Mexico City",
    },
    {
      id: 27,
      name: "Lucas Nguyen",
      email: "lucas.nguyen@example.com",
      gender: "Male",
      city: "Mexico City",
    },
    {
      id: 28,
      name: "Lucas Nguyen",
      email: "lucas.nguyen@example.com",
      gender: "Male",
      city: "Mexico City",
    },
    {
      id: 29,
      name: "Lucas Nguyen",
      email: "lucas.nguyen@example.com",
      gender: "Male",
      city: "Mexico City",
    },
    {
      id: 30,
      name: "Lucas Nguyen",
      email: "lucas.nguyen@example.com",
      gender: "Male",
      city: "Mexico City",
    },
  ];
  const [records, setRecords] = useState(data);
  function handleFilter(events) {
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(events.target.value.toLowerCase());
    });
    setRecords(newData);
  }

  return (
    <div className="container-mt-5">
      <div className="table-heading">
        <h1> React table using Pagination</h1>
      </div>
      <div className="text-end">
        {" "}
        <input type="text" onChange={handleFilter} placeholder="Search"></input>
      </div>
      <DataTable
        columns = {columns}
        data = {records}
        fixedHeader
        pagination
      ></DataTable>
    </div>
  );
}

export default App;
