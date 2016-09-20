import { B2BPortalStablePage } from './app.po';

describe('b2-bportal-stable App', function() {
  let page: B2BPortalStablePage;

  beforeEach(() => {
    page = new B2BPortalStablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cgp works!');
  });
});
