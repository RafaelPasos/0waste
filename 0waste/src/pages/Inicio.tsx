import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import './Inicio.css';

import Lottie from "lottie-react";
import bullethighrisk from "../assets/lotties/bullethigh.json";
import bulletmediumrisk from "../assets/lotties/bulletmedium.json";
import bulletlowrisk from "../assets/lotties/bulletlow.json";

import logo from '../assets/img/logo.png'
import lgolgo from '../assets/img/logo2.png'


const Tab1: React.FC = () => {
    const [procentajeok, setprocentajeok] = useState(60);
    const [procentajenotok, setprocentajenotok] = useState(40);

    return (
        <IonPage>
            {
                /*
                <IonHeader className="noborder">
                        <div className="login-toolbar">
                                <img src={logo} alt="Ionic logo" />
                            </div>
                </IonHeader>
                */
            }
            <IonContent fullscreen>
                <div className={"marginDiv"}>
                    <div className={"tollbarcustomDiv"}>
                        <div className={"logodiv"}>
                            <img src={lgolgo}  alt="Ionic logo" />
                        </div>
                        <label className={"InicioTitle"}>Dashboard</label>
                    </div>
                    
                    <label className={"InicioSubTitle"}>Productos</label>
                    <IonCard >
                        <IonCardHeader>
                            <IonCardTitle>19 Productos registrados</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent >
                            <div className="infoResumeDiv">
                                <img src={"https://image-charts.com/chart?chs=750x390&chd=t:"+procentajenotok+","+procentajeok+"&cht=p3&chl=Urgente%7COK&chan&chf=ps0-0,lg,45,f0eb3b,0.2,F00808,1|ps0-1,lg,45,8bc34a,0.2,009688,1"} alt="Ionic logo" />
                                No tienes muchos productos proximos a expriar.{<br></br>} Estás haciendo un buen trabajo!
                            </div>
                        </IonCardContent>
                    </IonCard>
                    <label className={"InicioSubTitle"}>Proximas Alertas</label>
                    <IonCard>
                        <IonCardContent >
                            <div className="cardItemDiv">
                                <div className={"alertBubbleDiv"}>
                                    <Lottie animationData={bullethighrisk} />
                                </div>
                                <label className={"productName"}>Aguacate</label>
                                <label className={"productExpDate"}>mañana.</label>
                            </div>
                        </IonCardContent>
                    </IonCard>
                    <IonCard>
                        <IonCardContent >
                            <div className="cardItemDiv">
                                <div className={"alertBubbleDiv"}>
                                    <Lottie animationData={bullethighrisk} />
                                </div>
                                <label className={"productName"}>Platano</label>
                                <label className={"productExpDate"}>en 2 dias.</label>
                            </div>
                        </IonCardContent>
                    </IonCard>
                    <IonCard>
                        <IonCardContent >
                            <div className="cardItemDiv">
                                <div className={"alertBubbleDiv"}>
                                    <Lottie animationData={bulletmediumrisk} />
                                </div>
                                <label className={"productName"}>Pan bimbo</label>
                                <label className={"productExpDate"}>en 5 dias.</label>
                            </div>
                        </IonCardContent>
                    </IonCard>
                    <IonCard>
                        <IonCardContent >
                            <div className="cardItemDiv">
                                <div className={"alertBubbleDiv"}>
                                    <Lottie animationData={bulletlowrisk} />
                                </div>
                                <label className={"productName"}>Queso Gouda</label>
                                <label className={"productExpDate"}>en 12 dias.</label>
                            </div>
                        </IonCardContent>
                    </IonCard>
                </div>
                
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
