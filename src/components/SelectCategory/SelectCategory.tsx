import { CATEGORY } from "@/constants";
import Select from "../UI/Select/Select";
import { ChangeEvent } from "react";

const options = CATEGORY.map((option) => ({
  value: option.id,
  label: option.title,
}));

type Props = {
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  selectedValue?: string;
};

const SelectCategory = ({ handleSelectChange, selectedValue }: Props) => {
  return (
    <div className="my-2">
      <h1 className="mb-2">Select Category</h1>
      <Select
        value={selectedValue}
        name="category"
        options={options}
        onChange={handleSelectChange}
      />
    </div>
  );
};

export default SelectCategory;
