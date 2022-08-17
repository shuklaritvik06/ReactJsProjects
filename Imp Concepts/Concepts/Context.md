#### Context

Default values would be used when there is no matching provider.

```jsx
const context = React.createContext({
  foo: 'bar',
});

const Provider = context.Provider;
const Consumer = context.Consumer;

const MyComponent = () => (
  <Provider value={{ foo: 'baz' }}>
    <Consumer>
      {value => <div>{value.foo}</div>}
    </Consumer>
  </Provider>
);
```

```js
MyComponent.contextType = context;
// And then we can use it using this.context
```

```js
static contextType = context;
```


