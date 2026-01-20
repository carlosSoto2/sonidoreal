import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import svg_icons from '../../../data/svg';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pricing-startup',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './pricing-startup.component.html',
  styleUrl: './pricing-startup.component.scss'
})
export class PricingStartupComponent {

  @Input() spacing:string = 'pt-130';
  @Input() style_2:boolean = false;

  constructor(private sanitizer: DomSanitizer) {}
  getSafeHtml(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }

  public pricing_data = [
    {
      title: 'Unlimited project',
      feature_lists: [
        {icon:svg_icons.right_icon},
        {icon:svg_icons.right_icon},
        {icon:svg_icons.right_icon},
      ]
    },
    {
      title: 'Free Google Analysis',
      feature_lists: [
        {text:"$6/Year"},
        {icon:svg_icons.right_icon},
        {icon:svg_icons.right_icon},
      ]
    },
    {
      title: 'Lifetime support & SEO Experts',
      feature_lists: [
        {icon:svg_icons.right_icon},
        {icon:svg_icons.right_icon},
        {icon:svg_icons.right_icon},
      ]
    },
    {
      title: 'Data Security & Backup',
      feature_lists: [
        {text:'100 GB'},
        {text:'1TB'},
        {text:'Unlimited'},
      ]
    },
    {
      title: 'Auto Lifetime Upgrade',
      feature_lists: [
        {icon:svg_icons.right_icon},
        {icon:svg_icons.right_icon},
        {icon:svg_icons.right_icon},
      ]
    },
  ]
}
