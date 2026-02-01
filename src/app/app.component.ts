import { Component } from '@angular/core';
import { LoginComponent } from "./pages/login/login.component";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crm-app';
}
