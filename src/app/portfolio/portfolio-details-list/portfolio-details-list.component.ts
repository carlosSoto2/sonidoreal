import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterOneComponent } from '../../shared/footer/footer-one/footer-one.component';
import { CounterAreaThreeComponent } from '../../shared/components/counter/counter-area-three/counter-area-three.component';
import { PortfolioPostFormComponent } from '../../shared/components/form/portfolio-post-form/portfolio-post-form.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-portfolio-details-list',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderOneComponent,CounterAreaThreeComponent,PortfolioPostFormComponent,FooterOneComponent],
  templateUrl: './portfolio-details-list.component.html',
  styleUrl: './portfolio-details-list.component.scss'
})
export class PortfolioDetailsListComponent {

}
