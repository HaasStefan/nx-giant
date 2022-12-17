import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'nx-giant-can-deactivate-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './can-deactivate-dialog.component.html',
  styleUrls: ['./can-deactivate-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanDeactivateDialogComponent {}
