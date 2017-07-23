import { NgBlogPage } from './app.po';

describe('ng-blog App', () => {
  let page: NgBlogPage;

  beforeEach(() => {
    page = new NgBlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
