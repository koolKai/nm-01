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

