import React, { useEffect, useRef, useState } from "react";
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
  useIonViewDidEnter,
} from "@ionic/react";
import "../style/widgets/header.css";
import "../style/page_styles/home.css";
import { local_images } from "../images/images";
import { chevronForward, logoWhatsapp } from "ionicons/icons";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import Header from "../components/Header";
import { useParams } from "react-router";
import { NolicorpTeam, Team } from "../components/data";

function TeamDetail() {
  const params: any = useParams();
  const [member, setmember] = useState<Team | null>();
  const memberRef = useRef<HTMLIonRowElement>(null);

  useEffect(() => { 
    if (params.name) { 
      const persons = NolicorpTeam.filter(
        (member) => member.name == params.name
      );
      const person = persons.length > 0 ? persons[0] : null;
      setmember(person);
    }
  }, [params]);
  useIonViewDidEnter(() => {
    memberRef.current?.scrollIntoView({ behavior: `smooth` });
  });
  return (
    <IonPage>
      <Header></Header>
      <IonContent>
        <div className="content">
          <br></br>
          <IonGrid style={{ padding: 0, margin: 0 }}>
            <IonRow style={{ padding: 0, margin: 0 }}>
              <IonCol></IonCol>
              <IonCol
                style={{ padding: 0, margin: 0 }}
                size={`12`}
                sizeSm={`11`}
                sizeMd={`10`}
              >
                <IonRow ref={memberRef}>
                  <IonCol>
                    <div className={`text-center`}>
                      <img
                        alt={`banner image nolicorp`}
                        style={{ maxHeight: `70vh` }}
                        src={member?.photo}
                      />
                    </div>
                  </IonCol>
                  <IonCol
                    size={`12`}
                    sizeMd={`6`}
                    className={`ion-align-self-center`}
                  >
                    <div className="ion-padding">
                      <h1>
                        <b>{member?.name}</b>
                      </h1>
                      <h3>{member?.position}</h3>
                      {member?.description.map((desc, index) => (
                        <p key={index}>{desc}</p>
                      ))}
                    </div>
                  </IonCol>
                </IonRow>
              </IonCol>
              <IonCol></IonCol>
            </IonRow>
            <IonToolbar>
              <div className="divider"></div>
              <IonRow>
                <IonCol></IonCol>
                <IonCol size={`12`} sizeSm={`11`} sizeMd={`10`}>
                  <section className="team">
                    <h2 className={`heading`}>OTHER NOLICORP TEAM MEMBERS</h2>
                    <p>
                      At Nolicorp we Hire the best proffessionals to work on the
                      needs of our amazing clients
                    </p>
                    <br />
                    <br />
                    <IonRow>
                      {NolicorpTeam.map((m, index) => {
                        if (m.name === member?.name) return;
                        return (
                          <IonCol
                            key={index}
                            size={`12`}
                            sizeSm={`6`}
                            sizeMd={`6`}
                            sizeLg={`4`}
                          >
                            <IonCard
                              routerLink={`/team/${m.name}`}
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
                                src={m.photo}
                              ></img>
                              <IonCardContent className={`capitalize`}>
                                <IonCardTitle>{m.name}</IonCardTitle>
                                <IonCardSubtitle>{m.position}</IonCardSubtitle>
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
                        );
                      })}
                    </IonRow>
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

export default TeamDetail;

const services = [
  {
    img: local_images.banner,
    name: `Rollups & Backdrops`,
  },
  {
    img: local_images.banner,
    name: `Banners`,
  },
  {
    img: local_images.banner,
    name: `Light Boards`,
  },
  {
    img: local_images.banner,
    name: `BillBoard`,
  },
  {
    img: local_images.banner,
    name: `BillBoard`,
  },
  {
    img: local_images.banner,
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
