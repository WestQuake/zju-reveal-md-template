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

导出的 PDF 默认保存为项目上级目录中的 `zju-reveal-md-template.pdf`，相关临时文件和导出结果不会提交到 Git。

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
| 框架图 | `.framework-showcase`, `.framework-image-frame`, `.framework-key` | 用一张图片和四项说明展示系统、方法或信息流 |
| 图片或图表 | `.figure-frame`, `.figure-caption` | 框架图、数据图表和分析图都使用同一个媒体容器 |
| 研究动机 | `.motivation-flow`, `.motivation-bottom`, `.research-question` | 上方展示动机流程，下方并列说明背景和核心问题 |
| Case 展示与数据流程 | `.data-layout`, `.numbered-flow`, `.case-showcase`, `.case-showcase-result` | 左侧列步骤，右侧展示一个可替换的案例或结果示例 |
| 结构布局 | `.structure-grid`, `.structure-card`, `.structure-flow`, `.structure-line` | 并列展示两个结构模块和各自的输入、输出说明 |
| 方法与结果 | `.method-layout`, `.method-row`, `.comparison-panel`, `.result-table` | 左侧展示步骤，右侧展示指标或结果 |
| 通用流程 | `.process-layout`, `.process-list`, `.process-step`, `.process-cards` | 表达有明确先后顺序的步骤 |
| 表格 | `.table-layout`, `.table-card`, `.comparison-table` | 展示结构化信息或方案对比 |
| 信息流程 | `.flow-layout`, `.flow-row`, `.result-table`, `.conclusion-note` | 组织输入、说明、结果和结论 |

颜色修饰类使用统一的 `--gold`、`--green` 和 `--accent` 后缀，例如 `.feature-card--gold` 或 `.flow-row--gold`。不需要某个颜色时，直接使用基础容器即可。结果示例表格的状态单元格可以使用 `.table-status-cell table-status-cell--green` 或 `.table-status-cell table-status-cell--gold` 填满最后一列；不需要颜色时，直接使用普通 `<td>`。

## 如何使用容器

基本流程是：从 `main.md` 复制最接近目标页面的结构，保留 class，只替换标题、正文、标签和图片路径。容器不依赖 JavaScript，直接放在 reveal-md 的 Markdown 页面中即可。

### 1. 页面骨架

所有页面都建议放在一个 `.slide-frame` 中，再根据用途增加修饰类：

```html
<div class="slide-frame slide-frame--page">
  <h2 class="page-title">页面标题</h2>
  <!-- 页面内容 -->
</div>
```

- `.slide-frame--cover`：封面；搭配 `.brand-mark`、`.cover-content`、`.cover-title`、`.cover-meta`。
- `.slide-frame--page`：普通内容页；搭配 `.page-title`。
- `.slide-frame--section`：章节分割页；内部使用 `.section-eyebrow`、`.section-body`、`.section-title`、`.section-note`。
- `.slide-frame--closing`：结束页；内部使用 `.closing-content`、`.closing-title`、`.closing-note`。
- `.agenda-frame`、`.agenda-list`、`.agenda-index`、`.agenda-item`、`.agenda-note`：目录页结构。目录项可以直接增删，网格会重新排列。

### 2. 信息与卡片

#### 个人或项目信息

`.profile-layout` 是左侧信息卡、右侧内容区的双栏布局；`.profile-card`、`.profile-image` 放置头像或 logo，`.profile-content` 放置右侧内容。指标和说明可以这样组合：

```html
<div class="profile-layout">
  <div class="profile-card">
    <img class="profile-image" src="assets/portrait-placeholder.svg" alt="图片占位符" />
    <div class="profile-name">名称占位符</div>
    <div class="profile-role">身份或方向占位符</div>
  </div>
  <div class="profile-content">
    <div class="metric-grid">
      <div class="metric-card"><div class="metric-value">01</div><div class="metric-label">指标标签</div></div>
      <div class="metric-card metric-card--gold"><div class="metric-value">02</div><div class="metric-label">指标标签</div></div>
    </div>
    <div class="content-block">
      <div class="content-block__title">内容标题</div>
      <ul class="bullet-list"><li class="bullet-list__item">说明占位符</li></ul>
    </div>
  </div>
</div>
```

`.metric-grid` 使用自动列宽，删除或增加 `.metric-card` 后不需要手动改宽度。`.content-block` 可以配合 `.tag-list` 或 `.bullet-list` 使用。

#### 并列卡片

