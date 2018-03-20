# stfu-and-click

It's really simple, you just need to click as fast as you can.

This task was created by https://applifting.cz, see
https://docs.google.com/document/d/1h0BFE3xq5hYR4TH6VBG52eWeIqPXgsXsatkX4ng9_3s/edit.

The devstack is based on https://github.com/tajo/devstack.git.

## Download

```shell
git clone https://github.com/tajo/devstack.git
cd devstack
npm install // or yarn install
```

## Development mode

```shell
npm start
open http://localhost:8000
```

## Production mode (not tested)

```shell
npm run build
npm run server
open http://localhost:8000
```

## ESLint

```shell
npm run lint
```

## Missing stuff
 - ~~yarn~~
 - eslint
 - css
 - TypeScript
 - persisting using mongodb
 - Immutable.js
 - tests
 - ...
