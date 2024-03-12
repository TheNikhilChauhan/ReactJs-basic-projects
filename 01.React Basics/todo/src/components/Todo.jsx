import { useState, useEffect } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [checked, setChecked] = useState([]);

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    setTodo([...todo, task]);
    setTask("");
  };

  const handleCheckbox = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
    console.log(newChecked);
  };

  const handleEditTask = () => {
    <form>
      <input type="text" value={todo} />
    </form>;
  };

  const handleDelete = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
    setChecked(checked.filter((_, i) => i !== index));
  };

  useEffect(() => {
    setChecked(new Array(todo.length).fill(false));
  }, [todo]);
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="flex  flex-col p-3  border m-5 w-[35rem] bg-purple-200">
          <div className="flex justify-center m-3">
            <h1 className="font-semibold text-xl mb-3">
              iTask - Manage your todos at one place
            </h1>
          </div>
          <div>
            <h2>Add a Todo</h2>
            <div className="flex gap-2 m-2">
              <input
                className="border border-gray-400 rounded-md p-2 w-full"
                type="text"
                name="task"
                value={task}
                onChange={handleInput}
              />
              <button
                className="border bg-purple-700 rounded-lg p-2 text-white font-semibold"
                onClick={addTask}
              >
                Save
              </button>
            </div>
            <div>
              <input type="checkbox" /> Show Finished
            </div>
            <hr className="mt-3 mb-2 border border-gray-300 w-[30rem] ml-5" />

            <div>
              <div>
                <h2 className="font-bold text-lg m-3 ">Your Todos</h2>

                <div>
                  {todo &&
                    todo.map((t, index) => (
                      <div className="flex  justify-between" key={index}>
                        <div className="">
                          <input
                            type="checkbox"
                            className={checked[index] ? "line-through " : ""}
                            onChange={() => handleCheckbox(index)}
                          />
                          <span
                            className="ml-2 text-md font-medium"
                            style={{
                              textDecoration: checked[index]
                                ? "line-through"
                                : "none",
                            }}
                          >
                            {t}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            className="border border-gray-500 bg-green-600 rounded-md p-1 text-white"
                            onClick={handleEditTask}
                          >
                            Edit
                          </button>
                          <button
                            className="border border-gray-500 bg-red-600 rounded-md p-1 text-white"
                            onClick={() => handleDelete(index)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
