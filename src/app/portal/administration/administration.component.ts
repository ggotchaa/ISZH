import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
  selectedMenuItem: string = '';

  ngOnInit(): void {
  }

  openContent(menuItem: string) {
    this.selectedMenuItem = menuItem;
  }
}
