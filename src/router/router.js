import VueRouter from "vue-router";
import Vue from "vue";
import MainPage from "../views/MainPage";


Vue.use(VueRouter);

const router = new VueRouter({
    mode:"history",
    routes:[
        {path:"/", name:"main", component:MainPage}
    ]
});

export default router;