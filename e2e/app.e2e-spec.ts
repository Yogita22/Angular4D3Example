import { SampleAngularD3AppPage } from './app.po';

describe('sample-angular-d3-app App', () => {
  let page: SampleAngularD3AppPage;

  beforeEach(() => {
    page = new SampleAngularD3AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
