import React from "react";

function InputField({
  isTextarea,
  type,
  labelName,
  place_Name,
  data,
  setData,
}) {
  return (
    <div className="">
      <label className="block mb-1">{labelName}</label>
      {isTextarea ? (
        <textarea
          rows={5}
          type={type}
          placeholder={place_Name}
          className="w-full px-2 py-2 rounded text-black"
          value={data}
          onChange={(e) => {
            return setData(e.target.value);
          }}
        />
      ) : (
        <input
          type={type}
          placeholder={place_Name}
          className="w-full px-2 py-2 rounded text-black"
          value={data}
          onChange={(e) => {
            return setData(e.target.value);
          }}
        />
      )}
    </div>
  );
}

export default InputField;
