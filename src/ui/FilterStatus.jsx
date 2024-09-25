function FilterStatus({ options, onChange, status }) {
  return (
    <div className="flex gap-x-2 items-center">
      وضعیت
      <div className="flex gap-x-2 bg-white p-1 rounded-lg">
        {options.map(({ label, value }) => {
          const isActive = status === value;
          return (
            <button
              key={value}
              onClick={() => onChange(value)}
              className={
                isActive
                  ? "w-12 py-1 bg-blue-500 text-white transition-all duration-300 rounded-md"
                  : "w-12 py-1"
              }>
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterStatus;
