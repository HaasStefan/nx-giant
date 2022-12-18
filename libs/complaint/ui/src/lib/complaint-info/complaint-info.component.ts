import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Complaint,
  ComplaintFacadeService,
} from '@nx-giant/complaint/data-access';
import { map, Observable } from 'rxjs';
import { ComplaintReasonPipe } from '../complaint-reason.pipe';

@Component({
  selector: 'nx-giant-complaint-info',
  standalone: true,
  imports: [CommonModule, ComplaintReasonPipe],
  templateUrl: './complaint-info.component.html',
  styleUrls: ['./complaint-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComplaintInfoComponent implements OnInit {
  private facade = inject(ComplaintFacadeService);

  @Input() set contractId(value: string) {
    this.complaints$ = this.facade.complaints$.pipe(
      map((complaints) =>
        complaints.filter((complaint) => complaint.contractId === value)
      )
    );
  }
  complaints$!: Observable<Complaint[]>;

  ngOnInit(): void {
    this.facade.loadAllComplaints();
  }
}
