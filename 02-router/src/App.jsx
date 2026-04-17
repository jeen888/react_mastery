import {Routes, Route} from 'react-router-dom';
import TopNavi from './components/TopNavi';
import Home from './components/Home';
// import Intro from './components/Intro';
// import RouterHook from './components/RouterHook';
import NotFound from './components/NotFound';

export default function App() {
  return <>
    <TopNavi />
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/intro' element={<Intro />} /> */}
      {/* <Route path='/intro/router' element={<RouterHook />} /> */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  </>
}