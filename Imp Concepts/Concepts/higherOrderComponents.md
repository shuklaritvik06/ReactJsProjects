#### HOC

HOC is a higher order component. It is a function that takes a component and returns a new component.

```js
const updatedComponent = withCounter(Component=>{
    class NewComponent extends component {
        render() {
            return <Component {...this.props} />
        }
    }
    return NewComponent;
});
```

Naming Convention: 

- functionName = Same as file name starting with `with`
- originalComponent = WrappedComponent
- NewComponent = Same as function Name in Pascal case