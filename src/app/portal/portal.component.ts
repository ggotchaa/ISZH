import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  //constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
  }

  // openTab(evt: Event, tabName: string): void {
  //   const tabcontent = document.getElementsByClassName('tabcontent');
  //   for (let i = 0; i < tabcontent.length; i++) {
  //     this.renderer.setStyle(tabcontent[i], 'display', 'none');
  //   }

  //   const tablinks = document.getElementsByClassName('tablinks');
  //   for (let i = 0; i < tablinks.length; i++) {
  //     const className = (tablinks[i] as HTMLElement).className.replace(' active', '');
  //     this.renderer.setAttribute(tablinks[i], 'class', className);
  //   }

  //   const element = document.getElementById(tabName);
  //   if (element) {
  //     this.renderer.setStyle(element, 'display', 'block');
  //   }

  //   const currentTarget = evt.currentTarget as unknown as ElementRef;
  //   const classNames = currentTarget.nativeElement.className;
  //   this.renderer.setAttribute(currentTarget.nativeElement, 'class', classNames + ' active');
  // }
}
