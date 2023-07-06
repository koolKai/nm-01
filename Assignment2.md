# Ignite the App

### Q.1. What is 'npm'?

=> It is a package manager for the JavaScript programming language, primarily used with the Node.js runtime environment. NPM allows developers to discover, install, and manage packages and dependencies for their Node.js projects.
NPM simplifies the process of managing packages and dependencies in the Node.js ecosystem, making it easier for developers to build robust and efficient applications.

### Q.2. What is 'Parcel/Webpack' ? Why do we need it? 

=> Parcel and Webpack are both popular bundlers for JavaScript applications. They help manage and bundle your application's code, assets, and dependencies, preparing them for deployment in a web browser environment. While they serve a similar purpose, there are some differences between the two.

1. Parcel:
Parcel is a zero-configuration bundler, meaning it requires minimal setup. It automatically analyzes your project's structure, detects dependencies, and creates an optimized bundle for you. With Parcel, you can simply point it to your entry file, and it handles the rest. It supports various languages and asset types out of the box, including JavaScript, CSS, HTML, images, and more. Parcel also has built-in support for hot module replacement, which allows for live reloading during development.

2. Webpack:
Webpack is a highly configurable bundler that offers more flexibility and customization options compared to Parcel. It requires you to define a configuration file that specifies how your application should be bundled. Webpack allows you to define loaders and plugins, which enable you to handle different file types, perform transformations on your code (e.g., transpilation with Babel), optimize assets, and more. It offers advanced features like code splitting, allowing you to split your bundle into smaller chunks for better performance and caching.

Why do we need them?
Both Parcel and Webpack are essential tools for modern web development, and they address several challenges:

1. Dependency management: They help manage the dependencies required by your application, ensuring that all the necessary modules and libraries are included in the final bundle.

2. Code bundling: They bundle your application's code and assets into a single or multiple files that can be efficiently served to web browsers. This bundling process improves performance by reducing the number of network requests and optimizing the size of the files.

3. Asset handling: They provide capabilities to handle various types of assets, such as CSS, images, fonts, and more, enabling you to include these assets in your JavaScript modules.

4. Transformation and optimization: They allow you to apply transformations and optimizations to your code, such as transpiling newer JavaScript syntax to older versions for better browser compatibility, minifying and compressing code, and optimizing assets for performance.

5. Development experience: They provide features like hot module replacement, which allows you to see the changes in your code reflected instantly in the browser during development, improving your productivity.


### Q.3. What is `.parcel-cache`?

=> The ".parcel-cache" directory is a cache folder created by Parcel bundler to store processed and optimized versions of your project's assets and dependencies, improving build performance by avoiding unnecessary reprocessing of files.

### Q.4. What is npx?

=> NPX is a command-line tool that comes bundled with npm, the Node Package Manager. It stands for "Node Package Execute." NPX allows you to run Node.js executables or execute commands from installed packages without the need to install them globally or specify their exact paths.

Here are a few key points about NPX:

1. Running executables: NPX enables you to run executables installed in your project's `node_modules` directory or in packages that you haven't installed globally. It automatically locates and executes the desired command.

2. Package-specific commands: NPX allows you to run commands that are specific to a package without needing to install the package globally or add it as a project dependency. It resolves the command from the package's installation directory.

3. Version management: NPX ensures that the command is executed with the appropriate version of the package, even if multiple versions are installed in your project. It resolves the version based on the local configuration.

4. Temporary installations: If the required package is not already installed, NPX can automatically download and install it temporarily for the current execution. This ensures that you have the necessary dependencies without cluttering your project's dependencies permanently.

5. Command-line arguments: NPX allows you to pass command-line arguments directly to the executed command. This provides flexibility in customizing the behavior of the executed command.

NPX is particularly useful when you want to run one-off commands, try out new tools, or execute commands from packages without the need for a global installation. It simplifies the process of running Node.js executables and makes it easier to manage dependencies on a per-command basis.


### Q.5. What is difference between "dependencies" and "devDependencies"?

