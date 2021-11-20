import { Pipe, PipeTransform } from '@angular/core';

enum SubscriptionStatuses {
  Active = 'Active',
  NotActive = 'Not Active',
}

@Pipe({
  name: 'subscriptionStatus'
})
export class SubscriptionStatusPipe implements PipeTransform {
  transform(value: boolean): string {
    return value
      ? SubscriptionStatuses.Active
      : SubscriptionStatuses.NotActive
  }
}
