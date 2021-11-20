import css from './homeView.module.css';
const HomeView = () => {
  return (
    <div className={css.homePage}>
      <h1 className={css.text}>Welcome</h1>
      <p className={css.text}> to a galaxy far, far away...</p>
    </div>
  );
};
export default HomeView;
