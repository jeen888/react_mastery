import {Routes, Route} from 'react-router-dom';
import TopNavi from './components/TopNavi';
import Home from './components/Home';
// import Intro from './components/Intro';
// import RouterHook from './components/RouterHook';
import NotFound from './components/NotFound';
import CommonLayout from './components/CommonLayout';
import LayoutIndex from './components/LayoutIndex';
import RouterHook from './components/RouterHooks';

export default function App() {
  return <>
    <TopNavi />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/intro' element={<CommonLayout />}>
        <Route index element={<LayoutIndex />} />
        <Route path='router' element={<RouterHook />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  </>
}