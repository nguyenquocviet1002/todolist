import React from "react";

function FilterButton() {
  return (
    <button
      type="button"
      className="border border-current py-2 px-10 capitalize"
      aria-pressed="true"
    >
      <span>all</span>
    </button>
  );
}

export default FilterButton;
