import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/vue/index.vue'
// import Hello from '@/vue/hello.vue'

Vue.use(Router)

module.exports = new Router({
    data: function() {
        var root = 'assets'

        return {
            routes: [
                // { path: '/index', component: Index },
                // { path: '/', redirect: '/index' },
                // { path: '/vue/a', component: Hello},
                // common
                { path: root + '/hello', component: Hello},
                { path: root + '/style/index', component: 'Common Style' },
                { path: root + '/animation', component: 'Animation' },
                { path: root + '/transition', component: 'Transition' },

                // // component
                { path: root + '/components/text', component: 'Text' },
                { path: root + '/iconfont', component: 'iconfont' },
                { path: root + '/components/image', component: 'Image' },
                { path: root + '/components/input', component: 'Input' },
                { path: root + '/components/scroller', component: 'Scroller' },
                { path: root + '/components/list', component: 'List' },
                { path: root + '/components/waterfall', component: 'Waterfall' },
                { path: root + '/components/slider', component: 'Slider' },
                { path: root + '/components/a', component: 'A' },
                { path: root + '/components/video', component: 'Video' },
                { path: root + '/components/countdown', component: 'Countdown' },
                { path: root + '/components/marquee', component: 'Marquee' },
                { path: root + '/components/web', component: 'Web' },
                { path: root + '/components/navigator', component: 'Navigator' },
                { path: root + '/components/tabbar', component: 'Tabbar' },

                // // module
                { path: root + '/modules/instance-api', component: 'Instance API' },
                { path: root + '/modules/modal', component: 'Modal' },
                { path: root + '/modules/webSocket', component: 'WebSocket' },
                { path: root + '/modules/stream', component: 'Stream' },
                { path: root + '/modules/storage', component: 'Storage' },
                { path: root + '/modules/picker', component: 'picker' },
                // {path: 'module/clipboard', component: 'Clipboard'}, // 0.8 , developing

                // showcase
                { path: root + '/showcase/boxshadow', component: 'boxshadow' },
                { path: root + '/showcase/progress', component: 'Progress Bar' },
                { path: root + '/showcase/itemlist', component: 'List (Advanced)' },
                { path: root + '/showcase/calculator', component: 'Calculator' },
                { path: root + '/showcase/tap-penetrate', component: 'TapPenetrate' },
                { path: root + '/showcase/a-node-click', component: 'ANodeClick' },
                // {path: root + '/showcase/minesweeper', component: 'Minesweeper'},
                // {path: root + '/showcase/ui', component: 'UI Gallery'},
                // {path: root + '/showcase/dropdown/dropdown-demo', component: 'Dropdown'}

                // market
                { path: root + '/market/gcanvas', component: 'Gcanvas' }
            ]
        }
    },

})