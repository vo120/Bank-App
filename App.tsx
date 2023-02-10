import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, loadFonts } from "./assets/colors/shared";
import "react-native-gesture-handler";

// navigation
import RootStack from "./src/routes/RootStack";

const App: React.FC = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await loadFonts();
      setFontLoaded(true);
    };
    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  }
  return <RootStack />;
};
export default App;
