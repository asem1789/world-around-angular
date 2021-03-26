import { NgModule } from '@angular/core';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DomSanitizer } from '@angular/platform-browser';

const MODULES = [MatIconModule, MatProgressSpinnerModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class MaterialModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    );
  }
}
