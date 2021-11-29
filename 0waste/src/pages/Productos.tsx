import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Productos.css';
import lgolgo from '../assets/img/logo2.png'
import React, { useState } from 'react';
import { addCircle, closeCircleOutline } from 'ionicons/icons';
import Lottie from "lottie-react";
import 'react-daypicker/lib/DayPicker.css';
import DayPicker from 'react-daypicker';
import bulletproduct from "../assets/lotties/bulletlowrisk.json";
import alert from "../assets/lotties/grocer2.json";
import bulletmediumrisk from "../assets/lotties/bulletmedium.json";
import bulletlowrisk from "../assets/lotties/bulletlow.json";
import { createProduct } from '../services/services';
import { getProductList } from '../services/services';


const Tab3: React.FC = () => {
	const [showModal, setShowModal] = useState(false);
	const tomorrow = new Date()
	const [name, setName] = useState<string>();
	tomorrow.setDate(tomorrow.getDate() + 1)
	const [diaSeleccionado, setDiaSeleccionado] = useState(tomorrow)
	const productos = []

	const crearProducto = async() => 
    {
        await createProduct(name, "2021-01-01").then(async response => {
            //setFailure(false)
            //const reciptData = response as any;
            //const token = reciptData.access_token;
            const resposeToken = response as any;
            //await Storage.set({key: 'token', value: token});
            //console.log(token);
            //console.log(reciptData)
            //console.log(response);
            //goToHome()
            //localStorage.getItem('token')
            //console.log(response)
            //setTimeout(()=>console.log("Access granted"), 6000)
			setShowModal(false)
        })
        .catch(error =>{
            console.log('ERROR' + error);
            //setShowLoading(false)
            //setFailure(true)
			setShowModal(false)
        });
    }

	const getProductos = async() => 
    {
        await getProductList().then(async response => {
            //setFailure(false)
            //const reciptData = response as any;
            //const token = reciptData.access_token;
            const resposeJSON= response as any;
			console.log(resposeJSON);
            //await Storage.set({key: 'token', value: token});
            //console.log(token);
            //console.log(reciptData)
            //console.log(response);
            //goToHome()
            //localStorage.getItem('token')
            //console.log(response)
            //setTimeout(()=>console.log("Access granted"), 6000)
        })
        .catch(error =>{
            console.log('ERROR' + error);
            //setShowLoading(false)
            //setFailure(true)
			setShowModal(false)
        });
    }


	return (
		<IonPage>
			<IonContent fullscreen>
				<div className={"marginDiv"}>
					<IonModal isOpen={showModal} cssClass='my-custom-class'>
						<div className={"headerModal"}>
							<label className={"lblmodal"}>Producto</label>
							<IonIcon icon={closeCircleOutline} className={"iconModalClose"} onClick={() => setShowModal(false)}></IonIcon>
						</div>
						<IonInput value={name} placeholder="Nombre del producto" onIonChange={e => setName(e.detail.value!)}></IonInput>
						
						<IonButton onClick={(event: React.MouseEvent<HTMLElement>) => crearProducto()}>Agregar producto</IonButton>
					</IonModal>
					<div className={"tollbarcustomDiv"}>
						<div className={"logodiv"}>
							<img src={lgolgo}  alt="Ionic logo" />
						</div>
						<label className={"InicioTitle"}>Productos</label>
					</div>


					<div className={"alertlottieDiv"}>
						<Lottie animationData={alert} loop={true}/>
					</div>
					<div >
						<IonButton className={"btnNewAlarm"} onClick={()=>setShowModal(true)}><IonIcon icon={addCircle}></IonIcon></IonButton>
					</div>

					<label className={"InicioSubTitleNoMargin"}>Productos registrados</label>
					<IonCard>
						<IonCardContent >
							<div className="cardItemProdDiv">
								<div className={"alertBubbleDiv"}>
									<Lottie animationData={bulletproduct} />
								</div>
								<label className={"productName"}>Aguacate</label>
							</div>
						</IonCardContent>
					</IonCard>
					<IonCard>
						<IonCardContent >
							<div className="cardItemProdDiv">
								<div className={"alertBubbleDiv"}>
									<Lottie animationData={bulletproduct} />
								</div>
								<label className={"productName"}>Platano</label>
							</div>
						</IonCardContent>
					</IonCard>
					<IonCard>
						<IonCardContent >
							<div className="cardItemProdDiv">
								<div className={"alertBubbleDiv"}>
									<Lottie animationData={bulletproduct} />
								</div>
								<label className={"productName"}>Pan bimbo</label>
							</div>
						</IonCardContent>
					</IonCard>
					<IonCard>
						<IonCardContent >
							<div className="cardItemProdDiv">
								<div className={"alertBubbleDiv"}>
									<Lottie animationData={bulletproduct} />
								</div>
								<label className={"productName"}>Queso Gouda</label>
							</div>
						</IonCardContent>
					</IonCard>
				</div>
			
			</IonContent>
		</IonPage>
	);
};

export default Tab3;
