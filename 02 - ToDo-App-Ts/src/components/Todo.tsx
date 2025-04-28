import { useEffect, useRef, useState } from "react";
import { TodoId, type Todo as TodoType } from "../Types";

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void;
  onToggleCompleteTodo: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
  setTitle: (params: { id: string; title: string }) => void;
  isEditing: string;
  setIsEditing: (completed: string) => void;
}

const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleteTodo,
  setTitle,
  isEditing,
  setIsEditing,
}) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const inputEditTitle = useRef<HTMLInputElement>(null);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      setEditedTitle(editedTitle.trim());

      if (editedTitle !== title) {
        setTitle({ id, title: editedTitle });
      }

      if (editedTitle === "") onRemoveTodo({ id });
      setIsEditing("");
    }

    if (e.key === "Escape") {
      setEditedTitle(title);
      setIsEditing("");
    }
  };

  useEffect(() => {
    inputEditTitle.current?.focus();
  }, [isEditing]);

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggleCompleteTodo({ id, completed: event.target.checked });
  };
  return (
    <>
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
      <input
        className="edit"
        value={editedTitle}
        onChange={(e) => {
          setEditedTitle(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          setIsEditing("");
        }}
        ref={inputEditTitle}
      />
    </>
  );
};

export default Todo;
