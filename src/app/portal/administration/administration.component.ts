import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
  constructor(private sharedService: SharedService) {}
  selectedMenuItem: string = '';
  

  ngOnInit(): void {
    this.sharedService.updateShowCards(false);
  }

  openContent(menuItem: string) {
    this.selectedMenuItem = menuItem;
  }
}
