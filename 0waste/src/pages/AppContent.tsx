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
import { alertCircleOutline, addCircleOutline, homeOutline, person} from 'ionicons/icons';
import Inicio from './Inicio';
import Alertas from './Alertas';
import Productos from './Productos';
import Perfil from './Perfil';

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


const AppContent: React.FC = () => (
    <>
    <IonReactRouter>
      <IonTabs>
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
            <IonIcon icon={homeOutline} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Alertas" href="/Alertas">
            <IonIcon icon={alertCircleOutline} />
            <IonLabel>Alertas</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Productos" href="/Productos">
            <IonIcon icon={addCircleOutline} />
            <IonLabel>Productos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Perfil" href="/Perfil">
            <IonIcon icon={person} />
            <IonLabel>Perfil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    </>
);

export default AppContent;
