import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/userContainer';

function App() {
  return (
    // <Provider store={store}>
    // <div className="App">
    //   <ItemContainer cake/>
    //   <ItemContainer/>

    //   <HooksCakeContainer/>
    //   <CakeContainer/>
    //   <IceCreamContainer/>
    //   <NewCakeContainer/>
    // </div>
    // </Provider>
    <Provider store={store}>
    <div className='App'>
      <UserContainer/>
    </div>
    </Provider>
  );
}

export default App;
