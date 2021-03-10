import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

const MODULES = [MatIconModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class MaterialModule {}
