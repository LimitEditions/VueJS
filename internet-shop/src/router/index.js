import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/components/HomePage.vue';
import OurProject from '@/components/OurProject.vue';
import Blog from '@/components/Blog.vue';
import NotFound from '@/components/NotFound.vue';
import ProjectDetails from '@/components/ProjectDetails.vue';
import BlogDetails from '@/components/BlogDetails.vue';


const routes = [
    {
        path: "/",
        component: HomePage
    },

    {
        path: "/project",
        component: OurProject
    },

    {
        path: "/blog",
        component: Blog
    },
    {
        path: "/project-details",
        component: ProjectDetails
    },
    {
        path: "/blog-details",
        component: BlogDetails
    },
    {
        path: "/:CatchAll(.*)",
        component: NotFound
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes, 
    scrollBehavior(){
        return {
            top: 0
        }
    }
});

export default router;