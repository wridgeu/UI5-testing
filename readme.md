# UI5-Testing

This repository is meant to serve as example for how testing works within UI5. It is basically what happens when you work through the entire "Testing"-Section within the official [UI5 documentation](https://sapui5.hana.ondemand.com/#/topic/291c9121e6044ab381e0b51716f97f52).

### Preview

![](readme_src/Preview.png)

### Testing Pyramid

![](readme_src/TestingPyramid.png)

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

* Step 1: Overview and Testing Strategy :white_check_mark: [0ebd475](https://github.com/SAPMarco/UI5-testing/commit/0ebd475e74be1b46fe3678decf5b20a614f0e715)
* Step 2: A First Unit Test :white_check_mark: [3420350](https://github.com/SAPMarco/UI5-testing/commit/3420350bada98c18491a718d893798b5ada12c66)
* Step 3: Adding the Price Formatter :white_check_mark: [ea435e8](https://github.com/SAPMarco/UI5-testing/commit/ea435e844cc0d7cd35007dc356c53485289ac91b)
* Step 4: Testing a New Module :white_check_mark: [486aba7](https://github.com/SAPMarco/UI5-testing/commit/486aba724b37bc0b66a80d15f69d5b1688c17cb1)
* Step 5: Adding a Flag Button :white_check_mark: [2d014a4](https://github.com/SAPMarco/UI5-testing/commit/2d014a4e352f17e91256aca905ac44937505223b)
* Step 6: A First OPA Test :white_check_mark: [27b0b20](https://github.com/SAPMarco/UI5-testing/commit/27b0b20e14b5a0c79afd777e1cc85d4348d28eb4)
* Step 7: Changing the Table to a Growing Table :white_check_mark: [020e35f](https://github.com/SAPMarco/UI5-testing/commit/020e35f4160a78f2cf3a9059a834cca0852956d0)
* Step 8: Testing Navigation :white_check_mark: [2b69492](https://github.com/SAPMarco/UI5-testing/commit/2b69492eeac6c395e595069efe658dd7f79f030a)
* Step 9: Adding the Post Page :white_check_mark: [e82e3a1](https://github.com/SAPMarco/UI5-testing/commit/e82e3a15933dfbee447ee042cef9ad33b650a39b)
* Step 10: Test Suite and Automated Testing
* Step 11: Testing User Input
* Step 12: Adding a Search
* Step 13: Testing User Interaction
* Step 14: Adding Tabs
* Step 15: Writing a Short Date Formatter Using TDD
* Step 16: Adding the Date Formatter

Implemented = :white_check_mark:

# Additional Information

## OData-Service 'settings'

When declaring the OData-Service as our model, we have added the parameter `metadataUrlParams` like so:

```json
"sap.app": {
    "dataSources": {
      "mainService": {
        "uri": "/here/goes/your/serviceUrl/",
        "type": "OData",
        "settings": {
          "odataVersion": "2.0",
          "localUri": "localService/metadata.xml"
        }
      }
    }
  },
"models": {
      "": {
        "dataSource": "mainService",
        "settings": {
          "metadataUrlParams": {
            "sap-documentation": "heading"
          }
        }
      }
    }
``` 

This results in a GET-Request that looks like the following:

```
http://localhost:8080/here/goes/your/serviceUrl/$metadata?sap-documentation=heading&sap-language=EN 
```

Standard `$metadata`:
```xml
<Property Name="PostingDate" Type="Edm.DateTime" Precision="7" 
   sap:label="Posting Date" /> 
``` 

Extended `$metadata?sap-documentation=heading`:
```xml
<Property Name="PostingDate" Type="Edm.DateTime" Precision="7" 
   sap:label="Posting Date" sap:heading="Pstng Date"/> 
``` 

You can find additional information to the use of this parameter [here](https://help.sap.com/doc/saphelp_gateway20sp12/2.0/en-US/30/6e8c537c8fcc26e10000000a4450e5/frameset.htm).

# Credits

For more information check:

* [UI5 Documentation](https://sapui5.hana.ondemand.com/#/topic/291c9121e6044ab381e0b51716f97f52)
* [Cookbook for OPA5](https://sapui5.hana.ondemand.com/#/topic/ce4b180d97064ad088a901b53ed48b21.html)
* [Getting Started](https://sapui5.hana.ondemand.com/#/topic/8b49fc198bf04b2d9800fc37fecbb218.html)
* [Each Step as Download](https://sapui5.hana.ondemand.com/#/entity/sap.m.tutorial.testing)
* [Test Automation](https://sapui5.hana.ondemand.com/#/topic/ae448243822448d8ba04b4784f4b09a0.html#loioae448243822448d8ba04b4784f4b09a0)
* [Mock Server](https://sapui5.hana.ondemand.com/#/topic/69d3cbd4150c4ffb884e788f7f60fd93)
* [Test Recorder](https://sapui5.hana.ondemand.com/#/topic/2535ef9272064cb6bd6b44e5402d531d)
* [OPA5](https://sapui5.hana.ondemand.com/#/topic/2696ab50faad458f9b4027ec2f9b884d)
* [QUNIT](https://sapui5.hana.ondemand.com/#/topic/09d145cd86ee4f8e9d08715f1b364c51)
* [SAP Gateway Developer Guide](https://help.sap.com/doc/saphelp_gateway20sp12/2.0/en-US/30/6e8c537c8fcc26e10000000a4450e5/frameset.htm)