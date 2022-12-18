import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-giant-complaint-feature-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './complaint-feature-create.component.html',
  styleUrls: ['./complaint-feature-create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComplaintFeatureCreateComponent {}
