import { useGetAllPeopleQuery } from '../../redux/swapi';
import css from './tableView.module.css';

const TableView = () => {
  const { data, error, isLoading } = useGetAllPeopleQuery();
  // const people = ;
  return (
    <>
      <h1 className={css.text}>Table</h1>
      {data && (
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Birth Year</td>
              <td>Height</td>
              <td>Mass</td>
            </tr>
          </thead>
          <tbody>
            {data.results.map(({ name, birth_year, height, mass }) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{birth_year}</td>
                <td>{height}</td>
                <td>{mass}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default TableView;
