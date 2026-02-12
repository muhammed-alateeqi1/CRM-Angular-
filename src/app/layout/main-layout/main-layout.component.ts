import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet, RouterLink],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
