import { Injectable } from '@angular/core';
import { Etudiant } from '../model/etudiantModel';


@Injectable({
  providedIn: 'root'
})
export class GestionEtudiantService {
  tabEtudiant: Etudiant[]  = [
    {
      nom: "NGANDJUI",
      prenom: "Ivan",
      classe: "ISI 4",
      note: [10, 0, 12, 1],
      moyenne: 0,
      photo: "assets/NGANDJUI_Id"
    },
    {
      nom: "NGUEMNIN",
      prenom: "Alex",
      classe: "ISI 4",
      note: [10, 11, 12, 1],
      moyenne: 0,
      photo: "assets/NGANDJUI_Id"
    },
    {
      nom: "LAIKI",
      prenom: "Palai",
      classe: "ISI 4",
      note: [20, 0, 12, 1],
      moyenne: 0,
      photo: "assets/NGANDJUI_Id"
    },
    {
      nom: "BAFA'A",
      prenom: "Cedrick",
      classe: "ISI 4",
      note: [10, 10, 12, 1],
      moyenne: 0,
      photo: "assets/NGANDJUI_Id"
    },
    {
      nom: "NEUGANG",
      prenom: "Jordan",
      classe: "ISI 4",
      note: [10, 20, 12, 1],
      moyenne: 0,
      photo: "assets/NGANDJUI_Id"
    },
    {
      nom: "WANDJA",
      prenom: "Romeo",
      classe: "ISI 4",
      note: [10, 0, 12, 1],
      moyenne: 0,
      photo: "assets/NGANDJUI_Id"
    },
    {
      nom: "MANEKOU",
      prenom: "LILA",
      classe: "ISI 4",
      note: [10, 0, 15, 1],
      moyenne: 0,
      photo: "assets/NGANDJUI_Id"
    },
    {
      nom: "DIKONGUE",
      prenom: "Styve",
      classe: "ISI 4",
      note: [10, 20, 16, 1],
      moyenne: 0,
      photo: "assets/NGANDJUI_Id"
    },
    {
      nom: "MANGA",
      prenom: "John",
      classe: "ISI 4",
      note: [20, 20, 12, 12],
      moyenne: 0,
      photo: "assets/NGANDJUI_Id"
    },
    {
      nom: "MABOAN",
      prenom: "Alex",
      classe: "ISI 4",
      note: [10, 9, 4, 1],
      moyenne: 0,
      photo: "assets/NGANDJUI_Id"
    }

  ]
  constructor() { }
  afficheAll(): Etudiant[] {
    const tab1 = this.tabEtudiant;
    tab1.forEach((etudiant) => etudiant.moyenne = this.calculMoy(etudiant.note))
    return tab1;
  }
  calculMoy(tabNote: number[]) {

    const moy:number = tabNote.reduce((acc:number, note:number) => acc + note,0);
    return moy / tabNote.length;
  }
  fiveFirst(): Etudiant[] {
    const tab = this.tabEtudiant;
    tab.forEach((etudiant) => etudiant.moyenne = this.calculMoy(etudiant.note))
    return tab.sort((a, b) => b.moyenne - a.moyenne).slice(0, 5)
  }
}
