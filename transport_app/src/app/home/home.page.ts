import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButton, AlertController, IonCard, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonLabel, IonItem, IonAvatar, IonBadge, IonGrid, IonRow, IonCol, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { IonMenuButton } from '@ionic/angular/standalone';
import { GestionEtudiantService } from '../services_etudiant/gestion-etudiant.service';
import { Etudiant } from '../model/etudiantModel';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButtons, IonMenuButton, IonCol, IonRow, IonGrid, IonBadge, IonAvatar, IonItem, IonLabel, IonList, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCard, IonButton, IonFooter, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  constructor(private alertcontrl: AlertController, private etudiantServ: GestionEtudiantService) {
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
  listEtudiant: Etudiant[] = this.etudiantServ.afficheAll();
  listFiveFirst: Etudiant[] = this.etudiantServ.fiveFirst();

}
