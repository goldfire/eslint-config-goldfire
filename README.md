# eslint-config-goldfire
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the GoldFire Studios JavaScript style guide (ES2015+ version).

## Installation
```
npm install --save-dev eslint eslint-config-goldfire eslint-config-airbnb-base eslint-plugin-html eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-vue
```

## Usage
Once the `eslint-config-goldfire` package is installed, you can use it by specifying `goldfire` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "goldfire",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## License
Copyright (c) 2018 James Simpson and GoldFire Studios, Inc.

Released under the MIT License.