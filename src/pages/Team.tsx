import React from 'react'
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFabButton, IonFooter, IonGrid, IonIcon, IonImg, IonItem, IonLabel, IonMenuButton, IonNote, IonPage, IonPopover, IonRow, IonToolbar } from '@ionic/react'
import "../style/widgets/header.css";
import "../style/page_styles/home.css";
import { local_images } from "../images/images";
import { chevronForward, logoWhatsapp } from 'ionicons/icons';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import Header from '../components/Header';
import { NolicorpTeam } from '../components/data';


function Team() {
    return (
        <IonPage>
            <Header></Header>
            <IonContent>
                <div className="content">
                    <IonGrid style={{ padding: 0, margin: 0 }}>
                        <IonRow style={{ padding: 0, margin: 0 }}>
                            <IonCol></IonCol>
                            <IonCol style={{ padding: 0, margin: 0 }} size={`12`} sizeSm={`11`} sizeMd={`10`} >
                                {/* <IonRow>
                                    <IonCol className={`ion-align-self-center`}>
                                        <div className="ion-padding">
                                            <h1>
                                                <b> Nolicorp</b>
                                            </h1>
                                            <h3>
                                                Your Number one Documentation Company
                                    </h3>
                                            <IonNote>Do not deny yourself the pleasure of having the best quality prints</IonNote>
                                        </div>
                                    </IonCol>
                                    <IonCol>
                                        <div className={`text-center`}>
                                            <img alt={`banner image nolicorp`} style={{ maxHeight: `70vh` }} src={local_images.banner} />
                                        </div>
                                    </IonCol>
                                </IonRow> */}
                            </IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                        <IonToolbar>
                            <div className="divider"></div>
                            <IonRow>
                                <IonCol></IonCol>
                                <IonCol size={`12`} sizeSm={`11`} sizeMd={`10`} >
                                    <section className="team">
                                        <h2 className={`heading`} >OUR TEAM</h2>
                                        <p>
                                            At Nolicorp we Hire the best proffessionals to work on the needs of our amazing clients
                                              </p>
                                        <br />
                                        <br />
                                        <IonRow>
                                            {
                                                NolicorpTeam.map(m => {
                                                    
                                                    return (<IonCol size={`12`} sizeSm={`6`} sizeMd={`6`} sizeLg={`4`}>
                                                        <IonCard routerLink={`/team/${m.name}`} button className={`col-card`} mode={`ios`}>
                                                            <img style={{ height: `46vh`, width: `100%`, objectFit: `cover`, objectPosition: `0% 0%` }} src={m.photo}></img>
                                                            <IonCardContent className={`capitalize`}>
                                                                <IonCardTitle  >{m.name}</IonCardTitle>
                                                                <IonCardSubtitle>{m.position}</IonCardSubtitle>
                                                                <IonItem button color={`none`} lines={`none`}>
                                                                    <IonButton slot={`end`} fill={`clear`} color={`medium`} shape={`round`}>More</IonButton>
                                                                </IonItem>
                                                            </IonCardContent>
                                                        </IonCard>
                                                    </IonCol>)
                                                })



                                            }
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

        </IonPage >
    )
}

export default Team

