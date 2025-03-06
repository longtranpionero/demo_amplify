export default async function TaskDetail({ params }) {
    const { id } = await params;
    const res = await fetch("http://localhost:3000/api/tasks");
    const tasks = await res.json();
    const task = tasks.find((t) => t.id === Number(id));
  
    if (!task) {
      return <div>Task không tồn tại</div>;
    }
  
    return (
      <div>
        <h1>Chi tiết Task</h1>
        <p>Tên: {task.title}</p>
        <p>Trạng thái: {task.completed ? "Hoàn thành" : "Chưa hoàn thành"}</p>
      </div>
    );
}