import {createRouter, createWebHistory}  from 'vue-router';

const routes = [
    {
        path:'/',
        name:"Home",
        component:()=>import('../pages/Home.vue')
    },
    {
        path:'/dashboard',
        component:()=>import('../pages/Dashboard/Dashboard.vue'),
        children:[
            {
              path:'bursamobil',
              name:"BursaMobil",
              component:()=>import('../pages/Dashboard/BursaMobil.vue'),   
            },
            {
               path:'detail/:id',
               name:"BursaMobilDetail",
               component:()=>import('../pages/Dashboard/Detail.vue'),   
            },
            {
                path:'favorit',
                name:'Favorit',
                component:()=>import('../pages/Dashboard/Favorit.vue')
            },
            {
                path:'riwayat',
                name:'Riwayat',
                component:()=>import('../pages/Dashboard/Riwayat.vue')
            },
            {
                path:'akun',
                name:'Akun',
                component:()=>import('../pages/Dashboard/Akun.vue')
            },
            {
                path:'bantuan',
                name:'Bantuan',
                component:()=>import('../pages/Dashboard/Bantuan.vue')
            }
        ]
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
  const isLogin = localStorage.getItem('isLogin');
  if (
    // make sure the user is authenticated
    JSON.stringify(isLogin).length === 99 && isLogin !== null && isLogin !== undefined && isLogin !== '' && 
    // ❗️ Avoid an infinite redirect
    to.name !== 'Home'
  ){
    // redirect the user to the login page
    return { name: 'Home' }
  } 
})

export default router