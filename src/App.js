// Material

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav';
import Login from './pages/Login';

// Context
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {

  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <div className="pages">
          <Routes>
            <Route path='/' element={user ? <Home /> : <Navigate to='login' /> }/>
            <Route path='login' element={!user ? <Login /> : <Navigate to='/' /> }/>
            <Route path='register' element={!user ? <Register /> : <Navigate to='/' />}/>
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
