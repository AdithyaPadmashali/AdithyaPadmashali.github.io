import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Landing from './screens/Landing/Landing';
import Skills from './screens/Skills/Skills';
import MyWork from './screens/MyWork/MyWork';
import Publications from './screens/Publications/Publications';
import Connect from './screens/Connect/Connect';

function App() {
  return (
    <>
      <Sidebar />
      <Landing />
      <Skills />
      <MyWork />
      <Publications />
      <Connect />
    </>
  );
}

export default App;
