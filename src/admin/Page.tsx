import {
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import Orders from "./Orders";
import Products from "./Products";
import Services from "./Services";
import AdminTeamPage from "./Team";
// import './Page.css';

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  function setNameContent(name: string) {
    // Routing System for pages
    let component;
    let names = {
      services: "Services",
      team: "Team",
      products: "Products",
      orders: "Orders",
    };
    switch (name) {
      case names.services:
        component = <Services />;
        break;
      case names.team:
        component = <AdminTeamPage />;
        break;
      case names.products:
        component = <Products />;
        break;
      case names.orders:
        component = <Orders />;
        break;
      default:
        component = <ExploreContainer name={name}></ExploreContainer>;
    }
    return component;
  }
  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle size="large">{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      {setNameContent(name)}
    </IonContent>
  );
};

export default Page;
