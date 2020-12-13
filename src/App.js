import './App.css';
import GlobalHeader from "./components/GlobalHeader";
import React from "react";
import GlobalFonts from "./fonts/fonts"

function App() {
    return (
        <div className="App">
            <GlobalFonts/>
            <GlobalHeader/>
        </div>
    );
}

export default App;
