import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handelChange(e) {
    setName(e.target.value);
  }

  function handelSubmit(e) {
    e.preventDefault();
    props.handelSubmit(name);
    setName("");
  }

  return (
    <form className="my-5" onSubmit={handelSubmit}>
      <label htmlFor="input-form">What needs to be done</label>
      <input
        type="text"
        id="input-form"
        className="border w-full h-[50px] border-current my-2 p-2"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handelChange}
      />
      <button type="submit" className="bg-black text-white w-full h-[40px]">
        Add
      </button>
    </form>
  );
}

export default Form;
