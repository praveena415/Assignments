import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <header>
          <Link to="/">Home</Link>
          <ThemeToggle />
        </header>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
