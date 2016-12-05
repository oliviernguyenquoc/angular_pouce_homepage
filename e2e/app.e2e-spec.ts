import { AngularPouceHomepagePage } from './app.po';

describe('angular-pouce-homepage App', function() {
  let page: AngularPouceHomepagePage;

  beforeEach(() => {
    page = new AngularPouceHomepagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
