import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "yk-design-ui",
    description: "一个通用的vue3组件库",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        nav: [
            { text: "指南", link: "/guild/installation" },
            { text: "组件", link: "/examples/icon" },
        ],

        sidebar: {
            "/guild/": [
                {
                    text: "基础",
                    items: [
                        {
                            text: "安装",
                            link: "/guild/installation",
                        },
                        {
                            text: "快速开始",
                            link: "/guild/quickstart",
                        },
                    ],
                },
            ],
            "/examples/": [
                {
                    text: "基础组件",
                    items: [
                        {
                            text: "Icon图标",
                            link: "/examples/icon",
                        },
                        {
                            text: "Button按钮",
                            link: "/examples/button",
                        },
                    ],
                },
            ],
        },

        socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
    },
})
