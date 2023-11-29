import Home from './componets/Home/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CartContent from './componets/CartContent/CartContent';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<CartContent/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
