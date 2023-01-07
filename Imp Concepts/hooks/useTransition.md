As we know that if there are two state changes in the function it will be combined into one and executed so it will be highly performance related issue so to solve it react introduced useTransition hook for introducing the priority of state changes

```js
const [isPending,startTransition] = useTransition();
const [first,setFirst] = useState(0);
const [second,setSecond] = useState();
useEffect(()=>{
  setFirst();
  startTransition(heavyFunctionSettingState);
},[]);
```
