import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonRippleEffect,
  IonRow,
  IonText,
  IonTextarea,
  IonTitle,
} from "@ionic/react";
import { addIcons } from "ionicons";
import {
  add,
  addCircle,
  bagAdd,
  closeCircle,
  closeOutline,
  personAddSharp,
  trash,
  trashBin,
} from "ionicons/icons";
import React, { useRef, useState } from "react";
import { NolicorpTeam, Team } from "../components/data";
import "./Admin.css";

const Services: React.FC = () => {
  const pictureInput = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null | undefined>("");
  const [addNewServiceModal, setAddNewServiceModal] = useState(false);

  function deleteService(name: string) {
    let res = window.confirm(`Delete ${name} from the nolicorp services?`);
    if (res) {
      alert(name + "deleted successfully");
    }
  }

  return (
    <div className="ion-padding-top ion-margin-top">
      <div className="tag bg-secondary">
        <IonTitle size="large">Statistics</IonTitle>
      </div>
      <IonRow className="ion-padding">
        <IonCol size={`12`} sizeSm={`6`} sizeMd={`6`} sizeLg={`3`}>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                Service Count
                <div className="ion-float-right">18</div>
              </IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </IonCol>
        <IonCol size={`12`} sizeSm={`6`} sizeMd={`6`} sizeLg={`3`}>
          <IonCard
            color="medium"
            role={`buttton`}
            className="ion-text-center ion-activatable ripple-parent"
            onClick={() => {
              setAddNewServiceModal(true);
            }}
          >
            <IonRippleEffect></IonRippleEffect>
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={bagAdd}></IonIcon> &nbsp; Add New Service
              </IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </IonCol>
      </IonRow>
      <div className="tag bg-secondary">
        <IonTitle size="large">Services</IonTitle>
      </div>

      <IonRow className="ion-padding">
        {services.map((service, index) => {
          return (
            <IonCol
              key={index}
              size={`12`}
              sizeSm={`6`}
              sizeMd={`6`}
              sizeLg={`3`}
            >
              <IonCard>
                {/* <IonImg src={service.photo}></IonImg> */}
                <IonCardHeader>
                  <IonCardTitle>
                    {service.name}
                    <div className="ion-float-right ion-padding-bottom">
                      <IonButtons>
                        <IonButton
                          shape="round"
                          className="ion-no-margin ion-no-padding"
                          onClick={() => {
                            deleteService(service.name);
                          }}
                        >
                          <IonIcon color="danger" icon={trash}></IonIcon>
                        </IonButton>
                      </IonButtons>
                    </div>
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          );
        })}
      </IonRow>

      <IonModal
        isOpen={addNewServiceModal}
        onDidDismiss={() => {
          setAddNewServiceModal(false);
        }}
      >
        <IonList>
          <IonItem lines="none">
            <IonTitle className="ion-text-center ion-padding-vertical">
              Add New Service
            </IonTitle>
            <IonButton
              shape="round"
              fill="clear"
              color="secondary"
              size="large"
              className="ion-padding-end ion-float-end ion-margin-top"
              onClick={() => {
                setAddNewServiceModal(false);
              }}
            >
              <IonIcon icon={closeOutline} size="large"></IonIcon>
            </IonButton>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Position</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Description</IonLabel>
            <IonTextarea></IonTextarea>
          </IonItem>

          <IonItem lines="none">
            <IonButton
              size="small"
              color="dark"
              slot="start"
              onClick={() => {
                pictureInput.current?.click();
              }}
            >
              Select Picture
            </IonButton>
            <input
              hidden
              ref={pictureInput}
              type={"file"}
              onChange={(e) => {
                let temp = e.target.files;
                setFileName(temp?.item(0)?.name);
                console.log(fileName);
              }}
            ></input>
            <IonText slot="end">
              <h6>{fileName}</h6>
            </IonText>
          </IonItem>
        </IonList>

        <IonRow>
          <IonCol className="ion-text-center ion-margin">
            <IonButton type="submit" mode="ios"
              color="secondary">
              Submit
            </IonButton>
          </IonCol>
        </IonRow>
      </IonModal>
    </div>
  );
};

export default Services;

const services = [
  {
    name: `Rollups & Backdrops`,
  },
  {
    name: `Banners`,
  },
  {
    name: `Light Boards`,
  },
  {
    name: `BillBoard`,
  },
  {
    name: `BillBoard`,
  },
  {
    name: `BillBoard`,
  },
];
