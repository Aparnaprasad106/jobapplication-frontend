import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserRegister from './pages/UserRegister';
import UserLogin from './pages/UserLogin';
import Admindashboard from './pages/Admindashboard';
import AdminLogin from './pages/AdminLogin';
import Home from './pages/Home';
import CompanyRegister from './pages/CompanyRegister';
import CompanyLogin from './pages/CompanyLogin';
import Header from './Components/Header';
import Company from './pages/Company';
import Jobs from './pages/Jobs';
import ViewJob from './pages/ViewJob';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='header' element={<Header/>}/>
        <Route path='register' element={<UserRegister/>}/>
        <Route path='login' element={<UserLogin/>}/>
        <Route path='dashboard' element={<Admindashboard/>}/>
        <Route path='adminlogin' element={<AdminLogin/>}/>
        <Route path='companyregister' element={<CompanyRegister/>}/>
        <Route path='companylogin' element={ <CompanyLogin/>}/>
        <Route path='company/:id' element={<Company/>}/>
        <Route path='jobs' element={<Jobs/>}/>
        <Route path='viewjob' element={<ViewJob/>} />
      </Routes>
    </div>
  );
}

export default App;
