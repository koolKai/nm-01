### Assignment#3 Laying the foundation

# JSX
# React.createElement vs JSX
# Babel & Parcel role in JSX
# Components


# Q.1. What is JSX?

=> JSX (JavaScript XML) is an extension to the JavaScript language that allows you to write HTML-like code within JavaScript. It is commonly used in React applications to define the structure and appearance of components.

JSX resembles a mix of JavaScript and HTML syntax, where you can write HTML-like tags and include JavaScript expressions within curly braces `{}`. It provides a more declarative and intuitive way to describe the UI components compared to manipulating the DOM directly.

For example, instead of creating elements using `document.createElement` and manipulating their properties, you can define components in JSX:

```jsx
const element = <h1>Hello, JSX!</h1>;
```

JSX elements can contain attributes, event handlers, and children elements:

```jsx
const button = (
  <button onClick={handleClick} className="my-button">
    Click me
  </button>
);
```

JSX is transpiled into regular JavaScript code before it is executed in the browser. Tools like Babel are commonly used to transform JSX into compatible JavaScript code.

React components typically use JSX to define their structure and render the UI. It allows developers to combine the power of JavaScript and the expressiveness of HTML-like syntax in a single file, making it easier to build and maintain complex user interfaces.


# Q.2. SuperPowers of JSX?

=> JSX offers several powerful features that make it a popular choice for building user interfaces in React. Here are some of its key superpowers:

1. **Declarative Syntax:** JSX provides a declarative syntax for defining the structure and appearance of UI components. It allows you to express how your components should look and behave in a more intuitive and HTML-like manner.

2. **Component Composition:** JSX enables component composition, allowing you to create complex UIs by combining smaller, reusable components. You can nest components within each other, making it easier to manage and organize your UI code.

3. **JavaScript Expressions:** With JSX, you can embed JavaScript expressions within curly braces `{}`. This allows you to dynamically generate content, compute values, handle events, and perform conditional rendering based on the state or props of your components.

4. **Integration of HTML Markup:** JSX allows you to write HTML-like markup directly in your JavaScript code. It seamlessly integrates HTML tags, attributes, and styles, making it familiar to web developers and facilitating the transition from traditional HTML/CSS development to React.

5. **Static Type Checking:** JSX works well with static type checkers like TypeScript and Flow. These tools provide additional benefits such as compile-time type checking, auto-completion, and improved code navigation, enhancing code quality and reducing errors in large codebases.

6. **Tooling and Ecosystem Support:** JSX is widely supported by popular development tools and frameworks. The React ecosystem provides a rich set of libraries and tools specifically designed to work with JSX, enabling efficient development, debugging, and performance optimization.

Overall, JSX combines the power of JavaScript with a familiar HTML-like syntax, making it a powerful tool for building dynamic and interactive user interfaces in React. It enhances developer productivity, code maintainability, and the overall user experience of web applications.

# Q.3. Role of 'type' attribute in script tag? What option can i use there?
=> The `type` attribute in the `<script>` tag is used to specify the MIME type of the content within the script block. It helps the browser understand how to interpret and execute the script code.

In the past, the `type` attribute was required and used to indicate the scripting language being used, such as `text/javascript` for JavaScript code. However, with the introduction of HTML5, the `type` attribute is no longer required for JavaScript code, as it is assumed to be JavaScript by default.

Here are a few options that can be used with the `type` attribute:

1. **No `type` attribute:** If you are writing JavaScript code, you can omit the `type` attribute altogether. The browser will assume it to be JavaScript.

```html
<script>
  // JavaScript code here
</script>
```

2. **`type="text/javascript"`:** This is the older approach to explicitly specify that the content is JavaScript. However, as mentioned earlier, it is no longer necessary in HTML5.

```html
<script type="text/javascript">
  // JavaScript code here
</script>
```

3. **`type="module"`:** This option is used when you are working with JavaScript modules. It enables the use of ES modules, allowing you to write modular code with import/export statements.

```html
<script type="module">
  // JavaScript module code here
</script>
```

4. **Other MIME types:** The `type` attribute can be used to specify other types of scripts, such as server-side scripting languages or custom scripting languages. For example, if you are using PHP for server-side scripting, you can set the `type` attribute to `"text/php"`.

```html
<script type="text/php">
  // PHP code here
</script>
```

It's important to note that for JavaScript code, using the `type` attribute is optional in modern HTML5 documents, as the browser assumes it to be JavaScript by default. However, the `type` attribute can still be useful in scenarios where you want to specify a different scripting language or work with JavaScript modules.

# Q.4. Babel & JSX ?

=> Babel plays a crucial role in working with JSX. JSX is a syntax extension used in React to describe the structure and appearance of user interfaces. However, JSX is not directly understood by browsers, as they only understand plain JavaScript.

Here's where Babel comes into play:

1. **Transpiling JSX**: Babel is a JavaScript compiler that allows developers to write modern JavaScript code using features that may not be supported by all browsers or environments. Babel includes a JSX plugin that transforms JSX code into regular JavaScript code that can be understood and executed by browsers.

2. **React.createElement**: Babel converts JSX syntax into `React.createElement()` calls. The transformed code replaces JSX tags and attributes with `React.createElement()` function calls, which create React elements based on the JSX structure. For example, this JSX code:

   ```jsx
   const element = <h1>Hello, JSX!</h1>;
   ```

   gets transformed by Babel into:

   ```javascript
   var element = React.createElement("h1", null, "Hello, JSX!");
   ```

   The transformed code is what the browser can execute and render correctly.

3. **Supporting JSX Fragments**: Babel also provides support for JSX fragments, which allow you to return multiple adjacent elements from a component without requiring a parent container. JSX fragments are expressed using the `<React.Fragment>` syntax or the shorthand `<>...</>`. Babel ensures that JSX fragments are transformed into valid JavaScript code that can be rendered properly.

4. **Enabling Modern JavaScript Features**: Babel can be configured to apply transformations not only to JSX but also to other modern JavaScript features. This includes transpiling ES6/ES2015 syntax, async/await, arrow functions, class properties, and more. Babel allows you to use these features in your codebase and automatically converts them into equivalent syntax that is widely supported.

In summary, Babel plays a critical role in the React development workflow by transpiling JSX code into regular JavaScript code that can be understood by browsers. It enables the use of JSX syntax, JSX fragments, and other modern JavaScript features, making it easier to build React applications while maintaining compatibility with a wide range of browsers and environments.