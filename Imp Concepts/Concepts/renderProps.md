#### Render Props

Render Props are a way to pass code b/w components using a prop whose value is a function.

```js
<Counter render={(count,increment)=><CounterTwo count={count}increment={increment}>}>
```
