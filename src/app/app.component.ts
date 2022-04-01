import { Component, Inject } from '@angular/core';
import * as Helper from './helpers/enum';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import Work from './helpers/work.json';
import Achievements from './helpers/achievements.json';
import Education from './helpers/education.json';
import Interest from './helpers/interest.json';
import Language from './helpers/language.json';
import Referree from './helpers/referree.json';
import Skills from './helpers/skills.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Global Var
  public helper: any = Helper.helper;
  public work: any = Work;
  public achievements: any = Achievements;
  public education: any = Education;
  public interest: any = Interest;
  public language: any = Language;
  public referree: any = Referree;
  public skills: any = Skills;

  constructor() {}

  ngOnInit() {
  }

  // public downloadPDF(): void {
  //   let DATA: any = document.getElementById('pdfTable');
  //   html2canvas(DATA).then((canvas) => {
  //     let fileWidth = 208;
  //     let fileHeight = (canvas.height * fileWidth) / canvas.width;
  //     const FILEURI = canvas.toDataURL('image/png',1.0);
  //     let PDF = new jsPDF('p', 'mm', 'a4', true);
  //     let position = 0;
  //     PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
  //     PDF.save('CV-FARHAN_FAZLI.pdf');
  //   });
  // }

  downloadPDF() {
    window.print();
  }

}
