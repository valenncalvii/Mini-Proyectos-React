import { TodoId, type Todo as TodoType } from "../Types";

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void;
  onToggleCompleteTodo: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
}

const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleteTodo,
}) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggleCompleteTodo({ id, completed: event.target.checked });
  };
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo({ id });
        }}
      ></button>
    </div>
  );
};

export default Todo;
