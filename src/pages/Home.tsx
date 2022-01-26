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

function Home() {
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
                        <b> Nolicorp</b>
                      </h1>
                      <h3>Your Number one Documentation Company</h3>
                      <IonNote>
                        Do not deny yourself the pleasure of having the best
                        quality prints
                      </IonNote> 
                    </div>
                  </IonCol>
                  <IonCol>
                    <div className={`text-center`}>
                      <img
                        alt={`banner image nolicorp`}
                        style={{ maxHeight: `70vh` }}
                        src={local_images.banner}
                      />
                    </div>
                  </IonCol>
                </IonRow>
              </IonCol>
              <IonCol></IonCol>
            </IonRow>
            <div className="divider"></div>
            <IonToolbar color={`dark`}>
              <IonRow style={{ margin: 0, padding: 0 }}>
                <IonCol style={{ margin: 0, padding: 0 }}>
                  <img
                    alt={``}
                    style={{ height: `100%`, objectFit: `cover` }}
                    src={local_images.ad1}
                  ></img>
                </IonCol>
                <IonCol
                  size={`12`}
                  sizeSm={`8`}
                  sizeMd={`6`}
                  className={`ion-align-self-center `}
                >
                  <section className="services ion-padding">
                    <h2> We have an amazing Customer Service</h2>
                    <p>
                      At Nolicorp we focus on providing our customers with{" "}
                      <b>REAL VALUE</b>. This can be seen in the{" "}
                      <b>Quality of our Prints</b>, <b>Affordability</b>
                      <b>Amazing Customer Service</b>
                    </p>
                    <p>
                      <h5>
                        Working with so many companies, brands and clients over
                        the years we are proud to say we give the very best and
                        we continue to improve
                      </h5>
                    </p>
                  </section>
                </IonCol>
              </IonRow>
            </IonToolbar>

            <IonToolbar color={`light`}>
              <div className="divider"></div>
              <IonRow>
                <IonCol></IonCol>
                <IonCol size={`12`} sizeSm={`11`} sizeMd={`10`}>
                  <section className="services">
                    <h2 className={`heading`}>OUR SERVICES</h2>
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
                                SEE ALL SERVICES
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
              <IonToolbar color={`dark`}>
                <IonRow style={{ margin: 0, padding: 0 }}>
                  <IonCol
                    size={`12`}
                    sizeSm={`8`}
                    sizeMd={`6`}
                    className={`ion-align-self-center `}
                  >
                    <section className="services ion-padding">
                      <h2> We have an amazing Customer Service</h2>
                      <p>
                        At Nolicorp we focus on providing our customers with{" "}
                        <b>REAL VALUE</b>. This can be seen in the{" "}
                        <b>Quality of our Prints</b>, <b>Affordability</b>
                        <b>Amazing Customer Service</b>
                      </p>
                      <p>
                        <h5>
                          Working with so many companies, brands and clients
                          over the years we are proud to say we give the very
                          best and we continue to improve
                        </h5>
                      </p>
                    </section>
                  </IonCol>
                  <IonCol style={{ margin: 0, padding: 0 }}>
                    <img
                      style={{ height: `100%`, objectFit: `cover` }}
                      src={local_images.ad1}
                      alt=""
                    ></img>
                  </IonCol>
                </IonRow>
              </IonToolbar>
              <IonToolbar>
                <div className="divider"></div>
                <IonRow>
                  <IonCol></IonCol>
                  <IonCol size={`12`} sizeSm={`11`} sizeMd={`10`}>
                    <section className="team">
                      <h2 className={`heading`}>OUR TEAM</h2>
                      <p>
                        At Nolicorp we Hire the best proffessionals to work on
                        the needs of our amazing clients
                      </p>
                      <br />
                      <br />
                      <IonRow>
                        {NolicorpTeam.map((member) => (
                          <IonCol
                            size={`12`}
                            sizeSm={`12`}
                            sizeMd={`6`}
                            sizeLg={`4`}
                          >
                            <IonCard
                              routerLink={`/team/${member.name}`}
                              button
                              className={`col-card`}
                              mode={`ios`}
                            >
                              <img
                                style={{
                                  height: `46vh`,
                                  width: `100%`,
                                  objectFit: `cover`,
                                  objectPosition: `0% 0%`,
                                }}
                                src={member.photo}
                              ></img>
                              <IonCardContent className={`capitalize`}>
                                <IonCardTitle>{member.name}</IonCardTitle>
                                <IonCardSubtitle>
                                  {member.position}
                                </IonCardSubtitle>
                                <IonItem button color={`none`} lines={`none`}>
                                  <IonButton
                                    slot={`end`}
                                    fill={`clear`}
                                    color={`medium`}
                                    shape={`round`}
                                  >
                                    More
                                  </IonButton>
                                </IonItem>
                              </IonCardContent>
                            </IonCard>
                          </IonCol>
                        ))}
                      </IonRow>
                    </section>
                    <IonToolbar className={`ion-padding`}>
                      <h2>Geo Location</h2>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15917.081249619378!2d9.2620325!3d4.1671777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b384713e973866!2sNolicorp!5e0!3m2!1sen!2scm!4v1640881201642!5m2!1sen!2scm"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                      ></iframe>
                    </IonToolbar>
                  </IonCol>
                  <IonCol></IonCol>
                </IonRow>
              </IonToolbar>
            </IonToolbar>
          </IonGrid>
          <div className="divider"></div>
        </div>
        <Footer></Footer>
      </IonContent>
    </IonPage>
  );
}

export default Home;

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
    name: `Bill Board`,
  },
  {
    img: local_images.tshirt,
    name: `Bill Board`,
  },
  {
    img: local_images.tshirt,
    name: `Bill Board`,
  },
];
