// filepath: /Users/longtran/Workspace/Pionero/aws-demo/amplify/my-todo-app/app/page.tsx
import Link from "next/link";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/tasks", {
    cache: "no-store",
  });
  const tasks: Task[] = await res.json();

  return (
    <div>
      <h1>Danh sách Task</h1>
      <ul>
        {tasks.map((task) => (
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