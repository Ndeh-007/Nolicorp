import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
  } from '@ionic/react';
  
  import { useLocation } from 'react-router-dom';
  import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, images, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, peopleSharp, settings, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
  import '../style/page_styles/Menu.css';
  
  interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
  }
  
  const appPages: AppPage[] = [
    {
      title: 'Services',
      url: '/admin/Services',
      iosIcon: settings,
      mdIcon: settings
    },
    {
      title: 'Team',
      url: '/admin/Team',
      iosIcon: peopleSharp,
      mdIcon: peopleSharp
    },
    {
      title: 'Products',
      url: '/admin/Products',
      iosIcon: images,
      mdIcon: images
    },
    {
      title: 'Orders',
      url: '/admin/Orders',
      iosIcon: archiveOutline,
      mdIcon: archiveSharp
    }, 
  ];
   
  
  const AdminMenu: React.FC = () => {
    const location = useLocation();
  
    return (
      <IonMenu contentId="admin" type="overlay" menuId='admin'>
        <IonContent >
          <IonList id="inbox-list">
            <IonListHeader >Nolicorp</IonListHeader>
            <IonNote >Administrator Panel</IonNote><br />
            {/* <IonNote><a href="https://nolicorp.web.app">nolicorp.web.app</a></IonNote> */}
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem   className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
   
        </IonContent>
      </IonMenu>
    );
  };
  
  export default AdminMenu;
  