import { Component, ElementRef, Renderer2, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  constructor(private sharedService: SharedService, private cdr: ChangeDetectorRef) {}
  
  showCards: boolean = true;

  cardStyle = {
    width: "100%",
    textAlign: "left",
    color: "#77C48D",
    height: "100%",
  };

  ngOnInit(): void {
    this.sharedService.showCards$.subscribe(show => {
      this.showCards = show;
      this.cdr.detectChanges();
    });
  }
}
