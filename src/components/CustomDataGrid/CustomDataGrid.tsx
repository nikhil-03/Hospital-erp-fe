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
import { DataRow } from "../../Interfaces/interfaces";

interface CustomDataGridProps {
  data: DataRow[];
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
    selector: (row) => row.contactNo,
  },
  // Add more columns as needed
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

function CustomDataGrid({ data }: CustomDataGridProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [doctorDataList] = useState(data);
  const [filteredDoctorList, setFilteredDoctorList] = useState(data);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const filterdata = doctorDataList?.filter((doctor) => {
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
