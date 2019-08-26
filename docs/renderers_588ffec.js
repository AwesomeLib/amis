define('docs/renderers.md', function(require, exports, module) {

  module.exports = {
    "title": "渲染器手册",
    "html": "<p>amis 页面是通过 JSON 配置出来的，是由一个一个渲染模型组成的，掌握他们规则，就能灵活配置出各种页面。 </p>\n<p>开始之前，请您一定要先阅读<a href=\"/amis/docs/basic\">基本用法</a>。</p>\n<ul>\n<li><a href=\"/amis/docs/renderers/Definitions\">Definitions</a>: 建立当前页面公共的配置项</li>\n<li><a href=\"/amis/docs/renderers/Tpl\">Tpl</a>: 支持用 JS 模板引擎来组织输出</li>\n<li><a href=\"/amis/docs/renderers/Page\">Page</a>: JSON 配置最外层的 Page 渲染器</li>\n<li><a href=\"/amis/docs/renderers/Form/Form\">Form</a>: 表单渲染器<ul>\n<li><a href=\"/amis/docs/renderers/Form/FormItem\">FormItem</a>: Form 中主要是由各种 FormItem 组成</li>\n<li><a href=\"/amis/docs/renderers/Form/List\">List</a>: 简单的列表选择框</li>\n<li><a href=\"/amis/docs/renderers/Form/Button-Group\">Button-Group</a>: 按钮集合</li>\n<li><a href=\"/amis/docs/renderers/Form/Service\">Service</a>: 动态配置，配置项由接口决定</li>\n<li><a href=\"/amis/docs/renderers/Form/Tabs\">Tabs</a>: 多个输入框通过选项卡来分组</li>\n<li><a href=\"/amis/docs/renderers/Form/Table\">Table</a>: 可以用来展示数组类型的数据</li>\n<li><a href=\"/amis/docs/renderers/Form/HBox\">HBox</a>: 支持 form 内部再用 HBox 布局</li>\n<li><a href=\"/amis/docs/renderers/Form/Grid\">Grid</a>: 支持 form 内部再用 grid 布局</li>\n<li><a href=\"/amis/docs/renderers/Form/Panel\">Panel</a>: 还是为了布局，可以把一部分 FormItem 合并到一个 panel 里面单独展示</li>\n<li><a href=\"/amis/docs/renderers/Form/Hidden\">Hidden</a>: 隐藏字段类型</li>\n<li><a href=\"/amis/docs/renderers/Form/Text\">Text</a>: 普通的文本输入框</li>\n<li><a href=\"/amis/docs/renderers/Form/Textarea\">Textarea</a>: 多行文本输入框</li>\n<li><a href=\"/amis/docs/renderers/Form/Url\">Url</a>: URL 输入框</li>\n<li><a href=\"/amis/docs/renderers/Form/Email\">Email</a>: Email 输入框</li>\n<li><a href=\"/amis/docs/renderers/Form/Password\">Password</a>: 密码输入框</li>\n<li><a href=\"/amis/docs/renderers/Form/Number\">Number</a>: 数字输入框</li>\n<li><a href=\"/amis/docs/renderers/Form/Select\">Select</a>: 选项表单</li>\n<li><a href=\"/amis/docs/renderers/Form/Chained-Select\">Chained-Select</a>: 无限级别下拉</li>\n<li><a href=\"/amis/docs/renderers/Form/Checkbox\">Checkbox</a>: 勾选框</li>\n<li><a href=\"/amis/docs/renderers/Form/Checkboxes\">Checkboxes</a>: 复选框</li>\n<li><a href=\"/amis/docs/renderers/Form/Radios\">Radios</a>: 单选框</li>\n<li><a href=\"/amis/docs/renderers/Form/City\">City</a>: 城市选择</li>\n<li><a href=\"/amis/docs/renderers/Form/Rating\">Rating</a>: 评分</li>\n<li><a href=\"/amis/docs/renderers/Form/Switch\">Switch</a>: 可选框，和 checkbox 完全等价</li>\n<li><a href=\"/amis/docs/renderers/Form/Date\">Date</a>: 日期类型</li>\n<li><a href=\"/amis/docs/renderers/Form/Datetime\">Datetime</a>: 日期时间类型</li>\n<li><a href=\"/amis/docs/renderers/Form/Time\">Time</a>: 时间类型</li>\n<li><a href=\"/amis/docs/renderers/Form/Date-Range\">Date-Range</a>: 日期范围类型</li>\n<li><a href=\"/amis/docs/renderers/Form/Color\">Color</a>: 颜色选择器</li>\n<li><a href=\"/amis/docs/renderers/Form/Range\">Range</a>: 范围输入框</li>\n<li><a href=\"/amis/docs/renderers/Form/Image\">Image</a>: 图片输入</li>\n<li><a href=\"/amis/docs/renderers/Form/File\">File</a>: 文件输入</li>\n<li><a href=\"/amis/docs/renderers/Form/Matrix\">Matrix</a>: 矩阵类型的输入框</li>\n<li><a href=\"/amis/docs/renderers/Form/Tree\">Tree</a>: 树形结构输入框</li>\n<li><a href=\"/amis/docs/renderers/Form/TreeSelect\">TreeSelect</a>: 树形结构选择框</li>\n<li><a href=\"/amis/docs/renderers/Form/NestedSelect\">NestedSelect</a>: 树形结构选择框</li>\n<li><a href=\"/amis/docs/renderers/Form/Button\">Button</a>: 按钮, 包含 button、submit 和 reset</li>\n<li><a href=\"/amis/docs/renderers/Form/Button-Toolbar\">Button-Toolbar</a>: 让多个按钮在一起放置</li>\n<li><a href=\"/amis/docs/renderers/Form/Combo\">Combo</a>: 组合模式</li>\n<li><a href=\"/amis/docs/renderers/Form/Array\">Array</a>: 数组输入框配置</li>\n<li><a href=\"/amis/docs/renderers/Form/SubForm\">SubForm</a>: formItem 还可以是子表单类型</li>\n<li><a href=\"/amis/docs/renderers/Form/Picker\">Picker</a>: 列表选取</li>\n<li><a href=\"/amis/docs/renderers/Form/Formula\">Formula</a>: 公式类型</li>\n<li><a href=\"/amis/docs/renderers/Form/Group\">Group</a>: 表单项集合</li>\n<li><a href=\"/amis/docs/renderers/Form/FieldSet\">FieldSet</a>: 多个输入框可以通过 fieldSet 捆绑在一起</li>\n<li><a href=\"/amis/docs/renderers/Form/Repeat\">Repeat</a>: 可用来设置重复频率</li>\n<li><a href=\"/amis/docs/renderers/Form/Rich-Text\">Rich-Text</a>: 富文本编辑器</li>\n<li><a href=\"/amis/docs/renderers/Form/Editor\">Editor</a>: 编辑器</li>\n<li><a href=\"/amis/docs/renderers/Static\">Static</a>: 纯用来展现数据的</li>\n</ul>\n</li>\n<li><a href=\"/amis/docs/renderers/Wizard\">Wizard</a>: 表单向导</li>\n<li><a href=\"/amis/docs/renderers/Each\">Each</a>: 基于现有变量循环输出渲染器</li>\n<li><a href=\"/amis/docs/renderers/Plain\">Plain</a>: 单纯的文字输出</li>\n<li><a href=\"/amis/docs/renderers/Html\">Html</a>: html, 当需要用到变量时，请用 Tpl 代替</li>\n<li><a href=\"/amis/docs/renderers/Action\">Action</a>: 一种特殊的渲染器，它本身是一个按钮，同时它能触发事件</li>\n<li><a href=\"/amis/docs/renderers/Dialog\">Dialog</a>: Dialog 由 Action 触发。他是一个类似于 Page 的容器模型</li>\n<li><a href=\"/amis/docs/renderers/Drawer\">Drawer</a>: Drawer 由 Action 触发</li>\n<li><a href=\"/amis/docs/renderers/Divider\">Divider</a>: 分割线</li>\n<li><a href=\"/amis/docs/renderers/CRUD\">CRUD</a>: 增删改查模型，主要用来展现列表<ul>\n<li><a href=\"/amis/docs/renderers/CRUD-Table\">CRUD-Table</a>: 请参考 Table</li>\n<li><a href=\"/amis/docs/renderers/CRUD-Cards\">CRUD-Cards</a>: 请参考 Cards</li>\n<li><a href=\"/amis/docs/renderers/CRUD-List\">CRUD-List</a>: 请参考 List</li>\n</ul>\n</li>\n<li><a href=\"/amis/docs/renderers/Panel\">Panel</a>: 可以把相关信息以盒子的形式展示到一块。</li>\n<li><a href=\"/amis/docs/renderers/Wrapper\">Wrapper</a>: 简单的一个容器。</li>\n<li><a href=\"/amis/docs/renderers/Service\">Service</a>: 功能型容器，自身不负责展示内容，主要职责在于通过配置的 api 拉取数据</li>\n<li><a href=\"/amis/docs/renderers/Chart\">Chart</a>: 图表渲染器</li>\n<li><a href=\"/amis/docs/renderers/Collapse\">Collapse</a>: 折叠器</li>\n<li><a href=\"/amis/docs/renderers/Carousel\">Carousel</a>: 轮播图</li>\n<li><a href=\"/amis/docs/renderers/Alert\">Alert</a>: 提示框</li>\n<li><a href=\"/amis/docs/renderers/Audio\">Audio</a>: 音频播放器</li>\n<li><a href=\"/amis/docs/renderers/Video\">Video</a>: 视频播放器</li>\n<li><a href=\"/amis/docs/renderers/Table\">Table</a>: 表格展示<ul>\n<li><a href=\"/amis/docs/renderers/Column\">Column</a>: 表格中的列配置</li>\n</ul>\n</li>\n<li><a href=\"/amis/docs/renderers/List\">List</a>: 列表展示</li>\n<li><a href=\"/amis/docs/renderers/Card\">Card</a>: 卡片的展示形式</li>\n<li><a href=\"/amis/docs/renderers/Cards\">Cards</a>: 卡片集合</li>\n<li><a href=\"/amis/docs/renderers/Field\">Field</a>: 主要用在 Table 的列配置 Column、List 的内容、Card 卡片的内容和表单的 Static-XXX 中</li>\n<li><a href=\"/amis/docs/renderers/Tabs\">Tabs</a>: 标签页</li>\n<li><a href=\"/amis/docs/renderers/Grid\">Grid</a>: Grid 布局</li>\n<li><a href=\"/amis/docs/renderers/HBox\">HBox</a>: HBox 布局</li>\n<li><a href=\"/amis/docs/renderers/Button-Group\">Button-Group</a>： 按钮集合</li>\n<li><a href=\"/amis/docs/renderers/iFrame\">iFrame</a>： 如果需要内嵌外部站点，可用 iframe 来实现</li>\n<li><a href=\"/amis/docs/renderers/Nav\">Nav</a>: 菜单栏</li>\n<li><a href=\"/amis/docs/renderers/Tasks\">Tasks</a>: 任务操作集合，类似于 orp 上线</li>\n<li><a href=\"/amis/docs/renderers/QRCode\">QRCode</a>: 二维码显示组件</li>\n<li><a href=\"/amis/docs/renderers/Types\">Types</a>: 类型说明文档</li>\n</ul>\n\n\n<div class=\"m-t-lg b-l b-info b-3x wrapper bg-light dk\">文档内容有误？欢迎大家一起来编写，文档地址：<i class=\"fa fa-github\"></i><a href=\"https://github.com/baidu/amis/tree/master/docs/renderers.md\">/docs/renderers.md</a>。</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [],
      "level": 0
    }
  };

});
