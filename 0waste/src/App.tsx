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
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Inicio';
import Tab2 from './pages/Alertas';
import Tab3 from './pages/Productos';
import AppContent from './pages/AppContent'
import Login from './pages/Login'
import Register from './pages/Register'

import AuthProvider from './context/AuthProvider'
import context from './context/AuthProvider'

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
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
            <AuthProvider source={""}>
              <Route exact path="/">
                <AppContent></AppContent>
              </Route>
              <Route exact path="/Alertas">
                <AppContent></AppContent>
              </Route>
              <Route exact path="/Inicio">
                <AppContent></AppContent>
              </Route>
              <Route exact path="/Productos">
                <AppContent></AppContent>
              </Route>
              <Route exact path="/Perfil">
                <AppContent></AppContent>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/register">
                <Register></Register>
              </Route>
            </AuthProvider>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
