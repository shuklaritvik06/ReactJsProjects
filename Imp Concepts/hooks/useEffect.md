- componentDidMount

```js
useEffect(()=>{

},[])
```

- componentDidUpdate

```js
useEffect(()=>{

})
```

- componentWillUnmount

```js
useEffect(()=>{
    console.log('on mount');
    return ()=>{
        console.log('on unmount');
    }
},[])
```

