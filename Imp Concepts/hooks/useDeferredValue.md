Something like debouncing , you can use useDefferredValue hook and then the value would be changed after some time when the react app is not having any change

```js
const definput = useDeferredValue(input);
```
