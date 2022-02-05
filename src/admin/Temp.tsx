import React from "react";
import {
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRouterOutlet,
  IonContent,
  IonPage,
} from "@ionic/react";
import AdminMenu from "./AdminMenu";
import { Redirect, Route } from "react-router-dom";
import Page from "./Page";

export const SplitPlaneExample: React.FC = () => (
  <IonSplitPane contentId="admin">
    <AdminMenu />
    <IonRouterOutlet id="admin">
      <Route path="/" exact={true}>
        <Redirect to="/admin/Inbox" />
      </Route>
      <Route path="/admin/:name" exact={true}>
        <Page />
      </Route>
    </IonRouterOutlet>
  </IonSplitPane>
);
