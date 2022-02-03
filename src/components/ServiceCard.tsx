import React, { useState } from 'react'
import { IonButton, IonCard, IonCardContent, IonCardTitle, IonContent, IonIcon, IonImg, IonPopover, IonToolbar } from '@ionic/react'
import {  logoWhatsapp} from "ionicons/icons";

 

function ServiceCard(props:{serv:{img:string, name:string}}) {
    const {serv} = props;

    const [showPop, setshowPop] = useState(false)

    return (
        <IonCard className={`col-card`} mode={`ios`}>
            <IonImg src={serv.img}></IonImg>
            <IonCardContent>
                <IonCardTitle>{serv.name}</IonCardTitle>
            </IonCardContent>
            <IonPopover onDidDismiss={()=>setshowPop(false)} isOpen={showPop}>
                <IonContent>
                    <IonCardContent className={`text-center`}>
                        <IonIcon color={`dark`} size={`large`} icon={logoWhatsapp} ></IonIcon>
                    </IonCardContent>
                    <IonToolbar className={`text-center`}>
                        <IonButton target={`__blank`} href={`https://wa.me/+237674451988`} color={`danger`}>Order for a banner</IonButton>
                    </IonToolbar>
                </IonContent>
            </IonPopover>
        </IonCard>
    )
}

export default ServiceCard
