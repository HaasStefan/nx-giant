import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingConfig } from '../routing/routing-config';

@Component({
  selector: 'nx-giant-sidebar[routingConfigs]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() routingConfigs!: RoutingConfig[];
}
