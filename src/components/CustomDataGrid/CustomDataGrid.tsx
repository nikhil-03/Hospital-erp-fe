import "./CustomerDataGrid.css";
import DataTable, {
  ExpanderComponentProps,
  TableColumn,
} from "react-data-table-component";
import CustomDoctorCards from "../CustomCards/CustomDoctorCards";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import _ from "lodash";
import CustomDoctorDescription from "../CustomCards/CustomDoctorDescription";
interface DataRow {
  name: string;
  age: number;
  specialization: string;
  experience: number; // or any other relevant fields
  contact: string;
  availability: string[]; // Array of days
  timings: string; // e.g., "9 AM - 5 PM"
  description: string; // Additional information
  email: string; // Email address
}

const columns: TableColumn<DataRow>[] = [
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Age",
    selector: (row) => row.age,
  },
  {
    name: "Specialization",
    selector: (row) => row.specialization,
  },
  {
    name: "Experience (years)",
    selector: (row) => row.experience,
  },
  {
    name: "Contact",
    selector: (row) => row.contact,
  },
  // Add more columns as needed
];

const data: DataRow[] = [
  {
    name: "Dr. John Doe",
    age: 45,
    specialization: "Cardiology",
    experience: 20,
    contact: "123-456-7890",
    availability: ["Monday", "Wednesday", "Friday"], // Availability days
    timings: "9 AM - 5 PM",
    description: "Experienced cardiologist with a focus on heart diseases.",
    email: "johndoe@example.com",
  },
  {
    name: "Dr. Jane Smith",
    age: 38,
    specialization: "Neurology",
    experience: 15,
    contact: "234-567-8901",
    availability: ["Tuesday", "Thursday"],
    timings: "10 AM - 4 PM",
    description: "Specializes in brain disorders and neurological conditions.",
    email: "janesmith@example.com",
  },
  {
    name: "Dr. Emily Johnson",
    age: 50,
    specialization: "Orthopedics",
    experience: 25,
    contact: "345-678-9012",
    availability: ["Monday", "Tuesday", "Thursday"],
    timings: "8 AM - 3 PM",
    description: "Expert in bone and joint surgeries.",
    email: "emilyjohnson@example.com",
  },
  {
    name: "Dr. Michael Brown",
    age: 42,
    specialization: "Pediatrics",
    experience: 18,
    contact: "456-789-0123",
    availability: ["Wednesday", "Friday"],
    timings: "9 AM - 6 PM",
    description: "Dedicated pediatrician with a passion for child health.",
    email: "michaelbrown@example.com",
  },
  {
    name: "Dr. Sarah Wilson",
    age: 36,
    specialization: "Dermatology",
    experience: 12,
    contact: "567-890-1234",
    availability: ["Monday", "Thursday"],
    timings: "11 AM - 5 PM",
    description: "Focused on skin disorders and cosmetic dermatology.",
    email: "sarahwilson@example.com",
  },
];

const ExpandedComponent: React.FC<ExpanderComponentProps<DataRow>> = ({
  data,
}) => {
  console.log("Expanded data:", data); // Log the data to debug
  return (
    <div className="doctor-description-container">
      <CustomDoctorCards props={data} />
      <CustomDoctorDescription props={data} />
    </div>
  );
};

function CustomDataGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [doctorDataList] = useState(data);
  const [filteredDoctorList, setFilteredDoctorList] = useState(data);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const filterdata = doctorDataList.filter((doctor) => {
      return _.includes(doctor.name.toLowerCase(), searchTerm.toLowerCase());
    });
    setFilteredDoctorList(filterdata);
  }, [searchTerm]);

  return (
    <div>
      <div className="search-container">
        <TextField
          onChange={handleSearchChange}
          fullWidth
          label="Search"
          id="fullWidth"
        />
      </div>
      <DataTable
        columns={columns}
        data={filteredDoctorList}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
      />
    </div>
  );
}

export default CustomDataGrid;
