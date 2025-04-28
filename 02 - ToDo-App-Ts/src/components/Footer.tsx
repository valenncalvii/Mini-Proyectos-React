import { FilterValue } from "../Types";
import Filters from "./Filters";

interface Props {
  activeCount: number;
  completedCount: number;
  filterSelected: FilterValue;
  onClearCompleted: () => void;
  handleFilterChange: (filter: FilterValue) => void;
}
const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount} Tareas pendientes</strong>
      </span>

      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      ></Filters>
      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Limpiar completadas
        </button>
      )}
    </footer>
  );
};

export default Footer;
