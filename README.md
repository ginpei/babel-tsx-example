# babel-tsx-example

How to compile `src/**/*.tsx` into JS file.

```console
$ npm install --dev @babel/cli @babel/core @babel/preset-react @babel/preset-typescript
```

```console
$ npx babel src --out-dir out/ --extensions .ts,.tsx --presets @babel/preset-typescript,@babel/preset-react
```
