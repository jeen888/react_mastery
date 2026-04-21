import { useLocation, useSearchParams } from "react-router-dom";

const RouterHook = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'list';
  const pageNum = searchParams.get('pageNum') || '1';

  const changeMode = () => {
    const nextMode = mode ==='list' ? 'view' : 'list';
    setSearchParams({mode: nextMode, pageNum});
  }

  const nextPage = () => {
    let pageTemp =  (pageNum===null || isNaN(pageNum)) ? 1 : parseInt(pageNum) + 1;
    setSearchParams({mode, pageNum: pageTemp});
  }

  const prevPage = () => {
    let pageTemp =  (pageNum===null || isNaN(pageNum) || pageNum <= 1) ? 1 : parseInt(pageNum) - 1;
    setSearchParams({mode, pageNum: pageTemp});
  }

  return <>
    <h1>Router Hook</h1>
    <p>현재 URL: {location.pathname}</p>
    <p>쿼리스트링: {location.search}</p>
    <p>현재 모드: {mode}</p>
    <p>현재 페이지 번호: {pageNum}</p>
    <button onClick={changeMode}>모드 변경</button>&nbsp;
    <button onClick={prevPage}>이전 페이지</button>&nbsp;
    <button onClick={nextPage}>다음 페이지</button>
  </>
}
export default RouterHook;