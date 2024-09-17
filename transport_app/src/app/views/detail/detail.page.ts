import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonMenuButton, IonHeader, IonTitle, IonToolbar, IonTabBar, IonTabButton, IonTabs, IonIcon, IonLabel, IonBackButton, IonButton, IonButtons } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonButtons, IonMenuButton, IonButton, RouterLink, IonBackButton, IonLabel, IonIcon, IonTabs, IonTabButton, IonTabBar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetailPage implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
