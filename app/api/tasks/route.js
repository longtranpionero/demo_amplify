export async function GET() {
    const tasks = [
      { id: 1, title: "Học Next.js", completed: false },
      { id: 2, title: "Làm bài tập", completed: true },
      { id: 3, title: "Đi siêu thị", completed: false },
    ];
    return new Response(JSON.stringify(tasks), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }