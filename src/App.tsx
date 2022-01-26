import { Redirect, Route } from "react-router-dom";
import { IonApp, IonCard, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import TeamDetail from "./pages/TeamDetail";
import Services from "./pages/Services";
import Team from "./pages/Team";
import About from "./pages/About";
import Menu from "./components/Menu";
import AdminRoutes from "./admin/AdminRoutes";
import Admin from "./admin/Admin";
import { SplitPlaneExample } from "./admin/Temp";

const App: React.FC = () => (
  <IonApp className={`App`}>
    <IonReactRouter>
      <Menu></Menu>
      <IonRouterOutlet id={`main`}>
        <Route exact path="/">
          <Redirect to="/home"></Redirect>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/team">
          <Team></Team>
        </Route>
        <Route exact path="/team/:name">
          <TeamDetail></TeamDetail>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/services">
          <Services></Services>
        </Route>
      </IonRouterOutlet>

      {/* Admin Routes   */}
      <AdminRoutes></AdminRoutes>
    </IonReactRouter>
  </IonApp>
);

export default App;
