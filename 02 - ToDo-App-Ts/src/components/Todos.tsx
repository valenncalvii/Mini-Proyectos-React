import { useState } from "react";
import { type Todo as TodoType, type TodoId, type ListOfTodos } from "../Types";
import Todo from "./Todo";

interface TodosProps {
  todos: ListOfTodos;
  onRemoveTodo: ({ id }: TodoId) => void;
  onToggleCompleteTodo: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
  setTitle: (params: Omit<TodoType, "completed">) => void;
}
const Todos: React.FC<TodosProps> = ({
  todos,
  onRemoveTodo,
  onToggleCompleteTodo,
  setTitle,
}) => {
  const [isEditing, setIsEditing] = useState("");

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          onDoubleClick={() => {
            setIsEditing(todo.id);
          }}
          className={`${todo.completed ? "completed" : ""} ${
            isEditing === todo.id ? "editing" : ""
          }`}
        >
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompleteTodo={onToggleCompleteTodo}
            setTitle={setTitle}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
