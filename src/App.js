import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import Navbar from './components/Sidebar/Navbar';
// import { Navigation } from './components/Navigation/Navigation';
import './App.css';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const TableView = lazy(() => import('./views/TableView/TableView'));
const NotFoundView = lazy(() =>
  import(
    './views/NotFoundView/NotFoundView' /* webpackChunkName: "notfound-view" */
  ),
);
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Navigation /> */}
      <div className="main">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/table" element={<TableView />} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
