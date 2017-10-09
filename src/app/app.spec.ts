import { MenuMock, NavMock, PlatformMock, StatusBarMock, SplashScreenMock } from 'ionic-mocks';
import { TranslateServiceMock } from '../common/services/mocks';
import { Page2 }                from '../common/pages';
import { App }                  from './app.component';

let instance: App = null;

describe('App', () => {

  beforeEach(() => {
    let translate: any = new TranslateServiceMock();
    instance = new App((<any> PlatformMock.instance()), (<any> MenuMock.instance()),
      (<any>SplashScreenMock.instance()), (<any>StatusBarMock.instance()), translate);
    instance['nav'] = NavMock.instance();
  });

  it('initialises with two possible pages', done => {
    instance['initializeApp']()
      .then(() => {
        expect(instance['pages'].length).toEqual(2);
        done();
      });
  });

  it('initialises with a root page', () => {
    expect(instance['rootPage']).not.toBe(null);
  });

  it('opens a page', done => {
    instance['initializeApp']()
      .then(() => {
        instance.openPage(instance['pages'][1]);
        expect(instance['menu']['close']).toHaveBeenCalled();
        expect(instance['nav'].setRoot).toHaveBeenCalledWith(Page2);
        done();
      });
  });
});
