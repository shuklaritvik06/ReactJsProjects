#### Error Boundary

Error Boundary is a component that catches errors and displays a fallback UI.


```js
    getDerivedStateFromError(error) {
        return { hasError: true };
    }
```

```js
    componentDidCatch(error, info) {
        console.log(error, info);
    }
```