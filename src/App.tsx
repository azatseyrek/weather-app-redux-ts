import {useEffect} from 'react';
import {useCustumDispatch} from './hooks/store.ts';
import {fetchCurrentWeather} from './store/thunks/fetchCurrentWeather';

function App() {
  const dispatch = useCustumDispatch();

  useEffect(() => {
    dispatch(fetchCurrentWeather('paris'));
  }, []);

  return <div className="App"></div>;
}

export default App;
