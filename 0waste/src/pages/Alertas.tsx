import { IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonInput, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Alertas.css';
import logo from '../assets/img/logo.png'

import Lottie from "lottie-react";
import alert from "../assets/lotties/belly.json";
import lgolgo from '../assets/img/logo2.png'
import bullethighrisk from "../assets/lotties/bullethigh.json";
import bulletmediumrisk from "../assets/lotties/bulletmedium.json";
import bulletlowrisk from "../assets/lotties/bulletlow.json";
import React, { useState } from 'react';
import { addCircle, closeCircle, closeCircleOutline } from 'ionicons/icons';

import 'react-daypicker/lib/DayPicker.css';
import DayPicker from 'react-daypicker';

const Tab2: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const tomorrow = new Date()
    const [text, setText] = useState<string>();
	tomorrow.setDate(tomorrow.getDate() + 1)
	const [diaSeleccionado, setDiaSeleccionado] = useState(tomorrow)
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
                <IonModal isOpen={showModal} cssClass='my-custom-class'>
                    <div className={"headerModal"}>
                        <label className={"lblmodal"}>Alimento</label>
                        <IonIcon icon={closeCircleOutline} className={"iconModalClose"} onClick={() => setShowModal(false)}></IonIcon>
                    </div>
                    <IonInput value={text} placeholder="Nombre del producto" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    <label className={"lblmodal"}>Fecha de expiracion</label>
                    <DayPicker
                        monthNames={["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]}
                        shortDayNames={["Lun","Mar","Mie","Jue","Vie","Sab","Dom"]}
                        longDayNames={["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]}
                        active={diaSeleccionado}
                        onDayClick={(day) => 
                            {
                                if (day > new Date())
                                {
                                    setDiaSeleccionado(day)
                                }
                            }}
                        />
                    <IonButton onClick={() => setShowModal(false)}>Agregar Alarma</IonButton>
                </IonModal>
                <div className={"tollbarcustomDiv"}>
                    <div className={"logodiv"}>
                        <img src={lgolgo}  alt="Ionic logo" />
                    </div>
                    <label className={"InicioTitle"}>Alertas</label>
                </div>


                <div className={"alertlottieDiv"}>
                    <Lottie animationData={alert} loop={true}/>
                </div>
                <div >
                    <IonButton className={"btnNewAlarm"} onClick={()=>setShowModal(true)}><IonIcon icon={addCircle}></IonIcon></IonButton>
                </div>

                <label className={"InicioSubTitleNoMargin"}>Alertas registradas</label>
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

export default Tab2;
