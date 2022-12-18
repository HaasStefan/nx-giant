import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintFacadeService } from '@nx-giant/complaint/data-access';
import { MatTableModule } from '@angular/material/table';
import { TitleComponent } from '@nx-giant/shared/ui';
import { ComplaintReasonPipe } from '@nx-giant/complaint/ui';

@Component({
  selector: 'nx-giant-complaint-feature-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, TitleComponent, ComplaintReasonPipe],
  templateUrl: './complaint-feature-list.component.html',
  styleUrls: ['./complaint-feature-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComplaintFeatureListComponent implements OnInit {
  private facade = inject(ComplaintFacadeService);

  readonly columndefs = [
    'reason',
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
  ];
  readonly complaints$ = this.facade.complaints$;

  ngOnInit() {
    this.facade.loadAllComplaints();
  }
}
