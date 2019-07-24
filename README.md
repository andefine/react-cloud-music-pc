This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



[NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

## records

### 创建项目
```sh
npx create-react-app my-app --typescript
```

### 使用 `sass` [文档地址Adding a Sass Stylesheet](https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet)
```shell
yarn add node-sass
```

### 配置 `alias`

* 方式一
  - `yarn eject`
  - 找到 `webpack.config.js`
  ```js
  // webpack.config.js
  alias: {
    // Support React Native Web
    // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
    'react-native': 'react-native-web',
    // 添加这一行
    '@': paths.appSrc
  }
  ```

* 方式二

  + 安装这 [`react-app-rewired`](https://github.com/timarney/react-app-rewired) [`customize-cra`](https://github.com/arackaf/customize-cra) 两个依赖
  ```sh
  yarn add react-app-rewired customize-cra
  ```
  + 修改 `package.json·`
  ```json
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  }
  ```
  就是将 `start` `build` `test` 的 `react-scripts` 改成 `react-app-rewired`，`eject` 的不用改
  + 根目录下添加 `config-overrides.js`
  ```js
  const { override, addWebpackAlias } = require('customize-cra')
  const path = require('path')

  module.exports = override(
    addWebpackAlias({
      '@': path.resolve(__dirname, './src')
    })
  )
  ```

  **注意**

  到这一步为止，如果创建项目时没有加 `--typescript`，在文件中使用 `@` 路径别名，重新 `yarn start` 便可以运行(但是 `vscode` 这样就不支持路径的智能提示，需要配置 `jsconfig.json`)。但是我们的项目是 `--typescript` 的，所以创建完项目，根目录下就存在一个 `tsconfig.json` 文件，我们需要在这里做些配置，才可以运行起 `yarn start`，并且 `vscode` 可以智能提示路径

  + 配置 `tsconfig.json`

  根目录下添加 tsconfig.paths.json 文件
  ```json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"]
      }
    }
  }
  ```

  在 `tsconfig.json` 添加
  ```json
  "extends": "./tsconfig.paths.json"
  ```

  这样便大功告成。关于配置别名这里可以往这儿看：[jjenzz's solution](https://github.com/facebook/create-react-app/issues/5118#issuecomment-464025389)

### 关于安装依赖
之前我们如果没上 `ts` 的情况下，直接下载依赖即可，但是现在我们可能还需要添加另一个文件。
例如：安装 `react-router-dom` 之后，我们还需要安装 `@types/react-router-dom`。但是有些不用，比如 `redux`

### 使用 `iconfont`

- 下载必要文件

在阿里巴巴图标矢量库中，搜索图标->添加至购物车->添加至项目->在项目中将源码下载至本地，其实很简单，随便搜几篇文章大概就知道了。

- 项目中引入

将*以iconfont为文件名* *以`css` `eot` `svg` `ttf` `woff`为后缀的这五个文件* 放到一个文件夹下，再在入口文件中引入 `iconfont.css` 就行啦，非常简单

### js

#### URLSearchParams
ie 11 都不支持

### react

#### 自定义组件使用 className ，引用时注意顺序，才能覆盖组件内部样式

#### can React support feature like keep-alive in Vue? [#12039](https://github.com/facebook/react/issues/12039)

#### 勤能生巧
${className || ''} => className = ''



### **react-router**

<!-- TODO -->
#### 使用自定义 Link 来而不是在上面绑定事件触发 `history.push`
具体看`main.js`中配置的路由，`aside-bar.js`和`aside-item.js`，以及 [example `Custom Link`](https://reacttraining.com/react-router/web/example/custom-link)
#### `Link`是可以使用 `className` 的，所以可以自定义样式
#### `BrowserRouter` vs `HashRouter`
#### `history` object
#### location 和 match
#### 路由参数变化时，比如 playlist/:id 变化时如何重新请求数据，更新页面
  之前使用 componentWillReceiveProps，现在react不推荐，使用 componentDidUpdate



### **redux**

#### `state` `redux store` `this` `static`
