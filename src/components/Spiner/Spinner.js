import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <Loader
      type="Circles"
      color="gold"
      height={80}
      width={80}
      timeout={3000} //3 secs
    />
  );
};
