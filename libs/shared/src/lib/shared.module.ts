import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './pager/pager.component';
import { ActionService } from './action.service';

@NgModule({
  imports: [CommonModule],
  declarations: [PagerComponent],
  exports: [PagerComponent],
  providers: [ActionService]
})
export class SharedModule {}
