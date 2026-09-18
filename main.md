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
    <div class="agenda-item">图片、图表与卡片容器</div>
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
        </ul>
      </div>
      <div class="content-block">
        <div class="content-block__title">补充信息</div>
        <ul class="bullet-list">
          <li class="bullet-list__item">经历、荣誉或关键词</li>
          <li class="bullet-list__item">每条内容保持简短清晰</li>
          <li class="bullet-list__item">不需要的条目可以删除</li>
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
    <div class="section-title">图片与图表容器</div>
    <div class="section-note">图片只保留抽象示例，替换时请同时更新说明和结论。</div>
  </div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">2.1 图片说明容器</h2>
  <div class="split-layout">
    <div class="compare-stack">
      <div class="compare-card">
        <div class="compare-title">图片使用方式</div>
        <div class="compare-row"><b>文件</b><span>放入 assets 文件夹</span></div>
        <div class="compare-row"><b>引用</b><span>使用相对路径</span></div>
        <div class="compare-row"><b>说明</b><span>补充一句结论</span></div>
      </div>
      <div class="compare-switch">从图片到观点</div>
      <div class="compare-card compare-card--accent">
        <div class="compare-title">排版提示</div>
        <div class="compare-row"><b>避免</b><span>图片占满页面却没有重点</span></div>
        <div class="compare-row"><b>推荐</b><span>保留留白并突出关键信息</span></div>
      </div>
    </div>
    <div class="media-figure">
      <img src="assets/overview.svg" alt="Abstract overview diagram" />
      <div class="media-caption">Input → Context → Output</div>
    </div>
  </div>
  <div class="callout">每张图都应该服务于一个明确观点；不能帮助读者理解的图片可以删掉。</div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">2.2 三列任务卡片</h2>
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
  <div class="info-list">
    <div class="info-row"><b>标题</b><span>告诉读者这张卡片的主题。</span></div>
    <div class="info-row info-row--gold"><b>例子</b><span>用一个具体但不敏感的例子支撑观点。</span></div>
    <div class="info-row info-row--green"><b>结论</b><span>用一句话收束卡片内容。</span></div>
  </div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">2.3 图片与图表框架</h2>
  <div class="figure-frame"><img src="assets/framework.svg" alt="Abstract framework diagram" /></div>
  <div class="figure-caption">框架图容器：使用一张图说明结构，再用一句话解释阅读顺序。</div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">2.4 数据图表容器</h2>
  <div class="figure-frame"><img src="assets/results.svg" alt="Abstract results chart" /></div>
  <div class="callout">图表中的数字仅用于展示排版方式；替换时请同步更新标题、单位、图例和结论。</div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">2.5 分析图容器</h2>
  <div class="figure-frame"><img src="assets/analysis.svg" alt="Abstract analysis chart" /></div>
  <div class="figure-caption">分析图容器适合展示构成、分布或类别之间的关系。</div>
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
  <h2 class="page-title">3.1 流程步骤容器</h2>
  <div class="process-layout">
    <div class="process-list">
      <div class="process-step"><span class="process-index">1</span><div class="process-body">准备背景与输入信息</div></div>
      <div class="process-step"><span class="process-index">2</span><div class="process-body">组合内容并突出重点</div></div>
      <div class="process-step"><span class="process-index">3</span><div class="process-body">检查结构并输出结论</div></div>
    </div>
    <div class="process-cards">
      <div class="process-card">
        <div class="process-card-title">流程说明</div>
        <p>步骤容器适合表达严格的先后顺序，每步只保留一个动作。</p>
      </div>
      <div class="process-card process-card--gold">
        <img class="process-card__image" src="assets/pipeline.svg" alt="Abstract process pipeline" />
        <p>图片可以作为流程的辅助说明。</p>
      </div>
    </div>
  </div>
  <div class="process-note">如果节点没有顺序关系，就改用卡片、矩阵或对比表。</div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">3.2 对比表容器</h2>
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
      <div class="table-card-title">对比图示例</div>
      <img class="table-illustration" src="assets/comparison.svg" alt="Abstract comparison table" />
    </div>
  </div>
  <div class="table-conclusion">对比表只保留会影响决策的维度，并用颜色强调推荐选项。</div>
</div>

<!--v-->

<div class="slide-frame slide-frame--page">
  <h2 class="page-title">3.3 验证与结论容器</h2>
  <div class="verify-idea"><b>核心想法</b><span>先提出一个可验证的判断，再用简短证据支持或修正它。</span></div>
  <div class="verify-layout">
    <div class="verify-flow">
      <div class="verify-row">
        <div class="verify-label">Input</div>
        <div class="verify-copy">背景信息与当前问题<br /><b>明确验证对象</b></div>
        <div class="verify-target"><b>Evidence</b><br />列出一条关键证据</div>
      </div>
      <div class="verify-row verify-row--gold">
        <div class="verify-label">Output</div>
        <div class="verify-copy">支持、反对或待确认<br /><b>写出结论</b></div>
        <div class="verify-target"><b>Next</b><br />给出下一步行动</div>
      </div>
    </div>
    <div class="verify-result">
      <table class="verify-table">
        <thead><tr><th>项目</th><th>示例</th><th>状态</th></tr></thead>
        <tbody>
          <tr><td>判断</td><td>目标清晰</td><td>通过</td></tr>
          <tr><td>证据</td><td>信息完整</td><td>通过</td></tr>
          <tr><td>下一步</td><td>补充细节</td><td>待办</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="verify-conclusion">结论占位符：用一句话总结最重要的发现，避免重复整页内容。</div>
</div>

<!--s-->

<div class="slide-frame slide-frame--closing">
  <div class="closing-content">
    <div class="closing-title">感谢阅读</div>
    <div class="closing-note">Q&amp;A</div>
  </div>
</div>
