import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterOneComponent } from '../../shared/footer/footer-one/footer-one.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { BlogGridItemComponent } from '../../shared/components/blog/blog-grid-item/blog-grid-item.component';
import { BlogSliderBreadcrumbComponent } from '../../shared/components/breadcrumb/blog-slider-breadcrumb/blog-slider-breadcrumb.component';
import { IBlogDT } from '../../shared/types/blog-d-t';
import { PaginationService } from '../../shared/services/pagination.service';
import { UtilsService } from '../../shared/services/utils.service';
import { BlogSidebarComponent } from '../../shared/components/blog/blog-sidebar/blog-sidebar.component';

import { PostService } from '../../core/services/post.service';
import { Post } from '../../core/models/post.model';



@Component({
  selector: 'app-blog-grid-sidebar',
  standalone: true,
  imports: [CommonModule,HeaderOneComponent,BlogSliderBreadcrumbComponent,FooterOneComponent,PaginationComponent,BlogGridItemComponent,BlogSidebarComponent],
  templateUrl: './blog-grid-sidebar.component.html',
  styleUrl: './blog-grid-sidebar.component.scss'
})
export class BlogGridSidebarComponent {

  // public blog_items: IBlogDT[] = [];

  public posts:Post[]=[];

  public pageSize: number = 6;
  public paginate: any = {}; // Pagination use only
  public pageNo: number = 1;

  constructor(
    public paginationService: PaginationService, public postService:PostService,
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
        this.posts = response.filter((b) => b.page === 'blog_grid');
        // Paginate Products
        this.paginate = this.paginationService.getPager(this.posts.length, Number(+this.pageNo), this.pageSize);
        this.posts = this.posts.slice(this.paginate.startIndex, this.paginate.endIndex + 1);
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
