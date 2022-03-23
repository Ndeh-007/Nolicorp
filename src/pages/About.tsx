import React from "react";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFabButton,
  IonFooter,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonNote,
  IonPage,
  IonPopover,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import "../style/widgets/header.css";
import "../style/page_styles/home.css";
import { local_images } from "../images/images";
import {
  bulbOutline,
  chevronForward,
  logoWhatsapp,
  people,
} from "ionicons/icons";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import Header from "../components/Header";
import { NolicorpTeam } from "../components/data";

function About() {
  return (
    <IonPage>
      <Header></Header>
      <IonContent>
        <div className="content">
          <IonGrid style={{ padding: 0, margin: 0 }}>
            <IonRow style={{ padding: 0, margin: 0 }}>
              <IonCol></IonCol>
              <IonCol
                style={{ padding: 0, margin: 0 }}
                size={`12`}
                sizeSm={`11`}
                sizeMd={`10`}
              >
                <IonRow>
                  <IonCol className={`ion-align-self-center`}>
                    <div className="ion-padding">
                      <h1>
                        <b>About NOLICORP</b>
                      </h1>
                      <h3>Who we as a Company and What we stand for</h3>
                      <IonNote>No Limits Coperation (NOLICORP)</IonNote>
                    </div>
                  </IonCol>
                  <IonCol>
                    <div className={`text-center`}>
                      <img
                        alt={`banner image nolicorp`}
                        style={{ maxHeight: `70vh` }}
                        src={local_images.nolicorp}
                      />
                    </div>
                  </IonCol>
                </IonRow>
              </IonCol>
              <IonCol></IonCol>
            </IonRow>
            <IonRow>
              <IonCol></IonCol>
              <IonCol size={`11`} sizeSm={`11`} sizeMd={`9`} sizeLg={`8`}>
                {" "}
                <div className="divider"></div>
                <section className="who-we-are text">
                  <h2 className="heading">What is Nolicorp</h2>
                  <IonToolbar>
                    <p>
                      NOLICORP is a business Organisation created in Jan 2016.
                      She was founded by Ashumbang James then C.E.O of Divine
                      Touch Co. Ltd one of the most renounced documentations in
                      the University of Buea. The Company started with 10
                      partners who eventually withdrew between 2016 and 2018
                      being the most heated years of the Anglophone crises in
                      the N and S. West Regions of Cameroon.
                    </p>
                    <p>
                      NOLICORP is Located in the S.W. Region of teamCameroon at
                      the University Junction, UB south. We also have branches
                      at Biaka street opposite the Biaka gate and another branch
                      inside the University of Buea, UB Market.
                    </p>
                  </IonToolbar>
                </section>
                <div className="divider"></div>
                <section className="vision text">
                  <p>
                    <h2 className="heading">Vision</h2>
                    <IonToolbar>
                      <p>
                        Our vision is to invest in youths the capacity to look
                        at what others look, see what they don’t see, do what
                        they don’t imagine possible and standout in a unique
                        position of leadership.
                      </p>
                    </IonToolbar>
                  </p>
                </section>
                <section className="others">
                  <h2 className="heading">More about NOLICORP</h2>
                  <IonGrid>
                    <IonRow>
                      <IonCol size={`12`} sizeSm={`6`}>
                        <IonCard mode={`ios`}>
                          <IonCardContent className="ion-padding text-center">
                            <br />
                            <div>
                              <IonIcon
                                size={`large`}
                                color={`tertiary`}
                                icon={people}
                              ></IonIcon>
                            </div>
                            <br />
                            <IonCardSubtitle>Team</IonCardSubtitle>
                            <IonFabButton
                              routerLink={`/team`}
                              style={{ margin: `auto` }}
                              color={`dark`}
                            >
                              <IonIcon icon={chevronForward}></IonIcon>
                            </IonFabButton>
                          </IonCardContent>
                        </IonCard>
                      </IonCol>
                      <IonCol size={`12`} sizeSm={`6`}>
                        <IonCard mode={`ios`}>
                          <IonCardContent className="ion-padding text-center">
                            <div className="ion-padding text-center">
                              <IonIcon
                                size={`large`}
                                color={`success`}
                                icon={bulbOutline}
                              ></IonIcon>
                            </div>
                            <br />
                            <IonCardSubtitle>Services</IonCardSubtitle>
                            <IonFabButton
                              routerLink={`/services`}
                              style={{ margin: `auto` }}
                              color={`dark`}
                            >
                              <IonIcon icon={chevronForward}></IonIcon>
                            </IonFabButton>
                          </IonCardContent>
                        </IonCard>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </section>
              </IonCol>
              <IonCol></IonCol>
            </IonRow>
          </IonGrid>
          <div className="divider"></div>
        </div>
        <Footer></Footer>
      </IonContent>
    </IonPage>
  );
}

export default About;
