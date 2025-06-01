const customStyles =
{
  control: (provided: any) => ({
    ...provided,
    minHeight: "30px", // Default height
    fontSize: "12px", // Default font size for selected value
  }),
  placeholder: (provided: any) => ({
    ...provided,
    fontSize: "14px", // Font size for placeholder
  }),
  singleValue: (provided: any) => ({
    ...provided,
    fontSize: "14px", // Font size for selected value
  }),
  input: (provided: any) => ({
    ...provided,
    fontSize: "14px", // Font size for input text
  }),
  option: (provided: any) => ({
    ...provided,
    fontSize: "14px", // Font size for dropdown options
  }),
  menu: (provided: any) => ({
    ...provided,
    fontSize: "14px", // Font size for menu items
  }),
};
export default customStyles;