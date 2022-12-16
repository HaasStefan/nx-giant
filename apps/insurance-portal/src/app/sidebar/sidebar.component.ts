import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingConfig } from '../routing/routing-config';
import { CapitalizePipe } from '@nx-giant/shared/ui';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'nx-giant-sidebar[routingConfigs]',
  standalone: true,
  imports: [CommonModule, CapitalizePipe, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() routingConfigs!: RoutingConfig[];
}
