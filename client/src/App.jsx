import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppoRuter from './components/AppRouter';
import NavBar from './components/NavBar';
import { check } from './http/userApi';
import { setAuthAction, setUserAction } from './store/userReducer';

const App = () => {
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    check().then(data => {
      dispatch(setUserAction(data))
      dispatch(setAuthAction(true))
    }).finally(() => setLoading(false))
  }, [])
  
  return (
    <BrowserRouter>
      <NavBar />
      <AppoRuter />
    </BrowserRouter>
  );
}

export default App;
