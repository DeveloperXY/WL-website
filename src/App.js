import './App.css';
import GlobalHeader from "./components/GlobalHeader";
import React from "react";
import GlobalFonts from "./fonts/fonts"
import Homepage from "./components/Homepage";
import styled from "styled-components";

function App() {
    const GlobalPadding = styled.div`
        padding: 0 132px;
    `;
    return (
        <div className="App">
            <GlobalPadding>
                <GlobalFonts/>
                <GlobalHeader/>
                <Homepage/>
            </GlobalPadding>
        </div>
    );
}

export default App;
