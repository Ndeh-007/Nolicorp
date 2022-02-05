import React from 'react';
import {
  IonSplitPane, 
  IonRouterOutlet, 
} from '@ionic/react';
import AdminMenu from "./AdminMenu"
import { Redirect, Route } from "react-router-dom";
import Page from './Page';
 const Admin: React.FC = () => (
  <IonSplitPane contentId="admin">
    <AdminMenu />
    <IonRouterOutlet id="admin">
      <Route path="/admin/" exact={true}>
        <Redirect to="/admin/home" />
      </Route>
      <Route path="/admin/:name" exact={true}>
        <Page />
      </Route>
    </IonRouterOutlet>
  </IonSplitPane>
);

export default Admin;