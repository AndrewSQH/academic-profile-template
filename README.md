# Academic Profile Template

一个面向学术同行交流的静态个人主页模板。

它不是传统简历页，也不是营销风格作品集，而是按学术同行最关心的信息来组织页面：

- 你研究什么
- 你现在在做什么
- 你已经产出了什么
- 你拥有什么方法和资源
- 别人为什么应该联系你

## 特点

- 纯静态站点，无需构建工具
- 数据集中在 `content.js`，方便改成自己的主页
- 默认匿名模板，不包含真实个人信息
- 面向研究沟通的信息架构，而不是求职简历结构
- 浅色、克制、正式的学术风格配色
- 支持本地直接预览，适合部署到 GitHub Pages

## 页面结构

当前模板包含以下栏目：

- 首页
- 研究定位
- 研究方向
- 当前工作
- 论文与成果
- 方法与资源
- 学术背景
- 合作交流

这套结构适合大多数研究者主页，也适合博士生、青年教师、博士后和交叉研究者继续调整。

## 项目结构

```text
.
├─ assets/        # 占位图片资源
├─ app.js         # 页面渲染逻辑
├─ content.js     # 所有可替换的模板内容
├─ index.html     # 页面结构
├─ styles.css     # 样式
└─ README.md
```

## 本地预览

直接双击 `index.html` 就能看页面。

更推荐开一个本地静态服务：

```bash
python -m http.server 5500
```

然后访问：

```text
http://127.0.0.1:5500/
```

## 如何改成你自己的主页

### 1. 改内容

主要编辑 [content.js](file:///c:/Users/ASUS/Desktop/Personal%20Resume/content.js)：

- `meta`：网页标题和描述
- `navigation`：导航栏目
- `hero`：首页标题、机构、简介、关键词、联系方式
- `overview`：研究定位
- `research`：研究方向
- `work`：当前工作
- `outputs`：论文、代码、数据、专利、报告等成果
- `methods`：方法、平台和可共享资源
- `background`：学术背景
- `contact`：合作交流信息

### 2. 改头像和图片

默认头像是：

```js
portraitImage: "./assets/avatar-placeholder.svg"
```

你可以替换成自己的图片，例如：

```js
portraitImage: "./assets/my-photo.jpg"
```

### 3. 改品牌文案

如需修改页头品牌信息，编辑 [index.html](file:///c:/Users/ASUS/Desktop/Personal%20Resume/index.html) 中的：

- `brand__mark`
- `brand__text`

### 4. 改配色

主题颜色集中在 [styles.css](file:///c:/Users/ASUS/Desktop/Personal%20Resume/styles.css) 顶部的 `:root` 变量中，例如：

- `--bg`
- `--surface`
- `--text`
- `--accent`
- `--accent-strong`

## 适合放什么信息

如果你准备把模板改成自己的学术主页，建议优先填写：

- 核心研究问题
- 当前在推进的工作
- 已发表 / 在投 / 准备中的成果
- 方法能力与独特资源
- 清晰的合作入口

不建议在首屏放太多：

- 出生日期
- 籍贯
- 泛泛自我评价
- 与研究无关的长段经历
- 过多奖项堆叠

## 部署到 GitHub Pages

最简单的方式：

1. 创建一个 GitHub 仓库
2. 把本项目推上去
3. 在 GitHub 仓库里打开 `Settings`
4. 找到 `Pages`
5. `Source` 选择 `Deploy from a branch`
6. 分支选择 `main`，目录选择 `/ (root)`
7. 保存后等待 GitHub Pages 生成公开链接

## 开源建议

如果你准备二次分发这个模板，建议至少保留：

- `README.md`
- `LICENSE`
- 模板来源说明（如果你后续基于别人的模板继续修改）

## License

MIT
