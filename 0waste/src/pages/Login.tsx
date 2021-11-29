import { IonButton, IonButtons, IonCol, IonContent, IonFooter, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { image } from 'ionicons/icons';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import logo from '../assets/img/logo2.png'
import { login } from '../services/services';
import { useHistory } from "react-router-dom";

//import auth from

const Login: React.FC = () => {
    const history = useHistory();
    const goToHome = () => {
		//window.location.replace('http://localhost:3000/');
		history.push('/')
	}
    const [username, setUsername] = useState<string>();
    const [pass, setPass] = useState<string>();

    const loginUser = async() => 
    {

        await  login(username, pass).then(async response => {
            //setFailure(false)
            //const reciptData = response as any;
            //const token = reciptData.access_token;
            const resposeToken = response as any;
            //await Storage.set({key: 'token', value: token});
            //console.log(token);
            //console.log(reciptData)
            //console.log(response);
            localStorage.setItem('token', resposeToken)
            console.log(localStorage.getItem('token') + "Token guardado");
            goToHome()
            //localStorage.getItem('token')
            //console.log(response)
            //setTimeout(()=>console.log("Access granted"), 6000)
        })
        .catch(error =>{
            console.log('Las credenciales no coinciden con nuestros datos');
            //setShowLoading(false)
            //setFailure(true)
        });
    }

  return (
    <> 
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>Login</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <div className="login-logo">
                <img src={logo} alt="Ionic logo" />
            </div>
            <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput value={username} onIonChange={e => setUsername((e.detail.value!))}></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput type={"password"} value={pass} onIonChange={e => setPass((e.detail.value!))}></IonInput>
            </IonItem>
            <IonRow>
                <IonCol>
                    <IonButton onClick={(event: React.MouseEvent<HTMLElement>) => loginUser()} type="submit" expand="block">Iniciar Sesion</IonButton>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonButton routerLink="/register" color="light" expand="block">Registrarse</IonButton>
                </IonCol>
            </IonRow>
        </IonContent>
        <IonFooter>
            
        </IonFooter>
    </>
  );
};

export default Login;