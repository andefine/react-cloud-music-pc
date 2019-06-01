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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



## records

### 使用 `sass` [文档地址Adding a Sass Stylesheet](https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet)
```shell
yarn add node-sass
```

### 配置 `alias`
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
