import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Alertas.css';

const Perfil: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonTitle>Perfil</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <ExploreContainer name="Perfil info" />
        </IonContent>
    </IonPage>
  );
};

export default Perfil;
