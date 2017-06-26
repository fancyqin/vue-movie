import App from '../App.vue'


export default [{
    path: '/',
    component: App, 
    children: [ 
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: r => require.ensure([], () => r(require('../page/home/home.vue')), 'home')
        }
    ]
}]