import "./CustomDoctorCards.css";

interface DoctorProps {
  name: string;
  age: number;
  specialization: string;
  experience: number;
  contact: string;
  availability: string[]; // Array of days
  timings: string; // e.g., "9 AM - 5 PM"
  description: string; // Additional information
  email: string; // Email address
}
interface CustomDoctorDescriptionProps {
  props: DoctorProps;
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
            <div className="doctor-des-row">Contact : {props.contact}</div>
            <div className="doctor-des-row">
              Availability : {props.availability}
            </div>
            <div className="doctor-des-row">Timings : {props.timings}</div>
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
