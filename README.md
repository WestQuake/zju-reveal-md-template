# ZJU Reveal-md Template

这是一个面向浙江大学汇报场景的 `reveal-md` 模板项目。项目保留了浙江大学的基础视觉元素，并把常用页面整理成可复用的语义化容器。`main.md` 是容器使用示例，不包含个人、实验室或论文信息。

## 快速开始

### 环境要求

- Node.js 与 npm
- `make`（Windows 可使用 MinGW Make）
- 可访问网络，用于首次安装本地 `reveal-md` 依赖和加载可选的字体排版脚本

### 在线预览

在项目根目录运行：

```bash
make live
```

然后打开终端提示的本地地址。预览会监听 `main.md`、`custom.css` 和 `assets/` 的变化。

### 生成静态网页

```bash
make build
```

生成结果位于 `site/`，可以直接部署为静态网站。图片等资源会从 `assets/` 一起复制到输出目录。

### 导出 PDF

优先使用矢量导出：

```bash
make pdf
```

如果需要使用逐页截图生成 PDF，可以运行：

```bash
make pdf-raster
```

导出的 PDF 默认保存在项目根目录，相关临时文件和导出结果不会提交到 Git。

首次执行任意构建目标时，`Makefile` 会自动安装 `.vendor/reveal-md` 的 npm 依赖。生成的 `.vendor/reveal-md/node_modules/` 已被忽略，不需要手动提交。

## 容器目录

所有容器样式集中在 `custom.css`，命名按照页面语义组织。历史版本中可用的双栏、流程、表格和验证布局已经保留，并统一为下面这些名称。

| 用途 | 主要容器 | 说明 |
| --- | --- | --- |
| 页面框架 | `.slide-frame`, `.slide-frame--page`, `.slide-frame--cover`, `.slide-frame--section`, `.slide-frame--closing` | 控制页面类型、背景和内边距 |
| 封面与目录 | `.cover-content`, `.cover-title`, `.agenda-frame`, `.agenda-list` | 用于封面标题、汇报信息和目录 |
| 分割页 | `.section-body`, `.section-title`, `.section-note` | 用于章节过渡页 |
| 个人或项目信息 | `.profile-layout`, `.profile-card`, `.metric-grid`, `.content-block` | 组合图片、名称、指标和要点；左右区域自动等高 |
| 并列卡片 | `.feature-grid`, `.feature-card`, `.focus-grid`, `.focus-card` | 展示两个或多个并列模块；删除卡片后剩余卡片自动补齐 |
| 图片与媒体 | `.split-layout`, `.compare-stack`, `.compare-card`, `.figure-frame` | 左侧说明、右侧图片和图注；所有图片类型共用这一套容器 |
| 上下布局 | `.stack-layout`, `.stack-visual`, `.stack-points`, `.stack-point` | 上方放主视觉，下方排列要点；数量变化时自动均分宽度 |
| 左右布局 | `.layout-split`, `.layout-panel` | 并列展示背景与结果、问题与回答等内容，并自动等高 |
| 三栏布局 | `.task-grid`, `.task-card` | 展示三个并列阶段或信息模块；少一个时剩余卡片自动扩展 |
| 复合布局 | `.composite-layout`, `.composite-main`, `.composite-side` | 组合主内容、侧栏提示和补充信息，并保持外框对齐 |
| 任务卡片 | `.task-grid`, `.task-card`, `.stat-strip`, `.task-coverage` | 展示任务、指标和底部三项补充说明 |
| 框架图 | `.framework-layout`, `.framework-visual`, `.framework-node`, `.framework-key` | 用流程节点和说明项展示系统、方法或信息流 |
| 图片或图表 | `.figure-frame`, `.figure-caption` | 框架图、数据图表和分析图都使用同一个媒体容器 |
| 研究动机 | `.motivation-flow`, `.motivation-bottom`, `.research-question` | 上方展示动机流程，下方并列说明背景和核心问题 |
| Case 展示与数据流程 | `.data-layout`, `.numbered-flow`, `.case-showcase`, `.case-showcase-result` | 左侧列步骤，右侧展示一个可替换的案例或结果示例 |
| Draft / Verification | `.definition-grid`, `.definition-card`, `.definition-flow`, `.definition-line` | 并列展示生成流程和验证流程 |
| Self-Verify | `.verify-hero-layout`, `.verify-training-row`, `.verify-result-table` | 展示 Mix-Train、GT 监督和自验证信号 |
| 通用流程 | `.process-layout`, `.process-list`, `.process-step`, `.process-cards` | 表达有明确先后顺序的步骤 |
| 表格 | `.table-layout`, `.table-card`, `.comparison-table` | 展示结构化信息或方案对比 |
| 验证与结论 | `.verify-layout`, `.verify-row`, `.verify-table`, `.verify-conclusion` | 组织输入、证据、输出和下一步 |

颜色修饰类使用统一的 `--gold`、`--green` 和 `--accent` 后缀，例如 `.feature-card--gold` 或 `.verify-row--gold`。不需要某个颜色时，直接使用基础容器即可。

## 如何使用容器

1. 从 `main.md` 复制最接近目标页面的 HTML 结构。
2. 保留容器 class，只替换标题、正文、标签和图片路径。
3. 将图片放入 `assets/`，并在 Markdown 中使用相对路径，例如：

   ```html
   <div class="figure-frame">
     <img src="assets/overview.svg" alt="示例图" />
     <div class="figure-caption">一句简短的图片说明。</div>
   </div>
   ```

4. 图片应当服务于一个明确观点，并配合 `.figure-caption` 写出简短说明。框架图、数据图表和分析图不需要分别建立新的 CSS 容器。
5. 如果一个页面同时包含太多模块，优先拆成多个页面，而不是继续缩小字体。

并列容器使用 `auto-fit` 网格，不要给每个卡片写固定宽度。复制 `.stack-points`、`.task-grid` 或 `.feature-grid` 后，直接增删子项即可，CSS 会重新分配列宽并让同一行子项保持等高。

验证页默认使用紧凑版 `.verify-layout`，没有额外说明时，两行验证内容会自然靠近。如果在两行之间加入解释文字，或希望保留更明显的上下呼吸空间，可以改用 `.verify-layout--spacious`。

`.verify-row` 中的主要说明建议拆成 `.verify-copy-title` 和 `.verify-copy-sub` 两行：第一行写对象或问题，第二行写动作或结论。这样可以复用 `3.3 验证与结论容器` 和 `3.5 Self-Verify` 中的“主标题 + 副说明”层级。

项目中的 SVG 示例图是抽象占位素材，可以直接替换为自己的图表或插图。浙江大学 logo 属于模板品牌元素，建议保留并使用 `alt` 文本。

## 文件说明

- `main.md`：完整的容器用法示例和占位文案。
- `custom.css`：按页面框架、信息、卡片、媒体、流程、表格和验证分组的样式。
- `template.html`：reveal-md 的 HTML 模板和初始化配置。
- `assets/`：logo、占位图片和示例 SVG。
- `Makefile`：预览、静态构建和 PDF 导出入口。
- `.vendor/reveal-md/`：项目固定使用的 reveal-md 源码与依赖描述。

## 许可与内容

此仓库中的示例文字和抽象图片仅用于展示排版方式。使用模板制作正式汇报时，请自行确认图片、字体、数据和其他外部素材的授权范围。
