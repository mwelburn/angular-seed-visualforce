angular-seed-visualforce
====

This project is an attempt to recreate the skeleton of the [angular-seed](https://github.com/angular/angular-seed) repo, but leveraging Visualforce design paradigms to accomplish it.

To take advantage of the resource-bundle folder, take a look at [MavensMate](https://github.com/joeferraro/MavensMate) which has automated Resource Bundle deployments.

Notes
----

The current implementation shows two separate ways for routes to be defined: HTML Partials and APEX Pages
* HTML Partials require that the relative path of the static resource is captured in a Visualforce Page/Component, and then that value (stored in a variable) gets referenced when determining the routing 
* APEX Page partials simply require /apex/PageName

Examples:
```
  AngularJS.component

  var angularImplPath = '{!$Resource.AngularImpl}';
```
```
  /app/js/app.js

  //APEX
  $routeProvider.when('/view2', {templateUrl: '/apex/partial2', controller: 'MyCtrl2'});
  //HTML Partial
  $routeProvider.when('/view2', {templateUrl: angularImplPath + '/app/partials/partial2.html', controller: 'MyCtrl2'});
```

As it currently stands, no POC'ing has been done to see the extent of Salesforce access an HTML partial would have leveraging ngForce. The assumption is none considering the lack of Visualforce access to session information, unless the required information is also captured in javascript variables and set in that way. As such, HTML partials are likely more ideal for static content.

Usage
----

Included with the package is a Visualforce tab. You can either add the Angular Demo tab to your Application, or you can simply navigate to your explicit Salesforce URL and append /apex/AngularIndex

```
Example: https://na15.salesforce.com/apex/AngularIndex
```

Open Items
----

* Need to prove out how much ngForce functionality can be accessed via an HTML partial (if any)
* Angular tests are not yet implemented
* Automated build is not yet implemented

Installation Link
----
  
* [https://login.salesforce.com/packaging/installPackage.apexp?p0=04ti00000003ujC](https://login.salesforce.com/packaging/installPackage.apexp?p0=04ti00000003ujC)
* **Note**: not guaranteed to be current
