import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-common-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-breadcrumb.component.html',
  styleUrl: './common-breadcrumb.component.scss'
})
export class CommonBreadcrumbComponent {

  @Input () title!: string;
  @Input () subtitle!: string;
}
