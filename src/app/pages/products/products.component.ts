import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductsComponent { }
