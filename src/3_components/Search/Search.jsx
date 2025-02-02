import { useEffect, useState } from "react";

export const Search = ({ searchValue, debounce = 500, onChange }) => {
  const [value, setValue] = useState(searchValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log(value);
      onChange(value);
    }, debounce);

    return () => clearTimeout(handler);
  }, [value]);

  return (
    <div className="nes-field">
      <input
        type="text"
        className="nes-input w-full max-w-[360px]"
        placeholder="Search Pokemon"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
