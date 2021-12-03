import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import Loading from './components/UI/LoadingBar';
import './App.css';
import Header from './components/Header/Header';
import Loggin from './components/loggin/Loggin';
import HomePage from './pages/HomePage';
import LeaderBoard from './pages/LeaderBoard';
import NewPollPage from './pages/NewPollPAge';
import {fetchAllData} from "./store/thunks"
import PollPage from './pages/PollPage';

function App() {
  const loggedIn = useSelector(state => state.authUser.logged)
  const loaded = useSelector(state => state.authUser.dataLoaded)
  const dispatch = useDispatch()
  
  // fetch data from the database
  useEffect(() => {
    dispatch(fetchAllData())
  },[dispatch])

  return (
    <div className="App">
      {loaded?<Header />:<Loading/>}
      {loaded && <Routes>
        <Route path="*" element={loggedIn?<Navigate to="/home" replace/>:<Loggin/>}/>
        <Route path="/home" element={loggedIn?<HomePage/>:<Loggin/>}/>
        <Route path="/leaderboard" element={loggedIn?<LeaderBoard/>:<Loggin/>}/>
        <Route path="/add" element={loggedIn?<NewPollPage />:<Loggin/>}/>
        <Route path="/question/:questionId" element={loggedIn?<PollPage/>:<Loggin/>}/>  
      </Routes>}
    </div>
  );
}

export default App;
