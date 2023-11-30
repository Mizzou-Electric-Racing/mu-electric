import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit() {
    const script = this.renderer.createElement('script');
    script.src = '../JS/navbar.js';
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(this.el.nativeElement, script);
  }
  
  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  closeMenu() {
    this.menuActive = false;
  }

  goToHome() {
    window.location.href = "/";
  }
}
