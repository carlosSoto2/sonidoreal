import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import sal from 'sal.js';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { CommonFaqComponent } from '../../shared/components/faq/common-faq/common-faq.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';
import { NiceSelectComponent } from '../../shared/ui/nice-select/nice-select.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-help-center',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderOneComponent,CommonFaqComponent,NiceSelectComponent,FooterSixComponent],
  templateUrl: './help-center.component.html',
  styleUrl: './help-center.component.scss'
})
export class HelpCenterComponent {

  public topic_list  = [
    {value: '', text: 'Chose Your Topic'},
    {value: 'topic-one', text: 'Topic One'},
    {value: 'topic-two', text: 'Topic Two'},
    {value: 'topic-three', text: 'Topic Three'},
    {value: 'topic-four', text: 'Topic Four'},
  ]

  changeSelectHandler(sValue: { value: string; text: string }) {
    console.log('Selected option:', sValue);
  }

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }
}
