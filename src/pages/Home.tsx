import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Router Sample</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Add content here.
      </IonContent>
    </IonPage>
  );
};

export default Home;
