import { useEffect, useState } from "react";

type Option = {
  value: string;
  label: string;
};

interface Props<T> {
  errorText?: string | null;
  options: T[];
  name: string;
  value?: Option["value"];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = <P extends Option>({
  options,
  onChange,
  errorText,
  name,
  value,
}: Props<P>) => {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    if (value) setSelectedValue(value);
  }, [value]);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange(event);
  };

  return (
    <>
      <select
        name={name}
        className="select select-bordered w-full max-w-xs "
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option disabled value="">
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label className="label">
        <span className="label-text text-error font-bold">{errorText}</span>
      </label>
    </>
  );
};

export default Select;
