## Updating

- getDerivedStateFromProps

```js
    getDerivedStateFromProps(props, state) {
        return {
            count: props.count
        };
    }
```

Every time the props change, the state is updated.

- shouldComponentUpdate

```js
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.count !== this.props.count;
    }
```

When the component is updated, it checks if the props have changed.

- render

```js
    render() {
        return <div>{this.props.count}</div>;
    }
```

- getSnapshotBeforeUpdate

```js
    getSnapshotBeforeUpdate(prevProps, prevState) {
        return {
            count: this.props.count
        };
    }
```

When the component is updated, it checks if the props have changed.


- componentDidUpdate

```js
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }
```

When the component is updated, it logs the previous props and state.