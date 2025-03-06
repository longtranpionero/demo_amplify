import Link from "next/link";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/tasks", {
    cache: "no-store",
  });
  const tasks = await res.json();

  return (
    <div>
      <h1>Danh sách Task</h1>
      <ul>
        {tasks.map((task: any) => (
          <li key={task.id}>
            <Link href={`/tasks/${task.id}`}>
              {task.title} {task.completed ? "(Hoàn thành)" : ""}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}