import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonMenuButton, IonHeader, IonTitle, IonToolbar, IonLabel, IonRouterOutlet, IonSplitPane, IonApp, IonItem, IonRow, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonGrid, IonCol, IonFooter } from '@ionic/angular/standalone';
import { GestionEtudiantService } from './../../services_etudiant/gestion-etudiant.service';
import { Etudiant } from './../../model/etudiantModel';
@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
  standalone: true,
  imports: [IonFooter, IonCol, IonGrid, IonList, IonCardSubtitle, IonMenuButton, IonCardTitle, IonCardHeader, IonCard, IonButtons, IonRow, IonItem, IonApp, IonSplitPane, IonRouterOutlet, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})


export class NotePage implements OnInit {

  constructor(private etudiantServ: GestionEtudiantService) { }
  ngOnInit() {
  }
  listEtudiant: Etudiant[] = this.etudiantServ.afficheAll();
}
