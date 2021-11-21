import css from './tableView.module.css';

const TableView = ({ people }) => {
  return (
    <table className={css.table}>
      <caption className={css.text}>Check your Hero</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Birth Year</th>
          <th>Height</th>
          <th>Mass</th>
        </tr>
      </thead>
      <tbody>
        {people.map(({ name, birth_year, height, mass }) => (
          <tr key={name}>
            <td className={css.name}>{name}</td>
            <td>{birth_year}</td>
            <td>{height}</td>
            <td>{mass}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
