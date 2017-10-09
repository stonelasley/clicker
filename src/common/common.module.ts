import { NgModule }                       from '@angular/core';
import { IonicModule }                    from 'ionic-angular';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { Page2 }                          from './pages/page2/page2';

@NgModule({
  exports: [
    Page2,
    // Export modules and pipes so additional modules will only need to import this module.
    TranslateModule,
    TranslatePipe,
  ],
  declarations: [
    Page2,
  ],
  imports: [
    IonicModule,
    TranslateModule,
  ],
  entryComponents: [
    // Shared Components
    Page2,
  ],
  providers: [
    // Shared Providers
  ],
})

export class CommonModule {}
