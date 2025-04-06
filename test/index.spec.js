const { toSnakeCase, toKebabCase } = require('../dist/index');

describe('toSnakeCase', () => {
  test('converts camelCase to snake_case', () => {
    expect(toSnakeCase('helloWorld')).toBe('hello_world');
    expect(toSnakeCase('myAwesomeFunction')).toBe('my_awesome_function');
  });

  test('converts normal spaced string to snake_case', () => {
    expect(toSnakeCase('Hello World')).toBe('hello_world');
    expect(toSnakeCase('This is a test')).toBe('this_is_a_test');
  });
});

describe('toKebabCase', () => {
  test('converts camelCase to kebab-case', () => {
    expect(toKebabCase('helloWorld')).toBe('hello-world');
    expect(toKebabCase('myAwesomeFunction')).toBe('my-awesome-function');
  });

  test('converts normal spaced string to kebab-case', () => {
    expect(toKebabCase('Hello World')).toBe('hello-world');
    expect(toKebabCase('This is a test')).toBe('this-is-a-test');
  });
});
  