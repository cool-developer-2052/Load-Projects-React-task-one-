function FilterDropdown({ options, onChange, value }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="outline-none py-1 px-2 rounded-lg focus:ring-2 ring-blue-500 transition-all cursor-pointer">
      {options.map(item => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default FilterDropdown;
