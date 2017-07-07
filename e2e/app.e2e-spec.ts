import { MisigouPage } from './app.po';

describe('misigou App', () => {
  let page: MisigouPage;

  beforeEach(() => {
    page = new MisigouPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
