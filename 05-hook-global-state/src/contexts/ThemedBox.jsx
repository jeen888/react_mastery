import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemedBox = () => {
  const {isDark} = useContext(ThemeContext);

  const boxStyle = {
    padding: '20px',
    marginTop: '10px',
    backgroundColor: isDark ? '#333' : '#eee',
    color: isDark ? '#fff' : '#000',
    textAlign: 'center',
  }

  return <>
    <div style={boxStyle}>
      Current Theme: {isDark ? 'Dark' : 'Light'}
    </div>
  </>
}

export default ThemedBox;