=> In the context of Node.js and package management, "dependencies" and "devDependencies" refer to two different categories of packages that are specified in the package.json file of a project. Here's the difference between them:

1. Dependencies:
Dependencies are the packages that your project requires to run correctly in a production environment. They typically include runtime libraries, frameworks, utilities, or other modules that are necessary for your application's functionality. These packages are essential for the proper functioning of your application when it is deployed and used by end-users. 

Dependencies are installed by default when you run the `npm install` command without any specific flags. They are also automatically installed when you use a package's installation command (e.g., `npm install <package-name>`). Dependency information is stored in the "dependencies" section of the package.json file, along with their specified versions or version ranges.

2. DevDependencies:
DevDependencies, on the other hand, are packages that are only required during development, testing, or building of your project. They include tools, testing frameworks, development servers, code linters, and other utilities that assist in the development and testing process. These packages are not necessary for the production runtime of your application.

DevDependencies are typically used for tasks such as running tests, transpiling code, bundling assets, generating documentation, and other development-related workflows. They are installed separately from the regular dependencies and are not included in the production build or deployment of your application.

To install devDependencies, you can use the `npm install --dev` or `npm install --only=dev` command. DevDependency information is stored in the "devDependencies" section of the package.json file, similar to regular dependencies, with specified versions or version ranges.

The separation of dependencies and devDependencies allows for a clearer distinction between the packages needed for development and those required for production. It also helps reduce the size and complexity of the production build by excluding unnecessary development-specific dependencies.

### Q.6. What is Tree Shaking?

=> Tree shaking is a technique used in JavaScript module bundlers to remove unused code from the final bundled output. It analyzes the dependency tree of a module and selectively includes only the necessary code in the bundle, eliminating dead or unreachable code. This helps reduce the size of the bundled JavaScript file, improving performance by reducing download times and optimizing execution.

### Q.7. What is Hot Module Replacement?

=> Hot Module Replacement (HMR) is a feature in development servers and module bundlers, such as Webpack, that allows for real-time updates to the application's code and assets without requiring a full page reload. It enables developers to see the changes they make in their code immediately reflected in the running application, providing a faster and more efficient development experience.

When HMR is enabled, the development server monitors changes to the source code files. When a file is modified, the server sends an update signal to the browser, and the browser applies the changes to the running application without reloading the entire page. This means that the application state, such as variables, component state, or current page position, can be preserved during the update.

HMR not only applies updates to JavaScript code but also handles updates to CSS stylesheets, images, and other related assets. It can inject new styles or replace existing styles in the browser without requiring a page refresh.

The benefits of Hot Module Replacement include:

1. Faster development iterations: Developers can see changes instantly without manually refreshing the page or restarting the development server, reducing development time and improving productivity.

2. Preserved application state: HMR keeps the current state of the application, allowing developers to make code changes while preserving the existing data and interactions in the running application.

3. Improved debugging and error handling: HMR provides better feedback on code errors and highlights them in real-time, helping developers identify and fix issues more quickly.

4. Better UX/UI development: HMR allows for instant updates to CSS styles, enabling designers and front-end developers to see the visual changes they make in real-time without disrupting the user experience.

It's important to note that HMR is primarily intended for use in development environments and is not meant for production deployments. In production, a bundled and optimized version of the code is typically used, without the need for real-time updates.

HMR significantly enhances the developer experience by providing a seamless and efficient way to see code changes immediately without interrupting the application's state or requiring manual refreshes.

### Q.8. List down your favorite 5  superpower of Parcel and describe any 3 of them?

=> 

### Q.9. What is ".gitingnore"? 

=> The ".gitignore" file is a text file used by the version control system Git to specify which files and directories should be ignored and not tracked in a Git repository. When you commit changes to a Git repository, Git looks at the .gitignore file to determine which files and directories should be excluded from version control.

In the .gitignore file, you can specify file patterns, directory names, or specific file paths that should be ignored. Here are some common examples of what you might include in a .gitignore file:

1. Build artifacts: Files or directories generated during the build process, such as compiled binaries, object files, or build output folders.

