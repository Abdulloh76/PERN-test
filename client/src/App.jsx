import { BrowserRouter } from 'react-router-dom';
import AppoRuter from './components/AppRouter';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppoRuter />
    </BrowserRouter>
  );
}

export default App;
