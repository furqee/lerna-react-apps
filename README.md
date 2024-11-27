# React + TypeScript + Vite + Lerna

This project is a monorepo setup using Lerna, featuring a React component library built with TypeScript and Vite.

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [Storybook](#storybook)
- [Linting and Formatting](#linting-and-formatting)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started, clone the repository and install the dependencies:

```sh
git clone https://github.com/furqee/lerna-react-apps.git
cd lerna-react-apps
yarn install
```

This will install the dependencies for all the packages.

## Building

To build the all the packages, run:

```sh
yarn build
```

This will build the library to the `dist` directory.

## Storybook

To start the Storybook server, run:

```sh
yarn start:ui-library
```

This will start the Storybook server for the `ui-library` app.

## Linting and Formatting

To lint and format the code, run:

```sh
yarn lint:ui-library
yarn format:ui-library
```

To automatically fix linting errors, run:

```sh
yarn lint:ui-library:fix
```

## Contributing

Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
