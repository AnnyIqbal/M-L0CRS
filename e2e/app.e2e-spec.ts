import { Level0Page } from './app.po';

describe('level0 App', function() {
  let page: Level0Page;

  beforeEach(() => {
    page = new Level0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
