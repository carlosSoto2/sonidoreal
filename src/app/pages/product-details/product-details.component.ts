import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { of, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderTwelveComponent } from '../../shared/header/header-twelve/header-twelve.component';
import { FooterElevenComponent } from '../../shared/footer/footer-eleven/footer-eleven.component';
import { CtaEightComponent } from '../../shared/components/cta/cta-eight/cta-eight.component';
import product_data from '../../shared/data/product-data';
import { ProductItemComponent } from '../../shared/components/product-item/product-item.component';
import { ProductModalComponent } from '../../shared/components/product-modal/product-modal.component';
import { UtilsService } from '../../shared/services/utils.service';
import { IProductDT } from '../../shared/types/product-d-t';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,HeaderTwelveComponent,CtaEightComponent,ProductItemComponent,FooterElevenComponent,ProductModalComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  @ViewChild('navActive') navActive!: ElementRef;
  @ViewChild('productTabMarker') productTabMarker!: ElementRef;
  public product: IProductDT | null | undefined;

  public active_tab: string = 'desc';
  public related_products = [...product_data].slice(-6);

  constructor(private renderer: Renderer2,private route: ActivatedRoute, private utilsService: UtilsService,private router: Router) {};

  handleActiveMarker(event: Event, tab: string): void {
    this.active_tab = tab;
    const marker = document.getElementById("marker");
    if (marker && event.target) {
      marker.style.left = (event.target as HTMLButtonElement).offsetLeft + "px";
      marker.style.width = (event.target as HTMLButtonElement).offsetWidth + "px";
    }
  };

  value = 1;

  increment() {
    this.value++;
  }
  decrement() {
    if (this.value > 1) {
      this.value--;
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.renderer.setStyle(this.productTabMarker.nativeElement, 'left', this.navActive.nativeElement.offsetLeft + 'px');
      this.renderer.setStyle(this.productTabMarker.nativeElement, 'width', this.navActive.nativeElement.offsetWidth + 'px');
    }, 0);
  }

  ngOnInit() {

    this.route.paramMap.pipe(
      switchMap(params => {
        const productId = params.get('id');
        if (productId) {
          return this.utilsService.getProductById(productId);
        }
        return of<IProductDT | null>(null); // Emit null if there's no productId
      })
    ).subscribe((product: IProductDT | null | undefined) => {
      if (!product) {
        // product not found, navigate to 404 page
        this.router.navigate(['/404']);
      } else {
        this.product = product;
      }
    });

    // related product slider active
    new Swiper('.product__related-slider-active', {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".product-related-slider-dot",
        clickable: true,
      },
      breakpoints: {
        '1200': {
          slidesPerView: 4,
        },
        '992': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });
  }


}
