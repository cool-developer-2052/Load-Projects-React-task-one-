import { projects } from "../data/projects";
import FilterDropdown from "../ui/FilterDropdown";
import FilterStatus from "../ui/FilterStatus";

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

const sortOptions = [
  {
    label: "تاریخ ایجاد (جدید ترین)",
    value: "created_desc",
  },
  {
    label: "تاریخ ایجاد (قدیمی ترین)",
    value: "created_asc",
  },
  {
    label: "ددلاین (صعودی)",
    value: "deadline_asc",
  },
  {
    label: "ددلاین (نزولی)",
    value: "deadline_desc",
  },
  {
    label: "قیمت (صعودی)",
    value: "budget_asc",
  },
  {
    label: "قیمت (نزولی)",
    value: "budget_desc",
  },
];

const categories = projects.map(project => {
  return {
    label: project.category.title,
    value: project.category.englishTitle,
  };
});

const uniqueCategories = categories.filter(
  (obj1, index, self) =>
    self.findIndex(obj2 => obj2.value === obj1.value) === index
);

const transformedCategories = [
  {
    label: "دسته بندی (همه)",
    value: "ALL",
  },
  ...uniqueCategories,
];

function ProjectHeader({
  onChangeStatus,
  status,
  onChangeSort,
  sort,
  onChangeCategory,
  category,
}) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-base font-bold">لیست پروژه ها</h1>
      <div className="flex gap-x-4 text-sm font-medium">
        <FilterStatus
          options={statusOptions}
          onChange={onChangeStatus}
          status={status}
        />
        <FilterDropdown
          options={sortOptions}
          onChange={onChangeSort}
          value={sort}
        />
        <FilterDropdown
          options={transformedCategories}
          onChange={onChangeCategory}
          value={category}
        />
      </div>
    </div>
  );
}

export default ProjectHeader;