- `.feature-grid` + `.feature-card`：适合两个或多个内容模块；`.feature-card--gold` 可强调第二个模块。
- `.focus-grid` + `.focus-card`：适合展示关键词、短结论或三项重点；可使用 `.focus-card--gold`、`.focus-card--green`。
- `.info-banner`、`.info-banner__title`、`.info-banner__meta`：放在卡片组上方，展示统一标题、时间或标签。

```html
<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-title">模块标题</div>
    <div class="feature-question">一句话说明模块用途。</div>
    <div class="feature-line"><b>重点：</b>关键词或结论。</div>
    <div class="feature-tags"><span class="feature-tag">标签 A</span></div>
  </div>
  <div class="feature-card feature-card--gold">
    <div class="feature-title">模块标题</div>
    <div class="feature-question">另一条说明。</div>
  </div>
</div>
```

### 3. 页面布局

#### 左右、上下和复合布局

- `.split-layout`：通用左右布局，适合“文字 + 图片”。子项通常使用 `.compare-stack`、`.compare-card`、`.compare-title`、`.compare-row`。
- `.layout-split` + `.layout-panel`：两个等高面板；可以用 `.layout-panel--gold` 做轻强调。
- `.stack-layout`：上下布局；上方放 `.stack-visual`，下方放 `.stack-points` 和多个 `.stack-point`。
- `.composite-layout`：主内容和侧栏组合；主区域使用 `.composite-main`，侧栏使用 `.composite-side`。

```html
<div class="stack-layout">
  <div class="stack-visual">
    <div class="stack-visual__label">主视觉标题</div>
    <div class="stack-visual__path">图片或流程图占位符</div>
  </div>
  <div class="stack-points">
    <div class="stack-point"><b>重点一</b><span>补充说明。</span></div>
    <div class="stack-point"><b>重点二</b><span>补充说明。</span></div>
    <div class="stack-point"><b>重点三</b><span>补充说明。</span></div>
  </div>
</div>
```

`.stack-points`、`.feature-grid`、`.focus-grid`、`.task-grid` 都使用自动网格和等高行。直接增删子项即可，避免给每个子项写固定宽度。

#### 三栏任务与统计

`.task-grid` + `.task-card` 适合展示三个阶段、任务或信息模块；卡片内部可用 `.task-header`、`.task-index`、`.task-name`、`.task-example`、`.task-detail`、`.task-goal`。底部统计使用 `.stat-strip`、`.stat-item`、`.stat-value`、`.stat-label`，三项补充说明使用 `.task-coverage`。

```html
<div class="task-grid">
  <div class="task-card"><div class="task-header"><span class="task-index">01</span><b class="task-name">阶段名称</b></div><div class="task-example">示例占位符</div><div class="task-detail">说明占位符</div></div>
  <div class="task-card task-card--gold"><div class="task-header"><span class="task-index">02</span><b class="task-name">阶段名称</b></div><div class="task-example">示例占位符</div><div class="task-detail">说明占位符</div></div>
</div>
```

#### 框架图与图片

`.framework-showcase` 适合“一张框架图 + 下方说明项”：图片放进 `.framework-image-frame`，说明项放进 `.framework-key`，每项使用 `.framework-key-item`。`.framework-key` 默认两列两行，删减说明项后会自动重新排列。

所有独立图片、数据图和分析图都使用同一套媒体容器：

```html
<div class="figure-frame">
  <img src="assets/overview.svg" alt="抽象示例图" />
  <div class="figure-caption">一句简短的图片说明。</div>
</div>
```

图片必须放在项目的 `assets/` 目录中，并使用相对路径 `assets/文件名`。`alt` 应写成图片用途，而不是个人或论文信息。

### 4. 流程与方法

#### 通用流程

`.process-layout` 用于左右分栏的流程页；左侧使用 `.process-list`、`.process-step`、`.process-index`、`.process-body`，右侧可以使用 `.process-cards` 和 `.process-card`。最后一个步骤会自动使用不同的强调色，说明文字可放在 `.process-note`。

#### 信息流程

`.flow-layout` + `.flow-list` + `.flow-row` 用于输入、说明、结果和结论。行内推荐拆成 `.flow-label`、`.flow-copy`、`.flow-copy-title`、`.flow-copy-sub`、`.flow-target`。结果区域使用 `.result-panel`、`.result-panel__label` 和 `.result-table`，页尾结论使用 `.conclusion-note`。

