import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { UtilsService } from '../../shared/services/utils.service';
import { IBlogDT } from '../../shared/types/blog-d-t';
import { FooterOneComponent } from '../../shared/footer/footer-one/footer-one.component';
import { BlogGridItemComponent } from '../../shared/components/blog/blog-grid-item/blog-grid-item.component';
import sal from 'sal.js';

@Component({
  selector: 'app-blog-masonry',
  standalone: true,
  imports: [CommonModule, HeaderOneComponent, BlogGridItemComponent, FooterOneComponent],
  templateUrl: './blog-masonry.component.html',
  styleUrl: './blog-masonry.component.scss'
})
export class BlogMasonryComponent {

  public blog_items: IBlogDT[] = [];
  constructor(
    public utilsService: UtilsService,
  ) { };

  ngOnInit() {
    this.utilsService.filterBlogs().subscribe((response) => {
      this.blog_items = response.filter((b) => b.page === 'blog_masonry');
    });
  }

  ngAfterViewInit(): void {
    setTimeout(function () {
      var grid = document.querySelector('.isotopeContainer');
      new (<any>window).Isotope(grid, {
        itemSelector: '.grid-item'
      });
    }, 500);

    sal({ threshold: 0.1, once: true, root: null });
  }
}
