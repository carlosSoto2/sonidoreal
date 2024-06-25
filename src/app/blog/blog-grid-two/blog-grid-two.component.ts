import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterOneComponent } from '../../shared/footer/footer-one/footer-one.component';
import { BlogSliderBreadcrumbComponent } from '../../shared/components/breadcrumb/blog-slider-breadcrumb/blog-slider-breadcrumb.component';
import { PaginationService } from '../../shared/services/pagination.service';
import { UtilsService } from '../../shared/services/utils.service';
import { IBlogDT } from '../../shared/types/blog-d-t';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { BlogGridItemComponent } from '../../shared/components/blog/blog-grid-item/blog-grid-item.component';
import { BlogSidebarComponent } from '../../shared/components/blog/blog-sidebar/blog-sidebar.component';



@Component({
  selector: 'app-blog-grid-two',
  standalone: true,
  imports: [CommonModule,HeaderOneComponent,BlogSliderBreadcrumbComponent,BlogGridItemComponent,PaginationComponent,BlogSidebarComponent,FooterOneComponent],
  templateUrl: './blog-grid-two.component.html',
  styleUrl: './blog-grid-two.component.scss'
})
export class BlogGridTwoComponent {

  public blog_items: IBlogDT[] = [];
  public pageSize: number = 6;
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
        this.blog_items = response.filter((b) => b.page === 'blog_grid');
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
