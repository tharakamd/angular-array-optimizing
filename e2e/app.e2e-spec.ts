import {ArrayOptimizeProjectPage} from './app.po';

describe('array-optimize-project App', () => {
  let page: ArrayOptimizeProjectPage;

  beforeEach(() => {
    page = new ArrayOptimizeProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
