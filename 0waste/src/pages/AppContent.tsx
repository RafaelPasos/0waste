import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { alertCircle, addCircle, home, person} from 'ionicons/icons';
import Inicio from './Inicio';
import Alertas from './Alertas';
import Productos from './Productos';
import Perfil from './Perfil';
import React, { useState } from 'react';

import { IonModal, IonButton, IonContent } from '@ionic/react';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */


import logo from '../assets/img/logo.png'
export const AppContent: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const handleTabWillChange = (e: { detail: { tab: string; }; }) => {
      if (e.detail.tab === 'Perf il') {
        setShowModal(true)
      }
    };
    return (
    <>
    <IonReactRouter>
      <IonTabs onIonTabsWillChange={handleTabWillChange}>  
        <IonRouterOutlet>
          <Route exact path="/Inicio">
            <Inicio />
          </Route>
          <Route exact path="/Alertas">
            <Alertas />
          </Route>
          <Route path="/Productos">
            <Productos />
          </Route>
          <Route path="/Perfil">
            <Perfil />
          </Route>
          <Route exact path="/">
            <Redirect to="/Inicio" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Inicio" href="/Inicio">
            <IonIcon icon={home} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Alertas" href="/Alertas">
            <IonIcon icon={alertCircle} />
            <IonLabel>Alertas</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Productos" href="/Productos">
            <IonIcon icon={addCircle} />
            <IonLabel>Productos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Perfil" href="/Perfil"
                                                //setShowModal(true)v>
                                        >
            <IonIcon icon={person}/>
            <IonLabel>Perfil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    </>
    );
};

export default AppContent;






























