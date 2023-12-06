## React Notes

Memos - used when there is an expensive computation inside a componenent so use a memo to avoid 
calling an expensive component - memoising uses the previous state of the componenet and will only update if a state variable changes

Promises 

Promises are objects in JavaScript that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise has three states: pending, fulfilled, and rejected. When a promise is in a pending state, it means that the asynchronous operation is still in progress and has not yet completed. When the operation is completed successfully, the promise is fulfilled, and when it fails, the promise is rejected.

Promises provide a way to handle asynchronous operations in a more synchronous-like way, allowing us to write code that doesn't block the main thread and handles errors more effectively. Instead of having to pass a callback function to handle the result of an asynchronous operation, we can use promises and chain methods like .then() and .catch() to handle the results or errors of a promise.

## Prop Drilling

Here is an example of prop drilling:
```
const App = () => {
  const userName = 'Joe';

  return (
    <WelcomePage userName={userName} />
  );
}

const WelcomePage = ({ userName }) => {
  return (
    <>
      <WelcomeMessage userName={userName} />
      {/** Some other welcome page code */}
    </>
  );
}

const WelcomeMessage = ({ userName }) => {
  return (
    <h1>Hey, {userName}!</h1>
  );
}
```
![Prop drilling example](https://felixgerschau.com/static/6447bcbb9ccbc826a36e97848484aae4/33c9c/prop-drilling-example-1.png)

Function Composition helps reduce prop drilling to multiple layers by using App to import all components:
```
const App = () => {
  const userName = 'Joe';

  return (
    <WelcomePage title={<WelcomeMessage userName={userName} />} />
  );
}

const WelcomePage = ({ title }) => {
  return (
    <>
      {title}
      {/** Some other welcome page code */}
    </>
  );
}

const WelcomeMessage = ({ userName }) => {
  return (
    <h1>Hey, {userName}!</h1>
  );
}
```

![Function Composition](https://felixgerschau.com/static/18056c6c8454b615d64afa0662f77840/1ff84/prop-drilling-resolved.png)