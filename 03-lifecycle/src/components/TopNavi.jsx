import {NavLink} from 'react-router-dom';

export default function TopNavi() {
  return <>
    <nav>
      <NavLink to="/" end>생명주기</NavLink>&nbsp;
      <NavLink to="/local">내부통신</NavLink>&nbsp;
      <NavLink to="/external">외부통신</NavLink>
    </nav>
  </>
}