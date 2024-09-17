import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.page.html',
  styleUrls: ['./etudiant.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EtudiantPage implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }
  tabEtudiant = [
    {
      nom: "NGANDJUI",
      prenom: "Ivan",
      classe: "ISI 4",
      note: [11, 15, 3, 16, 16]
    },
    {
      nom: "NGUEMNIN",
      prenom: "Alex",
      classe: "ISI 4",
      note: [17, 15, 3, 16, 16]
    },
    {
      nom: "LAIKI",
      prenom: "Palai",
      classe: "ISI 4",
      note: [11, 15, 13, 16, 16]
    },
    {
      nom: "BAFA'A",
      prenom: "Cedrick",
      classe: "ISI 4",
      note: [11, 15, 3, 2, 16]
    },
    {
      nom: "NEUGANG",
      prenom: "Jordan",
      classe: "ISI 4",
      note: [11, 5, 3, 16, 16]
    },
    {
      nom: "WANDJA",
      prenom: "Romeo",
      classe: "ISI 4",
      note: [11, 0, 3, 16, 16]
    },
    {
      nom: "MANEKOU",
      prenom: "LILA",
      classe: "ISI 4",
      note: [11, 15, 3, 20, 16]
    },
    {
      nom: "DIKONGUE",
      prenom: "Styve",
      classe: "ISI 4",
      note: [11, 15, 13, 10, 16]
    },
    {
      nom: "MANGA",
      prenom: "John",
      classe: "ISI 4",
      note: [20, 20, 3, 3, 16]
    },
    {
      nom: "MABOAN",
      prenom: "Alex",
      classe: "ISI 4",
      note: [12, 15, 19, 4, 16]
    }
  ]
}
