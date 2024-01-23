# vite_template

這個模板可以幫助開始使用 Vue 3 在 Vite 中進行開發。


## Recommended IDE Setup / 推薦的 IDE 設置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (並禁用 Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## 功能demo
1. 自製地圖
    [自製地圖demo](https://tibamef2e.com/chd104/ingrid/front/minimap)
    [code](https://github.com/ingridkao/tibame_vite_template_front/blob/CHD104-day5/src/views/MiniMapView.vue)

2. GSAP
    下載GSAP
    ```sh
        npm install gsap
    ```
    [demo](https://tibamef2e.com/chd104/ingrid/front/gsap)
    [code](https://github.com/ingridkao/tibame_vite_template_front/blob/CHD104-day5/src/views/GsapView.vue)



## Customize configuration / 自定義配置

請參閱 [Vite 配置參考](https://vitejs.dev/config/).



## Project Setup / 項目設置

1. 將專案clone後記得使用以下指令，安裝所有套件

    ```sh
    npm install
    ```

2. 進入開發模式，啟動web server

    ```sh
    npm run dev
    ```

3. 準備部署，編譯及壓縮 / Compile and Minify for Production

    ```sh
    npm run build
    ```



## 安裝套件
1. axios

    用來發送 HTTP 請求，可以被用來替代 JavaScript 原生的 fetch 函數，並且提供了一些額外的功能和優勢。
    ```sh
    npm install axios
    ```

2. sass/scss

    安裝 Sass（Syntactically Awesome Stylesheets）的 npm 套件，其中的 -D 選項表示將該套件安裝為專案的開發依賴（devDependency）。
    ```sh
    npm install -D sass
    ```

