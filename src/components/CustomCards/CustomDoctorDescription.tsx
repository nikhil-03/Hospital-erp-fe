import { DataRow } from "../../Interfaces/interfaces";
import "./CustomDoctorCards.css";

interface CustomDoctorDescriptionProps {
  props: DataRow;
}
const CustomDoctorDescription: React.FC<CustomDoctorDescriptionProps> = ({
  props,
}) => {
  console.log("props-inside", props);

  return (
    <section className="container-doctor-description">
      <div className="card-doctor-description">
        <div className="content-doctor-description">
          <h3>Other Informations</h3>

          <div>
            <div className="doctor-des-row">Name : {props.name}</div>
            <div className="doctor-des-row">Age : {props.age}</div>
            <div className="doctor-des-row">
              Specialisation : {props.specialization}
            </div>
            <div className="doctor-des-row">
              Experience : {props.experience}
            </div>
            <div className="doctor-des-row">Contact : {props.contactNo}</div>
            <div className="doctor-des-row">
              {/* Availability : {props.availability} */}
            </div>
            {/* <div className="doctor-des-row">Timings : {props.timings}</div> */}
            <div className="doctor-des-row">Email : {props.email}</div>
            <div className="doctor-des-row">
              Description : {props.description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDoctorDescription;
