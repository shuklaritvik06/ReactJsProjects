### LifeCycle Methods in React

React Lifecycle Methods are used to perform actions on these four events:

- Mounting: When the component is created and added to the DOM.
- Updating: When the component is updated.
- Unmounting: When the component is removed from the DOM.
- Error: When the component throws an error.

#### Mounting

- constructor
- getDerivedStateFromProps
- render
- componentDidMount

#### Updating

- getDerivedStateFromProps
- shouldComponentUpdate
- render
- getSnapshotBeforeUpdate
- componentDidUpdate

#### Unmounting

- componentWillUnmount

#### Error

- getDerivedStateFromError
- componentDidCatch