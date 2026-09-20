---
title: ZJU reveal-md template
separator: <!--s-->
verticalSeparator: <!--v-->
theme: simple
highlightTheme: github
css: custom.css
katex: true
revealOptions:
    transition: 'slide'
    transitionSpeed: fast
    center: false
    slideNumber: "c/t"
    width: 1200
---

<div class="slide-frame slide-frame--cover">
  <img class="brand-mark" src="assets/zju-logo-with-caption.png" alt="Zhejiang University logo" />
  <div class="cover-content">
    <div class="cover-kicker">浙江大学 · Reveal-md Template</div>
    <h1 class="cover-title">标题占位符<br />与容器使用示例</h1>
    <div class="cover-rule"></div>
    <div class="cover-subtitle">用一页说明主题、目的或结论</div>
    <div class="cover-meta">汇报人：姓名占位符</div>
    <div class="cover-meta">学院 / 方向：信息占位符</div>
    <div class="cover-meta">日期：YYYY 年 MM 月 DD 日</div>
  </div>
</div>

<!--s-->

<div class="slide-frame slide-frame--page agenda-frame">
  <h2 class="page-title">容器目录</h2>
  <div class="agenda-list">
    <div class="agenda-index">01</div>
    <div class="agenda-item">基础布局与信息容器</div>
    <div class="agenda-index">02</div>
    <div class="agenda-item">页面布局与媒体容器</div>
    <div class="agenda-index">03</div>
    <div class="agenda-item">流程、表格与验证容器</div>
  </div>
  <div class="agenda-note">每页只展示一组相关容器；复制结构后替换文字和图片即可。</div>
</div>

<!--s-->

<div class="slide-frame slide-frame--section">
  <div class="section-eyebrow">01 基础布局 · Basic Layout</div>
  <div class="section-body">
    <div class="section-title">基础信息容器</div>
    <div class="section-note">封面、目录、分割页和信息卡片是所有页面的基础。</div>
  </div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">1.1 个人信息容器</h2>
  <div class="profile-layout">
    <div class="profile-card">
      <img class="profile-image" src="assets/portrait-placeholder.svg" alt="Abstract profile placeholder" />
      <div>
        <div class="profile-name">姓名占位符</div>
        <div class="profile-role">浙江大学 · 学院占位符<br />专业 / 方向占位符</div>
      </div>
    </div>
    <div class="profile-content">
      <div class="metric-grid">
        <div class="metric-card"><div class="metric-value">01</div><div class="metric-label">数据标签</div></div>
        <div class="metric-card metric-card--gold"><div class="metric-value">02</div><div class="metric-label">数据标签</div></div>
        <div class="metric-card metric-card--green"><div class="metric-value">03</div><div class="metric-label">数据标签</div></div>
      </div>
      <div class="content-block">
        <div class="content-block__title">要点标签</div>
        <ul class="tag-list">
          <li class="tag-list__item">示例标签一</li>
          <li class="tag-list__item">示例标签二</li>
          <li class="tag-list__item">示例标签三</li>
          <li class="tag-list__item">示例标签四</li>
          <li class="tag-list__item">示例标签五</li>
          <li class="tag-list__item">示例标签六</li>
        </ul>
      </div>
      <div class="content-block">
        <div class="content-block__title">补充信息</div>
        <ul class="bullet-list">
          <li class="bullet-list__item">经历、荣誉或关键词</li>
          <li class="bullet-list__item">每条内容保持简短清晰</li>
          <li class="bullet-list__item">不需要的条目可以删除</li>
          <li class="bullet-list__item">第四个方框</li>
          <li class="bullet-list__item">第五个方框</li>
          <li class="bullet-list__item">第六个方框</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">1.2 双栏信息卡片</h2>
  <div class="info-banner">
    <div class="info-banner__title">模块标题占位符</div>
    <div class="info-banner__meta">副标题 / 时间 / 标签</div>
  </div>
  <div class="feature-grid">
    <div class="feature-card">
      <div class="feature-title">内容模块 A</div>
      <div class="feature-question">用一句话说明这个模块要解决的问题。</div>
      <div class="feature-line"><b>重点：</b>填写三到五个关键词。</div>
      <div class="feature-line"><b>说明：</b>补充背景、方法或结果。</div>
      <div class="feature-tags"><span class="feature-tag">标签 A</span><span class="feature-tag">标签 B</span><span class="feature-tag">标签 C</span></div>
    </div>
    <div class="feature-card feature-card--gold">
      <div class="feature-title">内容模块 B</div>
      <div class="feature-question">用一句话描述另一个并列模块。</div>
      <div class="feature-line"><b>输入：</b>信息或资源占位符。</div>
      <div class="feature-line"><b>输出：</b>结论或交付物占位符。</div>
      <div class="feature-tags"><span class="feature-tag">状态</span><span class="feature-tag">时间</span></div>
    </div>
  </div>
  <div class="focus-grid">
    <div class="focus-card"><div class="focus-title">关键词 A</div><div class="focus-note">一句简短解释。</div></div>
    <div class="focus-card focus-card--gold"><div class="focus-title">关键词 B</div><div class="focus-note">一句简短解释。</div></div>
    <div class="focus-card focus-card--green"><div class="focus-title">关键词 C</div><div class="focus-note">一句简短解释。</div></div>
  </div>
