import { ChangeEvent, FC } from "react";
interface Props {
  value: string;
  onChange: (value: string) => void;
}
const Select: FC<Props> = ({ value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    onChange(e.target.value);
  };

  return (
    <select
      placeholder="choose"
      value={value}
      onChange={handleChange}
      name="categories"
    >
      <option value="" disabled>
        Select Category
      </option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="mouse">Mouse</option>
    </select>
  );
};

export default Select;
