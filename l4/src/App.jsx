import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./componets/ThemeButton";
import Card from "./componets/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const brightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      themeMode === "dark"
    );
  }, [themeMode]);

  return (
    <ThemeProvider
      value={{
        themeMode,
        darkTheme,
        brightTheme,
      }}
    >
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end py-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;