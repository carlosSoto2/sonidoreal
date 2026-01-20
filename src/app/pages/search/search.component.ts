import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';
import blog_data from '../../shared/data/blog-data';
import { IBlogDT } from '../../shared/types/blog-d-t';
import { PaginationService } from '../../shared/services/pagination.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UtilsService } from '../../shared/services/utils.service';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderOneComponent,PaginationComponent,FooterSixComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  public blog_items: IBlogDT[] = [];
  public pageSize: number = 4;
  public paginate: any = {}; // Pagination use only
  public pageNo: number = 1;

  constructor(
    public paginationService: PaginationService,
    public utilsService: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private viewScroller: ViewportScroller
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.pageNo = params['page'] ? params['page'] : this.pageNo;
      this.utilsService.filterBlogs().subscribe((response) => {
        // Sorting Filter
        this.blog_items = response.filter((b) => b.page === 'blog_grid')
        .filter((b) => !b.blog_quote)
        .slice(0, 8);;
        // Paginate Products
        this.paginate = this.paginationService.getPager(this.blog_items.length, Number(+this.pageNo), this.pageSize);
        this.blog_items = this.blog_items.slice(this.paginate.startIndex, this.paginate.endIndex + 1);
      });
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
}
