import { CommonModule, ViewportScroller } from '@angular/common';
import { Component,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopSidebarComponent } from '../shop-sidebar/shop-sidebar.component';
import product_data from '../../../data/product-data';
import { ProductItemComponent } from '../../product-item/product-item.component';
import { ProductModalComponent } from '../../product-modal/product-modal.component';
import { ShopListItemComponent } from '../shop-list-item/shop-list-item.component';
import { PaginationService } from '../../../services/pagination.service';
import { IProductDT } from '../../../types/product-d-t';
import { PaginationComponent } from '../../pagination/pagination.component';
import { NiceSelectComponent } from '../../../ui/nice-select/nice-select.component';

@Component({
  selector: 'app-shop-area',
  standalone: true,
  imports: [CommonModule,ProductItemComponent,ProductModalComponent,ShopListItemComponent,NiceSelectComponent,ShopSidebarComponent,PaginationComponent],
  templateUrl: './shop-area.component.html',
  styleUrl: './shop-area.component.scss'
})
export class ShopAreaComponent {

  @Input() shop_right:boolean = false;

  public product_items:IProductDT[] = [];
  public pageSize: number = 9;
  public paginate: any = {}; // Pagination use only
  public pageNo: number = 1;

  constructor(
    public paginationService: PaginationService,
    private route: ActivatedRoute,
    private router: Router,
    private viewScroller: ViewportScroller
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.pageNo = params['page'] ? params['page'] : this.pageNo;

        this.product_items = [...product_data];
        // Paginate Products
        this.paginate = this.paginationService.getPager(this.product_items.length, Number(+this.pageNo), this.pageSize);
        this.product_items = this.product_items.slice(this.paginate.startIndex, this.paginate.endIndex + 1);
    });
  }

  setPage(page: number) {
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: { page: page },
        queryParamsHandling: 'merge',
        skipLocationChange: false,
      })
      .finally(() => {
        this.viewScroller.setOffset([120, 120]);
      });
  }

  public filterSelectOptions = [
    { value: '', text: 'Sort by latest' },
    { value: 'best-selling', text: 'Sort by best selling' },
    { value: 'top-week', text: 'Sort by top week' },
  ];

  changeHandler(selectedOption: { value: string; text: string }) {
    console.log('Selected option:', selectedOption);
  }
}
