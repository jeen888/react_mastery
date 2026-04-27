import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "../contexts/ThemeContext";
import ThemedBox from "../contexts/ThemedBox";

const ThemeToggleButton = () => {
  const {toggleTheme} = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle Theme</button>
}

const UseContext = () => {
  return <>
    <h2>useContext</h2>
    <ThemeProvider>
      <ThemeToggleButton />
      <ThemedBox />
    </ThemeProvider>
  </>
}

export default UseContext;