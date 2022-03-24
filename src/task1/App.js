import { useEffect } from 'react';

import AlertSnackBar from './AlertSnackBar';
import ImageCarousel from './ImageCarousel';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { fetchTask2 } from '../task2/ecommerce';
function App() {
  useEffect(() => {
    fetchTask2();
  }, []);
  return (
    <Provider store={store}>
      <div>
        <ImageCarousel />
        <AlertSnackBar />
      </div>
    </Provider>
  );
}

export default App;
