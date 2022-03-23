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
import {
  add,
  addCircle,
  closeCircle,
  closeOutline,
  personAddSharp,
  trash,
  trashBin,
} from "ionicons/icons";
import React, { useRef, useState } from "react";
import { NolicorpTeam, Team } from "../components/data";
import "./Admin.css";

const AdminTeamPage: React.FC = () => {
  const pictureInput = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null | undefined>("");
  const [addNewMemberModal, setAddNewMemberModal] = useState(false);

  function deleteMember(name: string) {
    let res = window.confirm(`Delete ${name} from the nolicorp team?`);
    if (res) {
      alert(name + "deleted successfully");
    }
  }

  function addTeamMember() {
    console.log("cliecked");
  }

  return (
    <div className="ion-padding-top ion-margin-top" >
      <div className="tag">
        <IonTitle size="large">Statistics</IonTitle>
      </div>
      <IonRow className="ion-padding">
        <IonCol size={`12`} sizeSm={`6`} sizeMd={`6`} sizeLg={`3`}>
          <div className='card'>
            <IonCardHeader>
              <IonCardTitle>
                Employee Count
                <div className="ion-float-right">8</div>
              </IonCardTitle>
            </IonCardHeader>
          </div>
        </IonCol>
        <IonCol size={`12`} sizeSm={`6`} sizeMd={`6`} sizeLg={`3`}>
          <div className='card'>
            <IonCardHeader>
              <IonCardTitle>
                Interns
                <div className="ion-float-right">3</div>
              </IonCardTitle>
            </IonCardHeader>
          </div>
        </IonCol>
        <IonCol size={`12`} sizeSm={`6`} sizeMd={`6`} sizeLg={`3`}>
          <div
            color="medium"
            role={`buttton`}
            className="ion-text-center ion-activatable ripple-parent card "
            onClick={() => {
              setAddNewMemberModal(true);
            }}
          >
            <IonRippleEffect></IonRippleEffect>
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={personAddSharp}></IonIcon> &nbsp; Add New Team
                Member
              </IonCardTitle>
            </IonCardHeader>
          </div>
        </IonCol>
      </IonRow>
      <div className="tag">
        <IonTitle size="large">Team Members</IonTitle>
      </div>

      <IonRow  >
        {NolicorpTeam.map((member, index) => {
          return (
            <IonCol
              key={index}
              size={`12`}
              sizeSm={`6`}
              sizeMd={`6`}
              sizeLg={`3`}
            >
              <div className='card'  >
                <img style={{height:'300px', width:'100%','objectFit':'cover','objectPosition':'0% 0'}} src={member.photo}></img>
                <IonCardContent>
                  <IonCardTitle>{member.name}</IonCardTitle>
                  <IonCardSubtitle>
                    {member.position}{" "}
                    <div className="ion-float-right ion-padding-bottom">
                      <IonButtons>
                        <IonButton
                          shape="round"
                          className="ion-no-margin ion-no-padding"
                          onClick={() => {
                            deleteMember(NolicorpTeam[index].name);
                          }}
                        >
                          <IonIcon color="danger" icon={trash}></IonIcon>
                        </IonButton>
                      </IonButtons>
                    </div>
                  </IonCardSubtitle>
                </IonCardContent>
              </div>
            </IonCol>
          );
        })}
      </IonRow> 

      <IonModal
        isOpen={addNewMemberModal}
        onDidDismiss={() => {
          setAddNewMemberModal(false);
        }}
      >
        <IonList>
          <IonItem lines="none">
            <IonTitle className="ion-text-center ion-padding-vertical">Add New Member</IonTitle>
            <IonButton shape="round" fill="clear" size="large" className="ion-padding-end ion-float-end ion-margin-top"  
                onClick={() => {
                  setAddNewMemberModal(false);
                }}> 
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
            <IonButton type="submit" mode="ios">
              Submit
            </IonButton>
          </IonCol>
        </IonRow>
      </IonModal>
    </div>
  );
};

export default AdminTeamPage;
