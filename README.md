# POC-SPLINE

Spline is an online platform for creating 3D scene that we can export on our website. Until now, I have always been in love with Three.js and React-Three-Fiber. However, this tool has changed drastically how I planned to do my 3D work. Instead of creating mesh and adding the whole logic by code, Spline provide a very good software for manipulating the scene such as my favorite 3D application Blender.

In this poc, I have just tried to create a scene and adding it in a react website. I am using **React** and the **spline** package. On top of that, I am also using the **@splinetool/react-spline** for linking both tool together

## Plan of the presentation

I explain with all the details how I build the project and my way of working.

- [Pocs](#pocs)
- [Development](#development)
- [Running](#running)
- [System](#system)

## POCS

- **Poc 1:** Test to include a spline in a react component
- **Poc 2:** Test to turn the spline into a background
- **Poc 3:**: Test with controller and animation

## Development

Install all the tools in a react application:

```bash
$ npx create-react-app poc-spline
$ cd poc-spline
$ npm install @splinetool/runtime @splinetool/react-spline
```

For using a spline project, use the url provide in the export function of the website. Then, import it using the Spline component:

```js
<Suspense fallback={<div>Loading...</div>}>
  <Spline scene="https://prod.spline.design/IN9PUsuOpxoZgPWh/scene.splinecode" />
</Suspense>
```

And voila!

## Running

For running the project, use the command in the _package.json_:

```bash
$ npm run start
```

## System

Ubuntu Version: Ubuntu 22.04.2
Node Version: v18.12.0

```bash
# Get the version of node
$ node -v

# Get the latest version of ubuntu
$ lsb_release -a
```
