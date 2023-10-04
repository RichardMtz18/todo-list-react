import Todo from "./pages/Todo";

function App() {
  return (
    <div className="bg-[#222] text-white">
      <main className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-4xl font-extrabold">Todo List</h1>
        <Todo />
      </main>
    </div>
  );
}

export default App;
