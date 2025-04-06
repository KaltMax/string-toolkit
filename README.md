# @kaltmax/string-toolkit (Class 2 Example)

> A small JavaScript library for converting strings into different naming conventions like `snake_case` and `kebab-case`.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [toSnakeCase](#tosnakecase)
  - [toKebabCase](#tokebabcase)
- [Contribution](#contribution)
- [Security](#security)
- [License](#license)

## Installation

Install via npm:

```bash
npm install @kaltmax/string-toolkit
```

Install via yarn:

```bash
yarn add @kaltmax/string-toolkit
```

## Usage

Import the functions:

```js
import { toSnakeCase, toKebabCase } from '@kaltmax/string-toolkit';
```

### toSnakeCase

Convert a string to `snake_case`:

```js
const input = 'Hello World';
const result = toSnakeCase(input);
console.log(result); // "hello_world"
```

### toKebabCase

Convert a string to `kebab-case`:

```js
const input = 'Hello World';
const result = toKebabCase(input);
console.log(result); // "hello-world"
```

## Contribution

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

## Security

Please refer to our [SECURITY.md](./SECURITY.md) for information about our security policies, how to report vulnerabilities, and our approach to handling security concerns.

## License

This project is licensed under the [MIT License](./LICENSE.md).
