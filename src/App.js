import { Provider } from 'react-redux';
// components
import InboxScreen from './components/InboxScreen';
// store
import store from './lib/redux';

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
