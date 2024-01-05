import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-contentsidenav',
  templateUrl: './contentsidenav.component.html',
  styleUrl: './contentsidenav.component.scss'
})
export class ContentsidenavComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  isExpanded: boolean = false;

  openAll(open: boolean) {
    this.isExpanded = open;

    if (open)
      this.accordion.openAll()
    else
      this.accordion.closeAll();
  }
}
