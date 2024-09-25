import "./App.css";
import { useState } from "react";
import ProjectHeader from "./components/ProjectHeader";
import ProjectTable from "./components/ProjectTable";
import { projects } from "./data/projects";

function App() {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("ALL");
  const [sort, setSort] = useState("created_desc");
  const [category, setCategory] = useState("ALL");

  const sortCallback = (a, b) => {
    switch (sort) {
      case "created_desc":
        return new Date(b.createdAt) - new Date(a.createdAt);
      case "created_asc":
        return new Date(a.createdAt) - new Date(b.createdAt);
      case "deadline_desc":
        return new Date(b.deadline) - new Date(a.deadline);
      case "deadline_asc":
        return new Date(a.deadline) - new Date(b.deadline);
      case "budget_desc":
        return b.budget - a.budget;
      case "budget_asc":
        return a.budget - b.budget;
    }
  };

  const filteredProjects = projects
    .filter(p => (status === "ALL" ? true : p.status === status))
    .filter(p =>
      category === "ALL" ? true : p.category.englishTitle === category
    )
    .sort(sortCallback);

  return show ? (
    <div>
      <ProjectHeader
        status={status}
        onChangeStatus={value => setStatus(value)}
        sort={sort}
        onChangeSort={e => setSort(e.target.value)}
        category={category}
        onChangeCategory={e => setCategory(e.target.value)}
      />
      <ProjectTable filteredProjects={filteredProjects} />
    </div>
  ) : (
    <div>
      <h2 className="text-right text-secondary-300 text-xl font-extrabold">
        لیست پروژه ها
      </h2>
      <button
        onClick={() => setShow(true)}
        className="bg-blue-600 text-white mt-40 text-center overflow-hidden w-[350px] h-[80px] rounded-3xl text-xl font-semibold">
        نشان دادن پروژه ها
      </button>
    </div>
  );
}

export default App;
