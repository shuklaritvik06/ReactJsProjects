### Virtual DOM

React never updates the DOM directly. It always creates a new virtual DOM tree. It is in memory so much faster.

When change happen react would create a new virtual DOM tree and compare it to the existing DOM tree. If there is a difference then it would update the DOM.

Reconciliation is the process of comparing the virtual DOM tree to the DOM tree and updating the DOM.

##### Diffing Algorithm

If the root node will be different then we need to update the entire DOM tree.