2. Dependency directories: Directories that contain dependencies or external libraries fetched from package managers or third-party sources. These directories can be reinstalled or re-downloaded as needed, so they don't need to be tracked in the repository.

3. Temporary files: Temporary files, cache files, or backup files that are created by text editors or development tools during the development process.

4. IDE or editor-specific files: Configuration files or directories specific to your development environment or code editor. These can include settings files, project files, or editor-specific cache folders.

5. Environment-specific configuration: Configuration files that contain sensitive or environment-specific information, such as API keys or credentials. These files should not be committed to the repository for security reasons.

6. Logs: Log files generated by your application or development tools. These files can be large and change frequently, making them unsuitable for version control.

7. Personal or machine-specific files: Files that are specific to your personal setup or local development environment, such as user-specific configuration files or machine-specific settings.

The exact contents of the .gitignore file depend on the specific requirements and structure of your project. You can create and customize the .gitignore file according to your project's needs. There are also predefined .gitignore templates available for popular programming languages, frameworks, and development environments, which can serve as a starting point for your .gitignore file.

Keeping the .gitignore file up to date is important to ensure that unnecessary or sensitive files are not accidentally committed to the repository, keeping the repository clean and focused on essential code and project files.

### Q.10. what is difference between package.json and package-lock.json?

=> "package.json" and "package-lock.json" are both files used in Node.js projects for managing dependencies, but they serve different purposes.

1. package.json:
The "package.json" file is the main configuration file for a Node.js project. It contains metadata about the project, such as the project name, version, author, and description. It also includes the list of dependencies and devDependencies required by the project, along with their specified versions or version ranges.

The package.json file is typically manually maintained and updated by developers. It provides a high-level view of the project's dependencies and allows other developers to understand and reproduce the project's environment. The dependencies listed in the package.json file define the required packages for the project, and they are installed when running "npm install" or "yarn install" commands.

2. package-lock.json:
The "package-lock.json" file is automatically generated by npm (Node Package Manager) or Yarn during the installation or update of project dependencies. It serves as a deterministic record of the exact versions of packages that were installed.

The package-lock.json file is used for two main purposes:

   a. Dependency version locking: It locks down the exact versions of all the packages and their transitive dependencies installed in the project. This ensures that the same versions of dependencies are installed consistently across different environments and prevents any unintended updates that may cause compatibility issues.

   b. Dependency resolution: It provides a detailed resolution of package versions based on the dependency tree of the project. This helps ensure that all developers or build environments get the same versions of dependencies, even if they use different operating systems or have different global package installations.

The package-lock.json file is automatically updated by npm or Yarn whenever you install or update packages, ensuring that the exact dependency versions and their resolved dependencies are recorded.

In summary, the package.json file defines the high-level dependencies required by the project, while the package-lock.json file ensures deterministic and consistent installation of those dependencies across different environments. The package-lock.json file is primarily generated and managed by the package manager itself and is not typically manually modified by developers.


### Q.11. What is "node_modules"? Is it good idea to push that on git?

=> A Node module refers to a reusable piece of JavaScript code or library that encapsulates functionality and can be imported and used in other Node.js applications. Node modules are typically packaged and distributed using the Node Package Manager (npm) or Yarn.

When you install dependencies for your Node.js project using npm or Yarn, the modules are downloaded and stored in the `node_modules` directory within your project's folder structure. Each module typically contains its own code, configuration files, and potentially additional dependencies.

As for whether it's a good idea to push modules to a Git repository, the general practice is to exclude the `node_modules` directory from version control. Here are a few reasons for this:

1. Dependency management: The `node_modules` directory can contain a large number of files, which can make your repository significantly larger and slower to clone or fetch. Since the dependencies can be easily installed using npm or Yarn based on the `package.json` file, there's no need to include them in version control.

2. Build consistency: Different developers or environments may have different versions of dependencies installed based on their local setups. By excluding the `node_modules` directory, you ensure that everyone working on the project installs the same versions of dependencies specified in the `package.json` file.

