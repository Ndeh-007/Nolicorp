import React from 'react'

import { IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonRow, IonToolbar } from '@ionic/react'
import { callOutline, homeOutline, mailOutline, peopleOutline } from 'ionicons/icons'

function Footer() {
    return (
        <>
            
            <IonToolbar color={`dark`}>
                <IonToolbar color={`none`}>
                    <IonButton mode={`ios`} color={`light`} fill={`clear`} disabled>
                        <IonLabel>Nolicorp</IonLabel>
                    </IonButton>
                </IonToolbar>
                <IonGrid>
                    <IonRow>
                        <IonCol size={`12`} sizeSm={`6`} sizeMd={`4`}>
                            <h4>Quick Links</h4>
                            <IonItem button color={`none`} lines={`none`}>
                                <small>About Us</small>
                            </IonItem>
                            <IonItem button color={`none`} lines={`none`}>
                                <small>Services</small>
                            </IonItem>
                            <IonItem button color={`none`} lines={`none`}>
                                <small>Schools</small>
                            </IonItem>
                        </IonCol>

                        <IonCol>
                            <br />
                            <br />
                            <h4>Contact Us</h4>
                            <IonItem button color={`none`} lines={`none`}>
                                <IonIcon slot={`start`} icon={mailOutline}></IonIcon>
                                <small>support@nolicorp.com</small>
                            </IonItem>
                            <IonItem target={`__blank`} href={`https://wa.me/+237674451988`} button color={`none`} lines={`none`}>
                                <IonIcon slot={`start`} icon={callOutline}></IonIcon>
                                <small>+237 6 74 45 19 88</small>
                            </IonItem>
                            <IonItem button color={`none`} lines={`none`}>
                            <IonIcon slot={`start`} icon={homeOutline}></IonIcon>
                                <small>Nolicorp, SW Buea, CMR</small>
                            </IonItem>
                            <IonItem button color={`none`} lines={`none`}>
                            <IonIcon slot={`start`} icon={peopleOutline}></IonIcon>
                                <small>Team</small>
                            </IonItem>
                            <IonItem button color={`none`} lines={`none`}>
                                <small></small>
                            </IonItem>
                        </IonCol>
                        <IonCol>

                            <h4>SignUp to Our Special NewSletter</h4>
                            <IonToolbar className={`ion-padding`} color={`medium`}>
                                <IonItem button color={`none`}  >
                                    <IonLabel position={`floating`}>Enter Email</IonLabel>
                                    <IonInput></IonInput>
                                </IonItem>
                                <IonToolbar color={`none`} style={{ textAlign: `center` }}>
                                    <IonButton color={`dark`} shape={`round`} >
                                        Subscribe
                   </IonButton>
                                </IonToolbar>
                            </IonToolbar>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonToolbar>
        </>
    )
}

export default Footer
