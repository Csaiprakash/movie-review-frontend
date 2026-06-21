import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from './Components/landing/LandingPage.js';
import Register from './Components/Register.js';
import Login from './Components/Login.js';
import Dashboard from './Components/pages/Dashboard.js'
import AdminDashboard from './Components/pages/AdminDashboard.js'
import MovieReviewPage from './Components/pages/MovieReviewPage.js'
import AddMovie from './Components/pages/AddMovie.js'
import ViewMovies from './Components/pages/ViewMovies.js'
import UpdateMovie from './Components/pages/UpdateMovie.js'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/admin/dashboard" element={<AdminDashboard />}/>
            <Route path="/movie/:movieId" element={<MovieReviewPage />}/>
            <Route path="/admin/add-movie" element={<AddMovie/>}/>
            <Route path="/admin/view-movies" element={<ViewMovies />}/>
            <Route path="/admin/update-movie" element={<UpdateMovie />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
