import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';
import { FooterOneComponent } from "../../shared/footer/footer-one/footer-one.component";

@Component({
    selector: 'app-policy',
    standalone: true,
    templateUrl: './policy.component.html',
    styleUrl: './policy.component.scss',
    imports: [CommonModule, HeaderOneComponent, FooterSixComponent, FooterOneComponent]
})
export class PolicyComponent {

}
