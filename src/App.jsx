import React from "react";
import SkipSelectionPage from "./components/SkipSelectionPage";

export default function App() {
  return (
    <SkipSelectionPage
      onBack={() => window.history.back()}
      onContinue={id => alert(`Selected skip id: ${id}`)}
    />
  );
}