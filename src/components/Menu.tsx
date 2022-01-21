import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/react'
import { bulbOutline, homeOutline, informationCircle, logoWhatsapp, peopleOutline } from 'ionicons/icons'
import React from 'react'

function Menu() {
    return (
        <IonMenu contentId={`main`}>
            <IonHeader>
                <IonToolbar color={`dark`}>
                    <IonTitle>
                        Nolicorp.org
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonToolbar mode={`ios`} style={{ minHeight: `90vh` }} color={`medium`}>
                    <IonMenuToggle>
                        <IonItem routerLink={`/home`} lines={`none`} color={`none`} button >
                            <IonIcon size={`small`} slot={`start`} icon={homeOutline}></IonIcon>
                            <IonLabel>Home</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle>
                        <IonItem routerLink={`/services`} lines={`none`} color={`none`} button >
                            <IonIcon size={`small`} slot={`start`} icon={bulbOutline}></IonIcon>
                            <IonLabel>Services</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle>
                        <IonItem routerLink={`/team`} lines={`none`} color={`none`} button >
                            <IonIcon size={`small`} slot={`start`} icon={peopleOutline}></IonIcon>
                            <IonLabel>Team</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle>
                        <IonItem routerLink={`/about`} lines={`none`} color={`none`} button >
                            <IonIcon size={`small`} slot={`start`} icon={informationCircle} ></IonIcon>
                            <IonLabel>About</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle>
                        <IonItem lines={`none`} color={`none`} button >
                            <IonIcon size={`small`} slot={`start`} icon={logoWhatsapp} ></IonIcon>
                            <IonLabel>Contact Us</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonToolbar>
            </IonContent>
        </IonMenu>
    )
}

export default Menu
