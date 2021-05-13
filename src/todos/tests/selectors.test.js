import { expect } from 'chai';
import { getCompletedTodos } from '../selectors';

describe('The getCompletedTodos selector', () => {
  it('Returns only completed todos', () => {
    const fakeTodos = [
      { text: 'Say Hello', isCompleted: false },
      { text: 'Hello', isCompleted: true },
      { text: 'Say Hello', isCompleted: false },
    ];
    const expected = [
      { text: 'Hello', isCompleted: true },
    ];
    const actual = getCompletedTodos.resultFunc(fakeTodos);
    expect(actual).to.deep.equal(expected);
  }
  );
});

