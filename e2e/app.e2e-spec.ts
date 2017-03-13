import { AngularNbaPeoplePage } from './app.po';

describe('angular-nba-people App', () => {
  let page: AngularNbaPeoplePage;

  beforeEach(() => {
    page = new AngularNbaPeoplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
