import React from 'react'
import { IonButton, IonButtons, IonCol, IonGrid, IonLabel, IonMenuButton, IonRow, IonToolbar } from '@ionic/react'
import { useLocation } from 'react-router';

function Header() {
    const location = useLocation()

    function matchPath(ref_path: string): boolean {
        ref_path=ref_path.toLowerCase();
        const path = location.pathname.toLowerCase();

        if(path.match(ref_path)){ 
            return true
        }
        return false;
    }
    return (
        <IonToolbar color={`dark`} className={`header`}>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <div className="logo-container">
                            <IonLabel>Nolicorp.org</IonLabel>
                        </div>
                    </IonCol>
                    <IonCol></IonCol>
                    <IonCol className={`web`}>
                        <div className="links-container">
                            <IonButtons>
                                <IonButton routerLink={`/home`} color={matchPath(`home`)?`danger`:`light`}>
                                    Home
                        </IonButton>
                                <IonButton routerLink={`/services`} color={matchPath(`service`)?`danger`:`light`}>
                                    Services
                        </IonButton>
                                <IonButton routerLink={`/about`} color={matchPath(`about`)?`danger`:`light`}>
                                    About
                        </IonButton>
                                <IonButton routerLink={`/team`} color={matchPath(`team`)?`danger`:`light`}>
                                    Team
                        </IonButton>
                                <IonButton routerLink={`/school`} color={matchPath(`school`)?`danger`:`light`}>
                                    Schools
                        </IonButton>
                            </IonButtons>
                        </div>
                    </IonCol>
                    <IonCol></IonCol>
                    <IonCol>
                        <IonMenuButton className={`mobile`} autoHide={false}></IonMenuButton>
                        <IonButton className={`web`} target={`__blank`} href={`https://wa.me/+237674451988`} color={`danger`} shape={`round`}  >Contact Us</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonToolbar>
    )
}

export default Header
