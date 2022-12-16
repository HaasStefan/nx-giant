import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { routingConfigs } from './routing/routing-config';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent
  ],
  selector: 'nx-giant-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  routingConfigs = routingConfigs;
}
