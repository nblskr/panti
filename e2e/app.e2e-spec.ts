import { PantiPage } from './app.po';

describe('panti App', () => {
  let page: PantiPage;

  beforeEach(() => {
    page = new PantiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
