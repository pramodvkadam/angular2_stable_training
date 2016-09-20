import { browser, element, by } from 'protractor/globals';

export class B2BPortalStablePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cgp-root h1')).getText();
  }
}
