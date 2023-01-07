### Forward Ref

- Parent create Ref
- Attach it to child component 
- Child wrapped in forwardRef((props,ref)=>{})
- Attach to child using ref attribute

```js
React.forwardRef(function(props, ref) {
  return <div ref={ref} {...props} />;
})
```