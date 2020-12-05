import React from "react";
import { Grommet, Box,  } from "grommet";

import Layout from "./features/layout/Layout"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const theme = {
  global: {
    colors: {
      brand: '#cc0000',
      back: "#292929",
      card: "#bfdbf7",
      accent: "#994650",
      ok: '#00C781',
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <Box fill background="back" pad="medium">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Layout />
            </Route>
          </Switch>
      </Router>
        
      </Box>
  
    </Grommet>
  );
}

export default App;
