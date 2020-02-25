 /* jshint esversion: 6 */
import router from '../router/index.js';
import store from '../store/index';

// const install = 

// export default  install ;
const allow = ['/','/login'];


const install = function() {
    router.beforeEach((to, from ,next)=> {
         if(allow.indexOf(to.path) >= 0) {
            next();
        }else{
            if(store.state.isLogin === true) {
                next();
            }else {
                alert ('您还未登录') ;
                next('/login');
            }
        }
    });
    // console.log(store.state.isLogin);
};

export default install;