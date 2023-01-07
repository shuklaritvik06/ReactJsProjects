#### memo

Memo is a pure component for functional components. It only renders when its props changes. It runs a shallow comparison to see if the props or state have changed.

````jsx
React.memo(MyComponent)
````