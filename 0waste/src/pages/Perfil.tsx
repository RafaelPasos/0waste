import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Alertas.css';
import lgolgo from '../assets/img/logo2.png'
import Lottie from "lottie-react";
import bulletproduct from "../assets/lotties/bulletlowrisk.json";
import alert from "../assets/lotties/prof3.json";
const Perfil: React.FC = () => {
  return (
	<IonPage>
		<IonContent fullscreen>
			<div className={"marginDiv"}>
				<div className={"tollbarcustomDiv"}>
					<div className={"logodiv"}>
						<img src={lgolgo}  alt="Ionic logo" />
					</div>
					<label className={"InicioTitle"}>Perfil</label>
				</div>
				<div className={"alertlottieDiv"}>
					<Lottie animationData={alert} loop={true}/>
				</div>
				<label className={"InicioSubTitleNoMargin"}>Nombre</label>
				<IonCard>
					<IonCardContent >
						<div className="cardItemProdDiv">
							<div className={"alertBubbleDiv"}>
								<Lottie animationData={bulletproduct} />
							</div>
							<label className={"productName"}>Username</label>
						</div>
					</IonCardContent>
				</IonCard>
				<label className={"InicioSubTitleNoMargin"}>Email</label>
				<IonCard>
					<IonCardContent >
						<div className="cardItemProdDiv">
							<div className={"alertBubbleDiv"}>
								<Lottie animationData={bulletproduct} />
							</div>
							<label className={"productName"}>user@examplemail.com</label>
						</div>
					</IonCardContent>
				</IonCard>
				<IonButton href={'/register'}>Cerrar sesion</IonButton>
				<IonButton href={'/login'}>Ir a login</IonButton>
				<IonButton href={'/register'}>Ir a registro</IonButton>
			</div>
		</IonContent>
	</IonPage>
  );
};

export default Perfil;
