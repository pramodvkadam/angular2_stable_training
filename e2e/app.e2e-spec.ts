import { B2BportalStablePage } from './app.po';

describe('b2-bportal-stable App', function() {
  let page: B2BportalStablePage;

  beforeEach(() => {
    page = new B2BportalStablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