3. Faster deployments: When deploying your application, you don't need to include the `node_modules` directory, as it can be recreated by running the `npm install` or `yarn install` command on the deployment server. This reduces the size and complexity of your deployment package.

To ensure that other developers or deployment environments can easily reproduce your project's dependencies, it's important to include the `package.json` and `package-lock.json` (or `yarn.lock`) files in your version control. These files specify the exact versions or version ranges of the dependencies required for your project.

In summary, it's generally recommended not to push modules (i.e., the `node_modules` directory) to Git but instead rely on package managers to install dependencies based on the `package.json` file. This practice helps keep your repository clean, reduces its size, ensures consistent dependency management, and simplifies deployments.

### Q.12. What is "dist" folder?

=> the "dist" folder contains the compiled, optimized, and ready-to-deploy version of a project's source code, making it easier to distribute the project to end-users or deploy it to production servers.


### caret '^' and tilde '~' 

=> In the context of specifying versions in a package.json file, the caret (^) and tilde (~) symbols are used as part of version range notation to define the acceptable range of package versions.

1. Caret (^):
The caret symbol (^) is used to indicate a compatible range of versions. When used with a version number, it allows updates to the most recent minor or patch version while keeping the major version fixed. For example, specifying "^1.2.3" means that any version from 1.2.3 up to, but excluding, 2.0.0 is considered acceptable.

2. Tilde (~):
The tilde symbol (~) is used to specify a range that allows for updates to the most recent patch version while keeping the major and minor versions fixed. When used with a version number, it allows updates to the most recent patch version within the specified minor version. For example, specifying "~1.2.3" means that any version from 1.2.3 up to, but excluding, 1.3.0 is considered acceptable.

Here are a few examples to illustrate the use of caret and tilde:

- "^1.2.3": Allows updates to any version in the 1.x.x range, as long as the major version remains 1.
- "~1.2.3": Allows updates to any version in the 1.2.x range, as long as the major and minor versions remain 1.2.
- "^0.2.3": Allows updates to any version in the 0.2.x range, as long as the major version remains 0.
- "~0.2.3": Allows updates to any version in the 0.2.x range, as long as the major and minor versions remain 0.2.

These version range notations are used to provide flexibility in managing dependencies by allowing for updates to bug fixes and patches while maintaining a certain level of compatibility with the specified major and minor versions. The specific version range notation chosen depends on the desired level of flexibility and compatibility required for the project.


### Different types of script in html

=> In HTML, the `<script>` tag is used to embed or reference JavaScript code within an HTML document. The `<script>` tag supports different types of script declarations through the `type` attribute. Here are the commonly used script types:

1. Inline Scripts:
   ```html
   <script type="text/javascript">
     // JavaScript code here
   </script>
   ```
   The `text/javascript` type is the default and most widely supported script type. If no `type` attribute is specified, the browser assumes it to be `text/javascript`.

2. External Scripts:
   ```html
   <script src="script.js" type="text/javascript"></script>
   ```
   By specifying the `src` attribute, you can reference an external JavaScript file. The `type` attribute in this case is optional, as `text/javascript` is the default.

3. Module Scripts:
   ```html
   <script type="module">
     // ES modules code here
   </script>
   ```
   The `module` type is used to define JavaScript code as an ES module. It allows you to use the `import` and `export` statements for modular JavaScript development. Note that module scripts are subject to strict mode by default.

4. Inline Event Handlers:
   ```html
   <button onclick="myFunction()">Click me</button>
   ```
   In this case, the `type` attribute is not used, but the script code is directly embedded within the event handler attribute (`onclick`, `onload`, etc.). This approach is known as an inline event handler.

These are the primary script types used in HTML. It's important to note that HTML5 does not enforce strict adherence to specific script types, and modern browsers often assume `text/javascript` by default if the `type` attribute is omitted or unrecognized. However, specifying the appropriate script type is considered good practice for clarity and compatibility purposes.


# Code update #

- git initialize
- initialize 'npm' in the repo
- 'react' and 'react-dom' installed
- app is ignited with parcel
- .gitignore files are added



### Reference
- parcel documentation
- browserlist.dev


