import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import RecipeCarousel from "./RecipeCarousel";

// Demo notes data
const demoNotes = [
  {
    id: 1,
    title: "Meeting Notes",
    content: "Discuss project milestones and deadlines. Assign tasks to team."
  },
  {
    id: 2,
    title: "Shopping List",
    content: "Milk\nEggs\nBread\nCheese"
  },
  {
    id: 3,
    title: "Personal Journal",
    content: "Today I learned about responsive layouts in React."
  },
];

// Demo recipes data
const demoRecipes = [
  {
    id: "r1",
    title: "Classic Pancakes",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    shortDesc: "Fluffy pancakes with maple syrup."
  },
  {
    id: "r2",
    title: "Avocado Toast",
    image: "https://images.unsplash.com/photo-1519864600265-abb21556ed8c?auto=format&fit=crop&w=400&q=80",
    shortDesc: "Crispy toast with fresh avocado."
  },
  {
    id: "r3",
    title: "Berry Parfait",
    image: "https://images.unsplash.com/photo-1519864624713-01a99390b6a5?auto=format&fit=crop&w=400&q=80",
    shortDesc: "Layers of yogurt, berries, and granola."
  },
];

// PUBLIC_INTERFACE
function App() {
  // State
  const [selectedNoteId, setSelectedNoteId] = useState(demoNotes[0].id);
  const [notes, setNotes] = useState(demoNotes);

  // Light theming only, allow switching to dark mode for completeness
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Find selected note
  const selectedNote = notes.find((note) => note.id === selectedNoteId);

  // PUBLIC_INTERFACE
  const handleNoteSelect = (id) => setSelectedNoteId(id);

  // PUBLIC_INTERFACE
  const handleNoteChange = (content) => {
    setNotes((prevNotes) =>
      prevNotes.map((n) =>
        n.id === selectedNoteId ? { ...n, content } : n
      )
    );
  };

  // For demonstration, hiding theme toggle and minimal header
  return (
    <div className="kavia-app-root">
      {/* Minimal top header with branding */}
      <div className="kavia-header">
        <span className="kavia-logo">📝</span>
        <span className="kavia-title">NoteMaster</span>
        {/* Toggle for future, keeping it discoverable*/}
        <button
          className="theme-toggle"
          style={{ marginLeft: "auto" }}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
      {/* Main layout: sidebar + content */}
      <div className="kavia-main-layout">
        <Sidebar
          notes={notes}
          selectedNoteId={selectedNoteId}
          onSelect={handleNoteSelect}
        />
        <MainContent
          note={selectedNote}
          onChange={handleNoteChange}
        />
      </div>
      {/* Minimal Recipe Carousel (demo static) */}
      <div className="kavia-carousel-container">
        <h3 className="carousel-title">Recipes</h3>
        <RecipeCarousel recipes={demoRecipes} />
      </div>
    </div>
  );
}

export default App;
