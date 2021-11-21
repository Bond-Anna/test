import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Navbar } from './components/Sidebar/Navbar';
import { useGetAllPeopleQuery } from './redux/swapi';
import { Spinner } from './components/Spiner/Spinner';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView' /* webpackChunkName: "home-view" */),
);
const TableView = lazy(() =>
  import('./views/TableView/TableView' /* webpackChunkName: "table-view" */),
);
const NotFoundView = lazy(() =>
  import(
    './views/NotFoundView/NotFoundView' /* webpackChunkName: "notfound-view" */
  ),
);

function App() {
  const { data, isSuccess } = useGetAllPeopleQuery();

  return (
    <>
      <Navbar />
      <div>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route
              path="/table"
              element={isSuccess && <TableView people={data.results} />}
            />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
