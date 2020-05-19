# UI5-Testing

This repository is meant to serve as example for how testing works within UI5. It is basically what happens when you work through the entire "Testing"-Section within the official [UI5 documentation](https://sapui5.hana.ondemand.com/#/topic/291c9121e6044ab381e0b51716f97f52).

### Preview

![](readme_src/Preview.png)

# Getting Started
You can just clone this repository, run npm install and use the [UI5 tooling](https://github.com/SAP/ui5-tooling) to locally serve the application in order to debug/learn from it.

Hint: it already uses the livereload-middleware for the [UI5 tooling](https://github.com/SAP/ui5-tooling), so changes while serving will trigger an immediate update in the browser.

1. Clone the repository
    ```sh
    git clone <repository-url>
    ```
1. Navigate into the cloned repository 
    ```sh
    cd <repository>
    ```
1. Install all dependencies
    ```sh
    npm install
    ```
1. Start the application
    ```sh
    npm start
    ```
## Namespace & Projectname

The paths within this project are - as usual - prefixed by the `projectId` ( which is declared within the `manifest.json` file). The prefix is made up by a given namespace and the name of the project. I must admit that the project name is quite verbose.

* Namespace: `com.mrb`
* Projectname: `UI5-Testing`


# Tutorial Steps

Implemented = :white_check_mark:

# Credits

For more information check:

* [UI5 Documentation](https://sapui5.hana.ondemand.com/#/topic/291c9121e6044ab381e0b51716f97f52)
* [Getting Started](https://sapui5.hana.ondemand.com/#/topic/8b49fc198bf04b2d9800fc37fecbb218.html)
* [Each Step as Download](https://sapui5.hana.ondemand.com/#/entity/sap.m.tutorial.testing)