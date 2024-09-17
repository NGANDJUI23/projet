import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonTitle, IonToolbar, IonContent, IonLabel, IonItem, IonRadio, IonSplitPane } from '@ionic/angular/standalone';
import { IonMenu, IonMenuButton, IonMenuToggle } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonSplitPane, IonRadio, RouterLink, IonItem, IonLabel, IonContent, IonMenuToggle, IonToolbar, IonTitle, IonHeader, IonApp, IonRouterOutlet, IonMenu, IonMenuButton],
})
export class AppComponent {
  constructor() { }
}
