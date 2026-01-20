import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import sal from 'sal.js';
import { RouterModule } from '@angular/router';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';
import { NiceSelectComponent } from '../../shared/ui/nice-select/nice-select.component';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderOneComponent,NiceSelectComponent,FooterSixComponent],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {

  public open_job_form = false;

  handleOpenJobForm() {
    this.open_job_form = !this.open_job_form
  };

  public genderOptions = [
    { value: '', text: 'Gender' },
    { value: 'male', text: 'Male' },
    { value: 'female', text: 'Female' },
    { value: 'other', text: 'Other' }
  ];

  changeHandler(selectedOption: { value: string; text: string }) {
    console.log('Selected option:', selectedOption);
  }

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }

}