</div>

<!--s-->

<div class="slide-frame slide-frame--section">
  <div class="section-eyebrow">02 视觉组件 · Visual Components</div>
  <div class="section-body">
    <div class="section-title">页面布局与媒体容器</div>
    <div class="section-note">先选择页面结构，再把文字、表格或图片放入对应区域。</div>
  </div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">2.1 媒体容器</h2>
  <div class="split-layout">
    <div class="compare-stack">
      <div class="compare-card">
        <div class="compare-title">图片使用方式</div>
        <div class="compare-row"><b>文件</b><span>放入 assets 文件夹</span></div>
        <div class="compare-row"><b>引用</b><span>使用相对路径</span></div>
        <div class="compare-row"><b>替换</b><span>保留 alt 文本并同步更新说明</span></div>
      </div>
      <div class="compare-card compare-card--accent">
        <div class="compare-title">配文方式</div>
        <div class="compare-row"><b>标题</b><span>说明图片展示的对象</span></div>
        <div class="compare-row"><b>图注</b><span>补充读者需要关注的结论</span></div>
      </div>
    </div>
    <div class="figure-frame">
      <img src="assets/overview.svg" alt="Abstract overview diagram" />
      <div class="figure-caption">一张图对应一个观点，图片下方保留一句说明。</div>
    </div>
  </div>
  <div class="callout">框架图、数据图表和分析图都可以复用这个媒体容器，不需要为每种图片单独建立一套页面。</div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">2.2 上下布局结构</h2>
  <div class="stack-layout">
    <div class="stack-visual">
      <div class="stack-visual__label">图片 / 图表区域</div>
      <div class="stack-visual__path">assets/example.svg</div>
    </div>
    <div class="stack-points">
      <div class="stack-point"><b>01 内容</b><span>标题和核心信息</span></div>
      <div class="stack-point"><b>02 证据</b><span>一个关键数字或观察</span></div>
      <div class="stack-point"><b>03 解释</b><span>一句话说明原因</span></div>
      <div class="stack-point"><b>04 结论</b><span>读者应该记住的内容</span></div>
    </div>
  </div>
  <div class="layout-note">上方放一块主视觉区域，下方用四个同宽要点补充阅读线索。把图片替换进去即可恢复原始的“上图下卡片”结构。</div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">2.3 左右布局结构</h2>
  <div class="layout-split">
    <div class="layout-panel">
      <div class="layout-panel__label">LEFT · CONTEXT</div>
      <div class="layout-panel__title">背景与输入</div>
      <div class="layout-panel__line">放置问题、限制条件或已有信息。</div>
      <div class="layout-panel__line">正文保持短句，避免挤压右侧重点。</div>
    </div>
    <div class="layout-panel layout-panel--gold">
      <div class="layout-panel__label">RIGHT · OUTPUT</div>
      <div class="layout-panel__title">结果与结论</div>
      <div class="layout-panel__line">放置一条观察、一个结论或下一步。</div>
      <div class="layout-panel__line">用金色强调需要读者带走的信息。</div>
    </div>
  </div>
  <div class="layout-note">左右布局适合表达“背景—结果”“问题—回答”或“方法—结论”等关系。</div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">2.4 三栏布局结构</h2>
  <div class="task-grid">
    <div class="task-card">
      <div class="task-header"><div class="task-name">基础</div><div class="task-index">01</div></div>
      <div class="task-example">放置一个短例子</div>
      <div class="task-detail">补充一行上下文。</div>
      <div class="task-goal">说明这一列想表达的核心观点。</div>
    </div>
    <div class="task-card task-card--gold">
      <div class="task-header"><div class="task-name">重点</div><div class="task-index">02</div></div>
      <div class="task-example">突出一个关键词</div>
      <div class="task-detail">用两行文字解释，不堆叠完整段落。</div>
      <div class="task-goal">说明读者应该记住什么。</div>
    </div>
    <div class="task-card task-card--green">
      <div class="task-header"><div class="task-name">行动</div><div class="task-index">03</div></div>
      <div class="task-example">给出下一步</div>
      <div class="task-detail">说明时间、负责人或预期结果。</div>
      <div class="task-goal">把信息转化成明确的行动。</div>
    </div>
  </div>
  <div class="stat-strip">
    <div class="stat-item"><span class="stat-value">03</span><span class="stat-label">Cards</span></div>
    <div class="stat-item"><span class="stat-value">01</span><span class="stat-label">Key Point</span></div>
    <div class="stat-item"><span class="stat-value">02</span><span class="stat-label">Next Steps</span></div>
  </div>
  <div class="task-coverage">
    <div><b>输入</b><span>交代背景、约束或已有信息。</span></div>
    <div><b>重点</b><span>突出读者最需要记住的一条判断。</span></div>
    <div><b>输出</b><span>用一句结论承接到下一页。</span></div>
  </div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">2.5 复合布局结构</h2>
  <div class="composite-layout">
    <div class="composite-main">
      <div class="info-banner">
        <div class="info-banner__title">主内容区域</div>
        <div class="info-banner__meta">标题 / 背景 / 关键说明</div>
      </div>
      <div class="info-list">
        <div class="info-row"><b>输入</b><span>先交代读者需要知道的背景。</span></div>
        <div class="info-row info-row--gold"><b>判断</b><span>突出页面最重要的一条观察。</span></div>
        <div class="info-row info-row--green"><b>输出</b><span>用一句结论承接到下一页。</span></div>
      </div>
    </div>
    <div class="composite-side">
      <div class="focus-card"><div class="focus-title">侧栏提示</div><div class="focus-note">放置定义、口径或补充信息。</div></div>
      <div class="focus-card focus-card--gold"><div class="focus-title">视觉重点</div><div class="focus-note">用颜色和留白建立阅读顺序。</div></div>
    </div>
  </div>
  <div class="layout-note">复合布局把主内容、侧栏提示和底部结论放在同一页，适合内容较多但层级清晰的页面。</div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">2.6 框架图容器</h2>
  <div class="framework-showcase">
    <div class="framework-image-frame">
      <img src="assets/overview.svg" alt="Abstract framework placeholder" />
    </div>
    <div class="framework-key">
      <div class="framework-key-item"><b>① 输入模块</b><span>上下文或数据占位符。</span></div>
      <div class="framework-key-item"><b>② 处理模块</b><span>方法或系统说明占位符。</span></div>
      <div class="framework-key-item"><b>③ 交互模块</b><span>对象或运行场景占位符。</span></div>
      <div class="framework-key-item"><b>④ 输出模块</b><span>结果或下一步占位符。</span></div>
    </div>
  </div>
  <div class="layout-note">先用图片展示整体结构，再用四个说明项解释模块职责；替换图片即可复用。</div>
