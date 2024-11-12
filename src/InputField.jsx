import React from "react";

const InputField = ({ name, type, changehandler }) => {
  return (
    <>
      <label htmlFor={name}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <br />
      <input
        type={type}
        name={name}
        value={formData["name"]}
        onChange={changehandler}
      />
      <br />
      <br />
    </>
  );
};

export default InputField;
