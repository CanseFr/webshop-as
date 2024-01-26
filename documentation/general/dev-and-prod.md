## Dev and Prod 


In local dev we have two different/separate server runin side by side:


```mermaid
---
title: Local developpement
---
stateDiagram-v2
    direction LR
    Webpack-->Nest
    Vite-->React
```


In production the operation will be different, there will only be one server. Imagine that we have a build for the client as well as for the API.
The build of the nest application (api) run on node and must be able to serve the client within it

```mermaid
---
title: Production developpement
---
stateDiagram
    direction LR
    Browser --> API
    state Main_App {
        direction LR
        API 
        Client
    }
    Client --> Browser
```

Explication et schema incomplet....

L'application aura son chemin d'accée classique, et l'api sera sur /api sur la meme url.