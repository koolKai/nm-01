// order of script tag matter
// 1. EMMET
{
  /*
Emmet is a popular abbreviation tool used in web development. 
It stands for "Efficiently Misleading Markup, Extremely Metamorphic Entity,
 or Emmet." Emmet is a plugin for text editors or integrated development 
 environments (IDEs) that allows developers to write HTML and CSS code more
  quickly and efficiently.
With Emmet, you can use shorthand syntax and abbreviations to generate code 
snippets rapidly. It enables you to expand simple expressions into complex code
 structures. For example, you can type ul>li*5>a and expand it to:
*/
}

// 2. difference b/w library and framework

{/*
The terms "library" and "framework" refer to different concepts in software development. Here's an overview of the key differences between them:

Library:
- A library is a collection of precompiled code or modules that provide specific functionality or features.
- It typically consists of reusable functions, classes, or components that developers can incorporate into their projects.
- Libraries are usually focused on solving specific tasks or providing specific capabilities.
- Developers have more control and flexibility over how they use a library since they directly invoke its functions or classes within their code.
- Examples of popular libraries include jQuery (JavaScript library), NumPy (Python library for numerical computations), and React (JavaScript library for building user interfaces).

Framework:
- A framework is a more extensive and structured set of tools, libraries, and conventions that provide a foundation for developing applications.
- It offers a complete structure, including predefined rules, conventions, and a set of abstractions for building applications.
- Frameworks dictate the overall architecture and flow of the application, often following a specific design pattern (e.g., MVC or MVVM).
- Developers build their applications by extending or customizing the framework's core components and leveraging its features and functionalities.
- Frameworks provide higher-level abstractions, which can make development faster but may limit some flexibility compared to libraries.
- Examples of popular frameworks include Django (Python web framework), Ruby on Rails (Ruby web framework), and Angular (JavaScript framework for web applications).

In summary, while libraries provide specific functionality that developers can use as needed, frameworks offer a more comprehensive structure and set of conventions for building applications. Libraries provide more flexibility, while frameworks provide a predefined structure and flow for developers to follow.
*/}

// 3. CDN

{/*
CDN stands for Content Delivery Network. It is a globally distributed network of servers or data centers strategically located across different geographical locations. The primary purpose of a CDN is to deliver web content, such as images, CSS files, JavaScript files, videos, and other static assets, to end-users more efficiently and quickly.

Here are some reasons why CDNs are used:

1. Improved Performance: CDNs are designed to reduce latency and improve website performance. By caching and distributing content across multiple servers located closer to end-users, CDNs can deliver content from the nearest server, reducing the distance data needs to travel and improving response times.

2. Enhanced Scalability: CDNs help distribute the load of delivering content by offloading traffic from the origin server. They can handle high volumes of concurrent requests, ensuring that websites and applications remain accessible even during peak traffic periods or sudden traffic spikes.

3. Global Availability: CDNs have servers distributed worldwide, allowing them to serve content to users in different regions more effectively. This global presence helps reduce network congestion and enables faster content delivery across different geographical locations.

4. Bandwidth Savings: CDNs can help save bandwidth on the origin server by caching and serving static content. When a user requests content that has been previously cached on the CDN's servers, it can be delivered directly from the CDN's edge server, reducing the load on the origin server and saving bandwidth costs.

5. Improved Reliability: CDNs provide increased redundancy and fault tolerance. If one server in the CDN network becomes unavailable, the content can be automatically served from another nearby server, ensuring better reliability and reducing the risk of downtime.

6. Security and DDoS Mitigation: Many CDNs offer built-in security features and protection against Distributed Denial of Service (DDoS) attacks. They can help mitigate the impact of malicious traffic and provide additional layers of security to safeguard websites and applications.

Overall, CDNs offer numerous benefits, including improved performance, scalability, availability, bandwidth savings, reliability, and security, making them a valuable tool for optimizing content delivery on the web.
*/}

// 4. Cross-Origin in script tag

{/*
The "cross-origin" attribute in the `<script>` tag is used to specify whether a script file can be loaded from a different origin (domain, protocol, or port) than the web page that includes it. It is an important security feature implemented by web browsers to mitigate potential security risks associated with cross-origin resource sharing (CORS).

By default, web browsers enforce a "same-origin" policy, which means that scripts, stylesheets, and other resources can only be loaded from the same origin as the web page itself. This policy helps prevent malicious scripts from accessing sensitive data or performing unauthorized actions on behalf of the user.

When you include an external JavaScript file using the `<script>` tag, the browser performs a CORS check to determine whether the script file can be loaded. If the script file is hosted on a different origin, the browser checks for the presence of the "crossorigin" attribute on the `<script>` tag. If the attribute is present, it triggers additional CORS mechanisms to validate the cross-origin request.

The "crossorigin" attribute can have two possible values:

1. "anonymous": This value indicates that the script file does not require any credentials or cookies to be sent along with the request. The browser will add an "Origin" header to the request, indicating the origin of the web page that initiated the request.

2. "use-credentials": This value indicates that the script file requires credentials or cookies to be sent along with the request. The browser will include the relevant credentials and cookies in the request.

By specifying the appropriate "crossorigin" value, you can control how the browser handles the loading and execution of script files from different origins, while adhering to the security restrictions imposed by the same-origin policy.
*/}

