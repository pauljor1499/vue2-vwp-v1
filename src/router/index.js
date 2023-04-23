import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/views/main/MainPage.vue";
import LandingPage from "@/components/main/landing_page/LandingPage";
import LoginPage from "@/components/main/login_page/LoginPage";
import RegistryPage from "@/components/main/registry_page/RegistryPage";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: MainPage,
        children: [
            {
                path: "",
                component: LandingPage,
            },
            {
                path: "login",
                component: LoginPage,
            },
            {
                path: "register",
                component: RegistryPage,
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
