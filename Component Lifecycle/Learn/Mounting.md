# Mounting

- constructor

```js
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
```

A special function that is called when the component is created.


- getDerivedStateFromProps

```js
    getDerivedStateFromProps(props, state) {
        return {
            count: props.count
        };
    }
```

When the state of the component depends on the props.

- render

```js
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
```

Render the HTML.

- componentDidMount

```js
    componentDidMount() {
        console.log('Component did mount');
    }
```

Invoked immediately after a component and its children have been mounted.