import React, { useLayoutEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import "normalize.css";
// import "@fontsource/noto-sans-tc";
// import "@fontsource/noto-sans-tc/300.css";
// import "@fontsource/noto-sans-tc/400.css";
// import "@fontsource/noto-sans-tc/700.css";
import "../assets/font/NotoSans-Bold.ttf";
import "../assets/font/NotoSans-BoldItalic.ttf";
import "../assets/font/NotoSans-Italic.ttf";
import "../assets/font/NotoSans-Regular.ttf";
import "../assets/normalize.css";
import "./style.scss";

import { TopNavigation } from "./Common/TopNavigation";
import { Footer } from "./Common/Footer";
import { requesScenicSpot } from "../controller/apiManager";
import Homepage from "../Router/Homepage/index";
import SearchResult from "../Router/SearchResult/index";
import ViewDetail from "../Router/ViewDetail/index";

const App = () => {
  useLayoutEffect(() => {
    // if ("geolocation" in navigator) {
    //   navigator.geolocation.getCurrentPosition(async ({ coords }) => {
    //     console.log(coords, coords.longitude, coords.latitude);
    //     const nearby = await requesScenicSpot("", {
    //       $spatialFilter: `nearby(${coords.latitude},${coords.longitude},5000)`,
    //     });
    //     console.log("nearby me", nearby);
    //   });
    // }
  }, []);

  return (
    <>
      <Router basename="/F2E-2021_trip">
        <TopNavigation />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/:searchKind/search-result" component={SearchResult} />
          <Route path="/:searchKind/view/:id" component={ViewDetail} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
