import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'yk-design-ui',
    description: '一个通用的vue3组件库',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '指南', link: '/guild/installation' },
            { text: '组件', link: '/examples' },
        ],

        sidebar: {
            '/guild/': [
                {
                    text: '基础',
                    items: [
                        {
                            text: '安装',
                            link: '/guild/installation',
                        },
                        {
                            text: '快速开始',
                            link: '/guild/quickstart',
                        },
                    ],
                },
                {
                    text: '进阶',
                    items: [
                        {
                            text: '扩展',
                            link: '/xx',
                        },
                    ],
                },
            ],
        },

        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    },
})