// 5. React known as react

{/* 
React, also known as React.js, is a JavaScript library developed and maintained by Facebook. It is called "React" because its main concept revolves around reactive and efficient user interface (UI) development.

The name "React" refers to the library's core principle, which is to efficiently update and render components in response to changes in application state. When the state of a React component changes, React intelligently determines the minimal set of updates needed to reflect those changes in the user interface. It achieves this by utilizing a virtual DOM (Document Object Model) and employing a diffing algorithm to efficiently update only the necessary parts of the UI.

The reactive nature of React allows developers to build dynamic and interactive UIs by composing components that update and react to changes. React encourages a declarative programming style, where developers define how the UI should look for different states rather than manually manipulating the DOM.

Furthermore, React's component-based architecture enables code reusability and modularity, making it easier to build complex UIs by breaking them down into smaller, reusable components. This approach aligns with the idea of "reacting" to changes and building UIs in a reactive manner.

Overall, the name "React" reflects the library's core philosophy of efficiently updating and rendering components in response to changes, making it a popular choice for building modern, responsive web applications.
*/}

// 6. React v/s ReactDOM

{/*
React and ReactDOM are two distinct but related entities in the React ecosystem:

1. React: React, or React.js, is a JavaScript library for building user interfaces. It provides a declarative syntax for describing the UI and efficiently updating the components when the underlying data changes. React is responsible for managing the component lifecycle, state management, and rendering components into a virtual DOM.

2. ReactDOM: ReactDOM is a specific package within the React ecosystem that provides the glue between React and the actual DOM (Document Object Model) of the web page. It includes methods and APIs for interacting with the browser's DOM, such as rendering React components into the browser, updating the DOM in response to component changes, and handling events.

In simpler terms, React focuses on the core functionality of building and managing components, while ReactDOM deals with the interaction between React and the browser's DOM. ReactDOM provides the necessary tools and methods to render React components into the actual HTML elements on the web page and keep them in sync with the component's state and props.

To summarize, React is the library responsible for the component-based UI development, while ReactDOM is the package that facilitates the integration of React components with the browser's DOM.
*/}

//7.difference b/w react.development.js and react.production.js file via cdn

{/*
When using React via a CDN (Content Delivery Network), you will often find two versions of the React library available: `react.development.js` and `react.production.js`. The main differences between these two files are related to performance, size, and debugging capabilities.

1. `react.development.js`:
   - Development Version: This version of React is intended for use during development and debugging stages.
   - Larger Size: The development version is larger in size because it includes additional warnings, error messages, and debugging tools. This helps developers identify potential issues and provides more detailed error information.
   - Enhanced Debugging: The development version enables helpful warnings and error messages in the browser's console. It also provides better support for debugging and offers more readable stack traces, making it easier to trace and identify issues within the React code.

2. `react.production.js`:
   - Production Version: This version of React is optimized for production use.
   - Smaller Size: The production version is smaller in size compared to the development version. It undergoes various optimizations, including minification and removal of development-specific code, comments, and debugging tools.
   - Improved Performance: The smaller file size and optimized code result in faster parsing and execution by the browser, leading to improved performance and reduced load times for end-users.
   - No Warnings or Debugging: The production version disables the warnings and error messages that are present in the development version. This omission helps reduce unnecessary overhead and improves the overall performance of the application.

In summary, the `react.development.js` file includes additional debugging features, larger file size, and helpful warnings for development and debugging purposes. On the other hand, the `react.production.js` file is optimized for production use, resulting in a smaller file size, improved performance, and the absence of debugging features and warnings. It is recommended to use the production version in a production environment to benefit from the optimized and streamlined code.
*/}

// 8. async and defer

{/*
`async` and `defer` are attributes that can be used in HTML `<script>` tags to control how external JavaScript files are loaded and executed. 

1. `async` attribute:
   - When the `async` attribute is added to a `<script>` tag, it indicates that the script file can be loaded asynchronously.
   - An asynchronously loaded script does not block the parsing of the HTML document. The browser continues parsing the HTML document while the script is being fetched in the background.
   - Once the script is fetched, it is executed as soon as it is available, regardless of whether the HTML document has finished parsing or not.
   - Multiple scripts with the `async` attribute can be downloaded concurrently, potentially improving page loading performance.
   - However, the order of script execution may not be guaranteed, as scripts may be executed as soon as they are available, regardless of their original order in the HTML document.

2. `defer` attribute:
   - The `defer` attribute also allows the script to be loaded asynchronously, but with a difference in behavior compared to `async`.
   - A script with the `defer` attribute is also fetched asynchronously, allowing the HTML parsing to continue without being blocked.
   - However, the script is executed only after the HTML document has finished parsing.
   - Multiple scripts with the `defer` attribute are executed in the order they appear in the HTML document.
   - The `defer` attribute is useful when the execution order of the scripts is important, and the scripts are not dependent on modifying the DOM immediately during parsing.

In summary, the `async` attribute allows the script to be fetched and executed asynchronously, without blocking the HTML parsing. The `defer` attribute also fetches the script asynchronously but ensures that the script is executed after the HTML parsing is complete and in the order they appear in the document.
*/}