import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-basic-plan',
  standalone: true,
  imports: [],
  templateUrl: './basic-plan.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPlanComponent { }
