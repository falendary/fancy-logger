# Fancy logger
Customized web-tools logging system to comfort develop

## DEMO

## Light theme
![alt text](http://i.imgur.com/WYU7IfN.jpg "Light")

## Dark theme
![alt text](http://i.imgur.com/lf2TvPO.jpg "dark")

## Install
### NPM
```sh
npm install fancy-logger
```
## How to use
Just call fancyLogger with proper method 
 ```sh
var data = [{...}, {...}, ...]
fancyLogger.collection('MyData', data);
 ```
## List of methods

#### .controller
Print controller status
 ```sh
fancyLogger.controller(controllerName, message, importance, customCSS)
 ```
#### .collection 
 Print collection
 ```sh
fancyLogger.collection(collectionName, collection, importance, customCSS)
 ```
 
#### .property 
 Print property value
 ```sh
fancyLogger.property(propertyName, property, importance, customCSS)
 ```
 
#### .component 
 Print component
 ```sh
fancyLogger.collection(componentName, component, importance, customCSS)
 ```
 
#### .service 
 Print service status
 ```sh
fancyLogger.service(serviceName, message, importance, customCSS)
 ```
 
## Warning
 
Passing custom css disables **importance** (describes opacity of log) property
 
 