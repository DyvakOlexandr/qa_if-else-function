'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  it('should call first when condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });

  it('should call second when condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('should pass no arguments to condition, first and second', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledWith();
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
  });

  it('should do nothing if condition returns non-boolean but truthy', () => {
    const condition = jest.fn(() => 123); // не строго true
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    // должно пойти в else
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });
});
