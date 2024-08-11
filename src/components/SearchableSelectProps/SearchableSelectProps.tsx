import React from "react";
import Select, { StylesConfig } from "react-select";

interface OptionType {
  value: string;
  label: string;
}

interface SearchableFilterSelectProps {
  options: any[];
  labelKey: string;
  valueKey: string;
  value: string | null;
  onChange: (selectedOption: OptionType | null) => void;
}

const customStyles: StylesConfig<OptionType, false> = {
  control: (provided, state) => ({
    ...provided,
    // width: "80%",
    // marginBottom: "25px",
    padding: "0 30px 15px",
    fontSize: "16px",
    border: "none",
    // borderBottom: "1px solid #141e75",
    outline: "none",
    backgroundColor: "#0f044c",
    color: "#fff",
    boxShadow: state.isFocused ? "0 0 0 1px #141e75" : "none",
    "&:hover": {
      borderBottom: "1px solid #141e75",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#141e75"
      : state.isFocused
      ? "#0f044c"
      : "#0f044c",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#141e75",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#0f044c",
    color: "#fff",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#fff",
    "&:hover": {
      color: "#fff",
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: "#fff",
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: "#fff",
    "&:hover": {
      color: "#fff",
    },
  }),
};

const SearchableFilterSelect: React.FC<SearchableFilterSelectProps> = ({
  options,
  labelKey,
  valueKey,
  onChange,
  value,
}) => {
  const getLabelName = (v: string) => {
    switch (v) {
      case "name":
        return "Name";
      case "mobileNo":
        return "Mobile No.";
      case "adharNo":
        return "Aadhar No.";
      default:
        return v;
    }
  };
  const mappedOptions: OptionType[] = options.map((option) => ({
    value: option[valueKey],
    label: option[labelKey],
  }));

  return (
    <Select
      options={mappedOptions}
      onChange={onChange}
      isClearable
      //   value={value}
      //   placeholder={labelKey === "name" ? "Full Name" : "Search"}

      placeholder={getLabelName(labelKey)}
      styles={customStyles}
      className="custom-select"
    />
  );
};

export default SearchableFilterSelect;