</div>

<!--s-->

<div class="slide-frame slide-frame--section">
  <div class="section-eyebrow">03 结构化表达 · Structured Story</div>
  <div class="section-body">
    <div class="section-title">流程、表格与验证</div>
    <div class="section-note">复杂内容拆成顺序、对比和判断，读者会更容易跟上。</div>
  </div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">3.1 流程示例占位符</h2>
  <div class="motivation-flow">
    <div class="motivation-node"><div class="motivation-node-title">起点占位</div><div>输入信息占位符</div></div>
    <div class="motivation-arrow">→</div>
    <div class="motivation-node"><div class="motivation-node-title">任务占位</div><div>任务描述占位符</div></div>
    <div class="motivation-arrow">→</div>
    <div class="motivation-node"><div class="motivation-node-title">候选结果</div><div>输出内容占位符</div></div>
    <div class="motivation-arrow">→</div>
    <div class="motivation-node motivation-node--gold"><div class="motivation-node-title">验证步骤</div><div>判断说明占位符</div></div>
  </div>
  <div class="motivation-bottom">
    <div class="motivation-note">
      <div class="case-title">研究背景</div>
      <div class="motivation-brief-lead">研究背景或页面引导语占位符。</div>
      <div class="motivation-brief-row"><b>输入</b><span>输入内容占位符</span></div>
      <div class="motivation-brief-row"><b>难点</b><span>问题描述占位符</span></div>
      <div class="motivation-brief-foot"><b>关键结论占位符。</b> 补充说明占位符。</div>
    </div>
    <div class="research-question">
      <div class="question-lead">核心问题</div>
      <div class="motivation-question-main">研究问题或设计目标占位符。</div>
      <div class="motivation-question-note">问题补充说明占位符。</div>
    </div>
  </div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">3.2 案例展示占位符</h2>
  <div class="data-layout">
    <div class="numbered-flow">
      <div class="flow-step"><span class="step-no">1</span><div class="flow-step-body">输入资料占位符</div></div>
      <div class="flow-step"><span class="step-no">2</span><div class="flow-step-body">任务描述占位符</div></div>
      <div class="flow-step"><span class="step-no">3</span><div class="flow-step-body">字段整理占位符</div></div>
      <div class="flow-step"><span class="step-no">4</span><div class="flow-step-body">参考信息占位符</div></div>
      <div class="flow-step"><span class="step-no">5</span><div class="flow-step-body">结果输出占位符</div></div>
    </div>
    <div class="case-showcase">
      <div class="case-showcase-title">Case 展示</div>
      <div class="case-showcase-row"><span>目标</span><b>目标描述占位符</b></div>
      <div class="case-showcase-row case-showcase-row--derived"><span>操作</span><b>操作说明占位符</b></div>
      <div class="case-evidence-title">参考信息占位符</div>
      <div class="case-evidence-list">
        <div><span>候选项 A</span><b>值占位</b><i style="width: 100%;"></i></div>
        <div><span>候选项 B</span><b>值占位</b><i style="width: 70%;"></i></div>
        <div><span>候选项 C</span><b>值占位</b><i style="width: 20%;"></i></div>
      </div>
      <div class="case-evidence-arrow">↓</div>
      <div class="case-showcase-result"><span>输出字段</span><b>key = value</b><small>结果说明占位符</small></div>
    </div>
  </div>
  <div class="data-takeaway">把输入信息整理成可复用的结果，便于后续容器使用。</div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">3.3 信息流程容器</h2>
  <div class="summary-banner"><b>核心想法</b><span>页面主说明或方法摘要占位符。</span></div>
  <div class="flow-layout flow-layout--compact">
    <div class="flow-list">
      <div class="flow-row">
        <div class="flow-label">Input</div>
        <div class="flow-copy">
          <div class="flow-copy-title">输入标题占位符</div>
          <div class="flow-copy-sub">输入说明占位符</div>
        </div>
        <div class="flow-target"><b>Evidence</b><br />证据说明占位符</div>
      </div>
      <div class="flow-row flow-row--gold">
        <div class="flow-label">Output</div>
        <div class="flow-copy">
          <div class="flow-copy-title">输出标题占位符</div>
          <div class="flow-copy-sub">输出说明占位符</div>
        </div>
        <div class="flow-target"><b>Next</b><br />下一步说明占位符</div>
      </div>
    </div>
    <div class="result-panel">
      <div class="result-panel__label">结果示例</div>
      <table class="result-table">
        <thead><tr><th>项目</th><th>示例</th><th>状态</th></tr></thead>
        <tbody>
          <tr><td>条目 A</td><td>内容占位符</td><td class="table-status-cell table-status-cell--green"><span>完成</span></td></tr>
          <tr><td>条目 B</td><td>补充占位符</td><td class="table-status-cell table-status-cell--gold"><span>待确认</span></td></tr>
          <tr><td>条目 C</td><td>结果占位符</td><td>状态占位符</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="conclusion-note">结论占位符：用一句话总结最重要的发现，避免重复整页内容。</div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">3.4 结构布局占位符</h2>
  <div class="structure-header"><span>目标说明占位符</span><b>模块 / 结构说明</b></div>
  <div class="structure-grid">
    <div class="structure-card">
      <h3>模块 A</h3>
      <div class="structure-flow"><div>输入内容占位符</div><span>↓</span><div>中间步骤占位符</div><span>↓</span><div class="result">输出结果占位符</div></div>
      <div class="structure-line"><b>Input</b><span>输入说明占位符</span></div>
      <div class="structure-line"><b>Output</b><span>输出说明占位符</span></div>
      <div class="structure-line"><b>Signal</b><span>反馈信号占位符</span></div>
    </div>
    <div class="structure-card structure-card--gold">
      <h3>模块 B</h3>
      <div class="structure-flow"><div>输入内容占位符</div><span>↓</span><div>中间步骤占位符</div><span>↓</span><div class="result">输出结果占位符</div></div>
      <div class="structure-line"><b>Input</b><span>输入说明占位符</span></div>
      <div class="structure-line"><b>Output</b><span>输出说明占位符</span></div>
      <div class="structure-line"><b>Signal</b><span>反馈信号占位符</span></div>
    </div>
  </div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">3.5 方法展示占位符</h2>
  <div class="summary-banner"><b>核心想法</b><span>页面主说明或方法摘要占位符。</span></div>
  <div class="method-layout">
    <div class="method-panel">
      <div class="panel-heading"><b>模块组合</b><span>主标题后的补充说明占位符</span></div>
      <div class="panel-note">方法说明或设计动机占位符。</div>
      <div class="method-flow">
        <div class="method-row">
          <div class="method-row-label">步骤 A</div>
          <div class="method-row-copy">输入内容占位符<br /><b>生成结果占位符</b></div>
          <div class="method-row-target"><b>判断结果</b> = 状态占位符<br />反馈信号占位符</div>
        </div>
        <div class="method-row method-row--gold">
          <div class="method-row-label">步骤 B</div>
          <div class="method-row-copy">读取结果与上下文<br /><b>判断说明占位符</b></div>
          <div class="method-row-target"><b>反馈</b> 说明占位符</div>
        </div>
      </div>
    </div>
    <div class="comparison-panel">
      <div class="panel-heading"><b>结果示例</b><span>指标 / 维度</span></div>
      <table class="result-table">
        <thead><tr><th>指标</th><th>方案 A</th><th>方案 B</th></tr></thead>
        <tbody>
          <tr><td>指标一</td><td>数值占位</td><td>数值占位</td></tr>
          <tr><td>指标二</td><td>结果占位</td><td>结果占位</td></tr>
          <tr><td>指标三</td><td>说明占位</td><td>说明占位</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="conclusion-note">页面结论或读者需要记住的要点占位符。</div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">3.6 对比表容器</h2>
  <div class="table-layout">
    <div class="table-card">
      <div class="table-card-title">信息对比示例</div>
      <table class="comparison-table">
        <thead><tr><th>项目</th><th>选项 A</th><th>选项 B</th></tr></thead>
        <tbody>
          <tr><td>速度</td><td>标准</td><td>快速</td></tr>
          <tr><td>细节</td><td>紧凑</td><td>丰富</td></tr>
          <tr><td>适用</td><td>概览</td><td>决策</td></tr>
        </tbody>
      </table>
    </div>
    <div class="table-card table-card--accent">
      <div class="table-card-title">阅读规则</div>
      <div class="table-rule"><b>维度</b><span>只保留会影响选择的项目。</span></div>
      <div class="table-rule"><b>强调</b><span>用表头和底色突出推荐选项。</span></div>
      <div class="table-rule"><b>结论</b><span>表格下方写出比较结果。</span></div>
    </div>
  </div>
  <div class="table-conclusion">对比表只保留会影响决策的维度，并用颜色强调推荐选项。</div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">3.7 全宽表格容器</h2>
  <div class="table-layout table-layout--full">
    <table class="comparison-table">
      <caption>全宽信息对比示例</caption>
      <thead><tr><th>项目</th><th>维度</th><th>方案 A</th><th>方案 B</th></tr></thead>
      <tbody>
        <tr><td>条目 A</td><td>维度占位符</td><td>内容占位符</td><td>结果占位符</td></tr>
        <tr><td>条目 B</td><td>维度占位符</td><td>补充占位符</td><td>状态占位符</td></tr>
        <tr><td>条目 C</td><td>维度占位符</td><td>说明占位符</td><td>结论占位符</td></tr>
        <tr><td>条目 D</td><td>维度占位符</td><td>备注占位符</td><td>待确认</td></tr>
      </tbody>
    </table>
  </div>
  <div class="table-conclusion">全宽表格适合展示多列字段；列数增加时优先缩短文案，而不是压缩字号。</div>
</div>

<!--s-->

<div class="slide-frame slide-frame--closing">
  <div class="closing-content">
    <div class="closing-title">感谢阅读</div>
    <div class="closing-note">Q&amp;A</div>
  </div>
</div>
