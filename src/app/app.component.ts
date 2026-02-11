import { Component } from '@angular/core';
import { LoginComponent } from "./pages/login/login.component";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crm-app';
}
