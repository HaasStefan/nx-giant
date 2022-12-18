import { Pipe, PipeTransform } from '@angular/core';
import { ComplaintReason } from '@nx-giant/complaint/data-access';

@Pipe({
  name: 'complaintReason',
  standalone: true,
})
export class ComplaintReasonPipe implements PipeTransform {
  transform(value: ComplaintReason): string | null {
    switch (value) {
      case 'customerSupport':
        return 'Customer Support';
      case 'noRefund':
        return 'No Refund';
      default:
        return null;
    }
  }
}
