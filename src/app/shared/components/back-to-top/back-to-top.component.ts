import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent {

  ngOnInit () {
    const result = document.querySelector(".back-to-top-wrapper");
    if (result) {
      document.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          result.classList.add("back-to-top-btn-show");
        } else {
          result.classList.remove("back-to-top-btn-show");
        }
      });
      result.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }
}
