# Hyperfine - first protable MRI called swoop

# Values - Passion, Agility, Community, Authenticity

# Revolutionise patient care globally - provide affordable and accessible

# WebSockets

WebSockets is a communication protocol that provides full-duplex communication channels over a single TCP connection between a client (such as a web browser) and a server. Unlike traditional HTTP requests, which are unidirectional and stateless, WebSockets allow real-time, two-way communication between the client and the server. This persistent connection enables instant data transfer and facilitates real-time updates and interactive features in web applications.

Real-world example:

"WebSockets are crucial for building real-time project applications. Instead of making frequent HTTP requests to check for new projects, which can be inefficient and place unnecessary load on the server, WebSockets enable instant and bidirectional communication between the chat client and the server. This allows users to send and receive messages in real-time without the need for page refreshes. For instance, popular messaging platforms like Slack or WhatsApp use WebSockets to provide seamless and instant messaging experiences, where users can see new messages instantly as they are sent by other participants."

# Var vs Let vs Const

| Keyword | Scope    | Hoisted | Mutable | Can be redeclared | Can be reassigned |
| ------- | -------- | ------- | ------- | ----------------- | ----------------- |
| `var`   | Function | Yes     | Yes     | Yes               | Yes               |
| `let`   | Block    | No      | Yes     | No                | Yes               |
| `const` | Block    | No      | No      | No                | No                |

# High Order Functions
Functions that take in other functions such as .map or .filter

## Example

const array = [1,2,3,4,5]
const map1 = array.map((x) => return x\*2)
console.log(map1)

# Null vs Undefined

Null is an object that is explicitly assinged to a variable
Undefined is of type undefined where a variable has been declared but not initlised

# What is AJAX?

Asynchronus JS and XML which allows you to make a request without refreshing the page

# Event loop explained

The event loop is responsible for pushing events to the call stack. The call stack is responsible for executing commands syncronously.

If there is a asynchronus function in the call stack then that function is added to the event table then the event queue. The call stack will finish all synchronus events then will finally execute any asynchronus functions when the call stack is empty.

# Async and Await

In JavaScript, async and await are keywords used to handle asynchronous operations and make asynchronous code look and behave more like synchronous code, making it easier to write and understand.

# What is currying?

is a way to transform a function with multiple arguments into a series of functions, each accepting just one argument. It allows you to create specialized functions by gradually applying arguments, making it easier to reuse and compose functions in a flexible manner.
