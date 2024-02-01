## Mono Repository

I decided to build the application on a mono repository with the [turbo] tool provided by npm.

[//]: # "--- Images and links section ---"
[turbo]: https://turbo.build/

## Configuration

- To do this, it was necessary to define a workspace in the **package.json** to determine the workspace path. \
- Modify the start:dev script of the api to be able to synchronize the **"run dev"** script of the root \
package package piped with the turbo.json configuration file which contains the command that can launch \
the npm run dev script in the api as well as in the customer.

## Dependency installation 

- - To install dependencies relating to the application you want (api/client) you must specify the workspace with the workspace flag like this:

```shell
npm i --worskspace client react-router-dom 
```
