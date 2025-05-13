interface Props {
  value: string | undefined;
  onFilter: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox: React.FC<Props> = ({ value, onFilter }) => {
  return (
    <div>
      <p>Find contact by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
