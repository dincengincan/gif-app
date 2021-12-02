import { ChangeEvent, FC, useState } from "react";

interface Props {
  onChange: (value: string) => void;
  value: string;
}
const SearchInput: FC<Props> = ({ onChange, value }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};

export default SearchInput;
