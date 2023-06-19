import { Component, ElementRef, Renderer2, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  showCards: boolean = true;

  constructor(private sharedService: SharedService, private cdr: ChangeDetectorRef) {}


  gridStyle = {
    width: '100%',
    textAlign: 'center'
  };

  ngOnInit(): void {
    this.sharedService.showCards$.subscribe(show => {
      this.showCards = show;
      this.cdr.detectChanges();
    });
  }
}
