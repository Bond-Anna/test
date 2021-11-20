import { useGetAllPeopleQuery } from '../../redux/swapi';
import css from './tableView.module.css';

const TableView = () => {
  const { data, error, isLoading } = useGetAllPeopleQuery();

  return (
    <>
      <h1 className={css.text}>Table</h1>
    </>
  );
};

export default TableView;
