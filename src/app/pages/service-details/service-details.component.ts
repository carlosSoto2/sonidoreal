import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FooterOneComponent } from "../../shared/footer/footer-one/footer-one.component";


import { ServiceService } from '../../core/services/service.service';
import { Service } from '../../core/models/service.model';





@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderOneComponent, FooterSixComponent, FooterOneComponent],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss'
})
export class ServiceDetailsComponent {

  services: Service[]=[];
  serviceSelected!: Service;

  constructor(private sanitizer: DomSanitizer, private router: Router, private activatedRoute: ActivatedRoute, private serviceService:ServiceService) {};


  ngOnInit(): void {


    this.activatedRoute.params.subscribe(({id}) => this.loadServiceById(id))

  }


  getSafeHtml(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }

  loadServiceById(id: string){
    this.serviceService.loadServicesById(id)
    .subscribe((service: any)=> {
      this.serviceSelected =service;
    });
  }


}
