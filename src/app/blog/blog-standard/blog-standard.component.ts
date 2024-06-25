import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { BlogSidebarComponent } from '../../shared/components/blog/blog-sidebar/blog-sidebar.component';
import { FooterOneComponent } from '../../shared/footer/footer-one/footer-one.component';
import { PaginationService } from '../../shared/services/pagination.service';
import { IBlogDT } from '../../shared/types/blog-d-t';
import { UtilsService } from '../../shared/services/utils.service';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { VideoPopupComponent } from '../../shared/components/modal/video-popup/video-popup.component';
import { BlogPostboxItemComponent } from '../../shared/components/blog/blog-postbox-item/blog-postbox-item.component';



@Component({
  selector: 'app-blog-standard',
  standalone: true,
  imports: [CommonModule, HeaderOneComponent, BlogSidebarComponent, RouterModule, FooterOneComponent, PaginationComponent, VideoPopupComponent, BlogPostboxItemComponent],
  templateUrl: './blog-standard.component.html',
  styleUrl: './blog-standard.component.scss'
})
export class BlogStandardComponent {

  public blog_items: IBlogDT[] = [];
  public pageSize: number = 3;
  public paginate: any = {}; // Pagination use only
  public sortBy: string = 'asc'; // Sorting Order
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
        this.blog_items = response.filter((b) => b.page === 'blog_post_box');
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
