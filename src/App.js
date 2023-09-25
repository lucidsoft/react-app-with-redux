import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from "./store";
import Cart from "./component/Cart";
import MyRosviewer from './component/MyRosviewer';

function App() {
  return (
    <Provider store={store}>
      <Cart />
      <MyRosviewer />
    </Provider>
  );
}

export default App;
