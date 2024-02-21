import { createRouter, createWebHistory } from "vue-router";
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'
import NotFound from '@/pages/NotFound.vue'
import Catalogue from '@/pages/Catalogue.vue'

const routes = [
    {
        path: "/",
        component: Home
    },

    {
        path: "/about",
        component: About
    },

    {
        path: "/contact",
        component: Contact
    },

    {
        path: "/:CatchAll(.*)",
        component: NotFound
    },

    {
        path: "/catalogue/:pagenumber?",
        component: Catalogue
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes, 
    scrollBehavior(){
        return {
            top: 0
        }
    }
})
export default router