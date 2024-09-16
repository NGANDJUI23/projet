import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButton, AlertController, IonCard, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonLabel, IonItem, IonAvatar, IonBadge, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonBadge, IonAvatar, IonItem, IonLabel, IonList, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCard, IonButton, IonFooter, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  constructor(private alertcontrl: AlertController) {
  }
  async onDialog() {
    const alert = await this.alertcontrl.create(
      {
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'Voolez-vous enregistrer l etudiant ?',
        buttons: [{
          text: 'Non',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm cancel');
          }
        },
        {
          text: 'Oui',
          handler: () => {
            console.log("L'etudiant est valide");
          }
        }
        ]
      }
    );

    await alert.present();
  }
  tabEtudiant = [
    {
      nom: "NGANDJUI",
      prenom: "Ivan",
      classe: "ISI 4"
    },
    {
      nom: "NGUEMNIN",
      prenom: "Alex",
      classe: "ISI 4"
    },
    {
      nom: "LAIKI",
      prenom: "Palai",
      classe: "ISI 4"
    },
    {
      nom: "BAFA'A",
      prenom: "Cedrick",
      classe: "ISI 4"
    },
    {
      nom: "NEUGANG",
      prenom: "Jordan",
      classe: "ISI 4"
    },
    {
      nom: "WANDJA",
      prenom: "Romeo",
      classe: "ISI 4"
    },
    {
      nom: "MANEKOU",
      prenom: "LILA",
      classe: "ISI 4"
    },
    {
      nom: "DIKONGUE",
      prenom: "Styve",
      classe: "ISI 4"
    },
    {
      nom: "MANGA",
      prenom: "John",
      classe: "ISI 4"
    },
    {
      nom: "MABOAN",
      prenom: "Alex",
      classe: "ISI 4"
    },

  ]
}
