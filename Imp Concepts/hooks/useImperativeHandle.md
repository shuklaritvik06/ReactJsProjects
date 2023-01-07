```js
function Element() {
  const inputRef = useRef();
  console.log(inputRef);
  return (
    <>
      <InputElement ref={inputRef} />
      <button onClick={() => inputRef.current.hello()}>CLic</button>
    </>
  );
}
```

```js
function InputElement(props, ref) {
  console.log(ref);
  useImperativeHandle(
    ref,
    () => {
      return {
        hello: () => {
          console.log("Hello");
        }
      };
    },
    []
  );
  return (
    <>
      <input type={"text"} ref={ref} />
    </>
  );
}
```
