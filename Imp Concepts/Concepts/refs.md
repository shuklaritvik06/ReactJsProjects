#### Refs

Access DOM nodes

```js
constructor(props){
    super(props);
    this.myRef = React.createRef();
}

<p ref={this.myRef}></p>

// Eg: We can make changes using this.myRef.current.change=value
```

### Callback Ref

```js
constructor(props){
    super(props);
    this.cbRef = null;
    this.setCbRef = (element) => {
        this.cbRef = element;
    }
}
<p ref={this.setCbRef}></p>

// Eg: We can make changes using this.cbRef.change=value
```