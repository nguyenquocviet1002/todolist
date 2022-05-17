import React from "react";

function FilterButton(props) {
  return (
    <button
      type="button"
      className="max-w-full w-full border border-current py-2 capitalize"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span>{props.name}</span>
    </button>
  );
}

export default FilterButton;
