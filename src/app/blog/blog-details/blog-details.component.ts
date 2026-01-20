import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterOneComponent } from '../../shared/footer/footer-one/footer-one.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UtilsService } from '../../shared/services/utils.service';
import { of, switchMap } from 'rxjs';
import { IBlogDT } from '../../shared/types/blog-d-t';
import { BlogSidebarComponent } from '../../shared/components/blog/blog-sidebar/blog-sidebar.component';
import { BlogGridItemComponent } from '../../shared/components/blog/blog-grid-item/blog-grid-item.component';
import { BlogReplyFormComponent } from '../../shared/components/form/blog-reply-form/blog-reply-form.component';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule,RouterModule, HeaderOneComponent,BlogGridItemComponent,BlogSidebarComponent,BlogReplyFormComponent, FooterOneComponent],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent {

  public blog: IBlogDT | null | undefined;
  public related_blogs:IBlogDT[] = [];

  constructor(
    private route: ActivatedRoute,
    private utilsService: UtilsService,
    private router: Router
  ) { }

  ngOnInit() {

    this.utilsService.filterBlogs().subscribe((response) => {
      this.related_blogs = response.filter((b) => b.page === 'blog_grid').slice(0, 2);
    });

    this.route.paramMap.pipe(
      switchMap(params => {
        const blogId = params.get('id');
        if (blogId) {
          return this.utilsService.getBlogById(blogId);
        }
        return of<IBlogDT | null>(null); // Emit null if there's no blogId
      })
    ).subscribe((blog: IBlogDT | null | undefined) => {
      if (!blog) {
        // blog not found, navigate to 404 page
        this.router.navigate(['/404']);
      } else {
        this.blog = blog;
      }
    });
  }

}