```html
<div class="flow-layout flow-layout--compact">
  <div class="flow-list">
    <div class="flow-row">
      <div class="flow-label">输入</div>
      <div class="flow-copy"><div class="flow-copy-title">标题占位符</div><div class="flow-copy-sub">说明占位符</div></div>
      <div class="flow-target">补充结果占位符</div>
    </div>
  </div>
  <div class="result-panel">
    <div class="result-panel__label">结果示例</div>
    <table class="result-table"><tr><th>项目</th><th>示例</th><th>状态</th></tr></table>
  </div>
</div>
```

没有额外说明时使用 `.flow-layout--compact`；需要更大的上下间距时使用 `.flow-layout--spacious`。

#### 结构布局

`.structure-grid` + `.structure-card` 用于并列展示两个结构模块。卡片内部的流程图使用 `.structure-flow`，输入、输出和信号说明使用 `.structure-line`。第二个卡片可加 `.structure-card--gold`，但文字内容仍应保持通用。

#### 方法与结果

`.method-layout` 是“左侧步骤 + 右侧结果”的布局。左侧使用 `.method-panel`、`.panel-heading`、`.panel-note`、`.method-flow`、`.method-row`、`.method-row-label`、`.method-row-copy`、`.method-row-target`；右侧使用 `.comparison-panel` 和 `.result-table`。`.method-row--gold` 用于第二个步骤的颜色强调。

### 5. 表格

#### 双栏表格页

`.table-layout` 默认是两列。每列可以放入 `.table-card`，标题使用 `.table-card-title`，补充规则使用 `.table-rule`，页尾说明使用 `.table-conclusion`。

```html
<div class="table-layout">
  <div class="table-card">
    <div class="table-card-title">表格标题</div>
    <table class="comparison-table">
      <thead><tr><th>项目</th><th>选项 A</th><th>选项 B</th></tr></thead>
      <tbody><tr><td>条目</td><td>内容</td><td>结果</td></tr></tbody>
    </table>
  </div>
  <div class="table-card table-card--accent">
    <div class="table-card-title">说明标题</div>
    <div class="table-rule"><b>规则</b><span>说明占位符。</span></div>
  </div>
</div>
```

#### 全宽表格

需要横跨整页时，在 `.table-layout` 上增加 `.table-layout--full`，并直接放置 `.comparison-table` 或 `.result-table`，不要再套 `.table-card`：

```html
<div class="table-layout table-layout--full">
  <table class="comparison-table">
    <caption>全宽信息对比示例</caption>
    <thead><tr><th>项目</th><th>维度</th><th>方案 A</th><th>方案 B</th></tr></thead>
    <tbody><tr><td>条目 A</td><td>维度占位符</td><td>内容占位符</td><td>结果占位符</td></tr></tbody>
  </table>
</div>
```

#### 状态颜色

`.result-table` 和 `.comparison-table` 默认使用统一的蓝灰分隔线和交替底色。结果状态只在需要时加到最后一列：

```html
<td class="table-status-cell table-status-cell--green"><span>完成</span></td>
<td class="table-status-cell table-status-cell--gold"><span>待确认</span></td>
<td>普通状态</td>
```

普通状态直接使用 `<td>`，不要添加 `--plain`。绿色或金色会填满对应单元格，表格分隔线仍保持中性颜色。

### 6. 共同规则

- 颜色修饰统一使用 `--gold`、`--green`、`--accent` 后缀；不需要强调色时使用基础 class。
- 网格容器已经处理 `min-width: 0`、自动列宽和等高，不要给卡片写固定宽度或固定位置。
- 图片放入 `assets/` 后使用相对路径；在线预览和 PDF 导出都从同一目录读取。
- 页面内容过多时优先拆页，不要继续缩小字号或强行增加卡片数量。
- `main.md` 中的示例文字都是占位符，正式使用时只替换内容，不要删除承载布局的外层 class。

## 文件说明

- `main.md`：完整的容器用法示例和占位文案。
- `custom.css`：按页面框架、信息、卡片、媒体、流程、表格和方法展示分组的样式。
- `template.html`：reveal-md 的 HTML 模板和初始化配置。
- `assets/`：logo、占位图片和示例 SVG。
- `Makefile`：预览、静态构建和 PDF 导出入口。
- `.vendor/reveal-md/`：项目固定使用的 reveal-md 源码与依赖描述。

## 许可与内容

此仓库中的示例文字和抽象图片仅用于展示排版方式。使用模板制作正式汇报时，请自行确认图片、字体、数据和其他外部素材的授权范围。
