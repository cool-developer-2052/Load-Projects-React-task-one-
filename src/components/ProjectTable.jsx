import { ClipboardIcon } from "@heroicons/react/24/outline";
import { toLocalDateShort } from "../utils/toLocalDateShort";
import {
  toParsianNumbersWithComma,
  toPersianNumbers,
} from "../utils/toPersianNumbers";
import { truncateText } from "../utils/truncateText";

function ProjectTable({ filteredProjects }) {
  return (
    <table className="w-full text-right font-bold mt-24">
      <thead className="text-gray-900 text-sm h-10 border-b-2 border-gray-200">
        <tr>
          <th className="min-w-7">#</th>
          <th>عنوان پروژه</th>
          <th>دسته بندی</th>
          <th>بودجه</th>
          <th>تاریخ ایجاد</th>
          <th>ددلاین</th>
          <th>تگ ها</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody>
        {filteredProjects.map((project, index) => (
          <tr
            key={project._id}
            className="bg-white text-gray-700 text-xs h-12 border-b-2 border-gray-200">
            <td>{index + 1}</td>
            <td>{truncateText(project.title, 30)}</td>
            <td>{project.category.title}</td>
            <td>{toParsianNumbersWithComma(project.budget)}</td>
            <td>{toLocalDateShort(project.createdAt)}</td>
            <td>{toLocalDateShort(project.deadline)}</td>
            <td className="w-[230px] overflow-hidden">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-block bg-gray-300 text-gray-600 w-max py-1 px-3 ml-2 rounded-xl">
                  {tag}
                </span>
              ))}
            </td>
            <td>
              <span
                className={
                  project.status === "OPEN"
                    ? "flex items-center bg-green-500 text-white h-6 w-max px-3 rounded-xl"
                    : "flex items-center bg-red-500 text-white h-6 w-max px-3 rounded-xl"
                }>
                {project.status === "OPEN" ? "باز" : "بسته"}
              </span>
            </td>
            <td>
              <ClipboardIcon className="size-5 text-blue-500" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProjectTable;
