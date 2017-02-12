import { CodingExerciseAaPage } from './app.po';

describe('coding-exercise-aa App', function() {
  let page: CodingExerciseAaPage;

  beforeEach(() => {
    page = new CodingExerciseAaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
