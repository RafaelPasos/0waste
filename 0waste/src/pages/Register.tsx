import { IonButton, IonButtons, IonCol, IonContent, IonFooter, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { image } from 'ionicons/icons';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import logo from '../assets/img/logo.png'

const Login: React.FC = () => {

    const [username, setUsername] = useState<string>();
    const [pass, setPass] = useState<string>();

  return (
    <> 
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>Registro</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <div className="login-logo">
                <img src={logo} alt="Ionic logo" />
            </div>
            <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput value={username} onIonChange={e => setUsername(e.detail.value?.toString)}></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput value={pass} onIonChange={e => setUsername(e.detail.value?.toString)}></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Confirmar contraseña</IonLabel>
                <IonInput value={pass} onIonChange={e => setUsername(e.detail.value?.toString)}></IonInput>
            </IonItem>
            <IonRow>
                <IonCol>
                    <IonButton routerLink="/" type="submit" expand="block">Registrarse</IonButton>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonButton routerLink="/" color="light" expand="block">Cancelar</IonButton>
                </IonCol>
            </IonRow>
        </IonContent>
        <IonFooter>
            
        </IonFooter>
    </>
  );
};

export default Login;