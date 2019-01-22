import {
  Component,
  Input,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'conduit-angular-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagerComponent {
  @Input() currentPage: number;
  @Input() totalPages: number;
  @Input() setPage = new EventEmitter();
}
