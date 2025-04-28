import { TodoTitle } from "../Types";
import CreateTodo from "./CreateTodo";

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void;
}
const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header>
      <h1>ToDo List</h1>
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  );
};

export default Header;
