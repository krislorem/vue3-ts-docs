import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vue3-ts-docs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "组件", link: "/components/" },
      { text: "API参考", link: "/api/" },
      { text: "问题", link: "/faq/" },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: {
      "/guide/": [
        {
          text: "开始",
          collapsible: true,
          items: [
            { text: "介绍", link: "/guide/" },
            { text: "安装", link: "/guide/installation" },
            { text: "基本概念", link: "/guide/concepts" },
          ],
        },
      ],
      components: [
        {
          text: "常用组件",
          items: [
            { text: "介绍", link: "/components/" },
            { text: "介绍", link: "/components/button" },
            { text: "介绍", link: "/components/" },
            { text: "介绍", link: "/components/" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
