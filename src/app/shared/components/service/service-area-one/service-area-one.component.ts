import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


import { Service } from '../../../../core/models/service.model';
import { ServiceService } from '../../../../core/services/service.service';



@Component({
  selector: 'app-service-area-one',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './service-area-one.component.html',
  styleUrl: './service-area-one.component.scss'
})
export class ServiceAreaOneComponent {

  @Input() spacing:string = 'pb-90';
  @Input() style_2:boolean = false;

  public services: any

  constructor(private sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute,  private router: Router, public serviceService:ServiceService) {}

    getSafeHtml(svgContent: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(svgContent);
    }


    ngOnInit(): void {
      this.loadServices();

      this.activatedRoute.params.subscribe(({id})=> this.loadServicesById(id))
      // console.log(this.service_data);

    }

      loadServices() {
        this.serviceService.loadServices()
          .subscribe((services: Service) => {
            this.services = services;
            // console.log('servicio',this.services);

          });
      }


      loadServicesById(id: string){
        this.serviceService.loadServicesById(id)
        .subscribe((service:any)=>{
          this.services =service;
        })
      }

}
