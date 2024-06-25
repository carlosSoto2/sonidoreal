import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-area-four',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './about-area-four.component.html',
  styleUrl: './about-area-four.component.scss'
})
export class AboutAreaFourComponent {

  @ViewChild('activeRef') activeRef!: ElementRef<HTMLElement>;
  @ViewChild('productTabMarker') productTabMarker!: ElementRef;
  public active_tab: string = 'myself';

  constructor(private renderer: Renderer2) {};

  handleActiveMarker(event: Event, tab: string): void {
    this.active_tab = tab;
    const marker = this.productTabMarker.nativeElement;
    if (marker && event.target) {
      setTimeout(() => {
        marker.style.left = (event.target as HTMLButtonElement).offsetLeft + "px";
        marker.style.width = (event.target as HTMLButtonElement).offsetWidth + "px";
      },0);
    }
  }


  ngAfterViewInit() {
      setTimeout(() => {
        const marker = this.productTabMarker;
        const active = this.activeRef;
        console.log('active ref', active,'marker', marker)
        if (marker && active) {
          console.log('active ref', active.nativeElement,'marker', marker.nativeElement)

            marker.nativeElement.style.left = active.nativeElement.offsetLeft + "px";
            marker.nativeElement.style.width = active.nativeElement.offsetWidth + "px";
        }
      },500)
  }


}
