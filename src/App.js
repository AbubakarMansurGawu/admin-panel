import Home from "./Pages/home/Home";
import Login from './Pages/login/Login'
import List from "./Pages/list/List";
import Single from "./Pages/single/Single";
import New from "./Pages/new/New";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { productInputs, userInputs } from './formSource'
import './style/dark.scss'
import { useContext } from 'react'
import { DarkModeContext } from "./context/darkModeContext";


function App() {

  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userID' element={<Single />} />
              <Route path='new' element={<New inputs={userInputs} />} />
            </Route>
            <Route path='products'>
              <Route index element={<List />} />
              <Route path=':productID' element={<Single />} />
              <Route path='new' element={<New inputs={productInputs} />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
