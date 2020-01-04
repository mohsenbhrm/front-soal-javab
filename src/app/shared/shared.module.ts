import { NgModule } from '@angular/core';
import { SharedLibModule } from './shared-lib.module';
import { SharedCommonModule } from './shared-common.module';


@NgModule({
  imports: [SharedLibModule, SharedCommonModule],
  exports: [SharedLibModule, SharedCommonModule],
  declarations: [],
  providers: [],
})
export class SharedModule { }
