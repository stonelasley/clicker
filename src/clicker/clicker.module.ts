import { NgModule }                        from '@angular/core';
import { IonicModule }                     from 'ionic-angular';
import { CommonModule }                    from '../common';
import { ClickersService, StorageService } from './services';
import { ClickerForm }                     from './components/clickerForm/clickerForm';
import { ClickerButton }                   from './components/clickerButton/clickerButton';
import { ClickerList }                     from './pages/clickerList/clickerList';

@NgModule({
  declarations: [
    ClickerList,
    ClickerForm,
    ClickerButton,
  ],
  exports: [
    ClickerList,
  ],
  imports: [
    IonicModule,
    CommonModule,
  ],
  entryComponents: [
    ClickerList,
    ClickerForm,
    ClickerButton,
  ],
  providers: [
    ClickersService,
    StorageService,
  ],
})
export class ClickerModule {}
