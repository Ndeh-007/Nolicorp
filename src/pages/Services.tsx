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
import { chevronForward, logoWhatsapp } from "ionicons/icons";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import Header from "../components/Header";
import { NolicorpTeam } from "../components/data";

function Services() {
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
                  <IonCol>
                    <div className={`text-center`}>
                      <img
                        alt={`banner image nolicorp`}
                        style={{ maxHeight: `70vh` }}
                        src={local_images.rollup}
                      />
                    </div>
                  </IonCol>
                  <IonCol className={`ion-align-self-center`}>
                    <div className="ion-padding">
                      <h1>
                        <b> Nolicorp Services</b>
                      </h1>
                      <h3>We offer a huge Range Of Servcices</h3>
                      <IonNote>
                        Do not deny yourself the pleasure of having the best
                        quality prints
                      </IonNote>
                    </div>
                  </IonCol>
                </IonRow>
              </IonCol>
              <IonCol></IonCol>
            </IonRow>
            <div className="divider"></div>

            <IonToolbar color={`light`}>
              <div className="divider"></div>
              <IonRow>
                <IonCol></IonCol>
                <IonCol size={`12`} sizeSm={`11`} sizeMd={`10`}>
                  <section className="services">
                    <h2 className={``}>Large Scale Printing</h2>

                    <p>
                      <br />
                      <br />
                      {/* <h3 className={`heading`}>LARGE FORMAT PRINTING</h3>
                                            <p>
                                                We have the latest state of the art machines for large format printing.
                                                With us you can print on any format, on any surface and even 3D printing
                                            </p> */}
                      <IonRow>
                        {services.map((serv) => (
                          <IonCol
                            size={`12`}
                            sizeSm={`12`}
                            sizeMd={`6`}
                            sizeLg={`4`}
                          >
                            <ServiceCard serv={serv}></ServiceCard>
                          </IonCol>
                        ))}
                        <IonCol
                          className={`ion-align-self-center`}
                          size={`12`}
                          sizeSm={`12`}
                          sizeMd={`6`}
                          sizeLg={`4`}
                        >
                          <IonCard className={`text-center`} mode={`ios`}>
                            <IonCardContent>
                              <IonCardSubtitle>
                                ORDER FOR YOUR OWN
                              </IonCardSubtitle>
                              <br />
                              <br />
                              <IonFabButton
                                style={{ margin: `auto` }}
                                color={`dark`}
                              >
                                <IonIcon icon={chevronForward}></IonIcon>
                              </IonFabButton>
                            </IonCardContent>
                          </IonCard>
                        </IonCol>
                      </IonRow>
                    </p>
                    <div className="divider"></div>
                    <h2 className={``}>Large Size Printing</h2>
                    <p>
                      At Nolicorp we provide tons of services. few of our
                      printing services include
                    </p>
                    <p>
                      <br />
                      <br />
                      {/* <h3 className={`heading`}>LARGE FORMAT PRINTING</h3>
                                            <p>
                                                We have the latest state of the art machines for large format printing.
                                                With us you can print on any format, on any surface and even 3D printing
                                            </p> */}
                      <IonRow>
                        {services.map((serv) => (
                          <IonCol
                            size={`12`}
                            sizeSm={`12`}
                            sizeMd={`6`}
                            sizeLg={`4`}
                          >
                            <ServiceCard serv={serv}></ServiceCard>
                          </IonCol>
                        ))}
                        <IonCol
                          className={`ion-align-self-center`}
                          size={`12`}
                          sizeSm={`12`}
                          sizeMd={`6`}
                          sizeLg={`4`}
                        >
                          <IonCard className={`text-center`} mode={`ios`}>
                            <IonCardContent>
                              <IonCardSubtitle>
                                ORDER FOR YOUR OWN
                              </IonCardSubtitle>
                              <br />
                              <br />
                              <IonFabButton
                                style={{ margin: `auto` }}
                                color={`dark`}
                              >
                                <IonIcon icon={chevronForward}></IonIcon>
                              </IonFabButton>
                            </IonCardContent>
                          </IonCard>
                        </IonCol>
                      </IonRow>
                    </p>
                    <div className="divider"></div>
                    <h2 className={``}>Past Questions</h2>

                    <p>
                      <br />
                      <br />
                      {/* <h3 className={`heading`}>LARGE FORMAT PRINTING</h3>
                                            <p>
                                                We have the latest state of the art machines for large format printing.
                                                With us you can print on any format, on any surface and even 3D printing
                                            </p> */}
                      <IonRow>
                        {services.map((serv) => (
                          <IonCol
                            size={`12`}
                            sizeSm={`12`}
                            sizeMd={`6`}
                            sizeLg={`4`}
                          >
                            <ServiceCard serv={serv}></ServiceCard>
                          </IonCol>
                        ))}
                        <IonCol
                          className={`ion-align-self-center`}
                          size={`12`}
                          sizeSm={`12`}
                          sizeMd={`6`}
                          sizeLg={`4`}
                        >
                          <IonCard className={`text-center`} mode={`ios`}>
                            <IonCardContent>
                              <IonCardSubtitle>
                                ORDER FOR YOUR OWN
                              </IonCardSubtitle>
                              <br />
                              <br />
                              <IonFabButton
                                style={{ margin: `auto` }}
                                color={`dark`}
                              >
                                <IonIcon icon={chevronForward}></IonIcon>
                              </IonFabButton>
                            </IonCardContent>
                          </IonCard>
                        </IonCol>
                      </IonRow>
                    </p>
                  </section>
                </IonCol>
                <IonCol></IonCol>
              </IonRow>
            </IonToolbar>
          </IonGrid>
          <div className="divider"></div>
        </div>
        <Footer></Footer>
      </IonContent>
    </IonPage>
  );
}

export default Services;

const services = [
  {
    img: local_images.tshirt,
    name: `Rollups & Backdrops`,
  },
  {
    img: local_images.tshirt,
    name: `Banners`,
  },
  {
    img: local_images.tshirt,
    name: `Light Boards`,
  },
  {
    img: local_images.tshirt,
    name: `BillBoard`,
  },
  {
    img: local_images.tshirt,
    name: `BillBoard`,
  },
  {
    img: local_images.tshirt,
    name: `BillBoard`,
  },
];

const team = [
  {
    name: `Kiliamo`,
    position: `Employee`,
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam ratione alias `,
    photo: local_images.person,
  },
  {
    name: `Kylian Mbappe`,
    position: `Employee`,
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam ratione alias `,
    photo: local_images.person,
  },
  {
    name: `Denzel Washinton`,
    position: `Employee`,
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam ratione alias `,
    photo: local_images.person,
  },
  {
    name: `Will Smith`,
    position: `Employee`,
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam ratione alias `,
    photo: local_images.person,
  },
  {
    name: `Mr Bones`,
    position: `Employee`,
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam ratione alias `,
    photo: local_images.person,
  },
  {
    name: `Christopher Chance`,
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam ratione alias `,
    position: `Employee`,
    photo: local_images.person,
  },
];
