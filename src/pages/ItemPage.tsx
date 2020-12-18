import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import { items } from '../data';

interface RouteParams {
  id: string;
}

const ItemPage: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const item = items.find((item) => item.id === id);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{item.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Item details go here.
      </IonContent>
    </IonPage>
  );
};

export default ItemPage;
