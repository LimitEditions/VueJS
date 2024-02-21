<template>
    <div>
<router-link v-for="link in links" :key="link.id" :to="link.url">{{ link.title }}</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                links: [
                    {
                        id: 1,
                        title: "Home",
                        url: "/"
                    },

                    {
                        id: 2,
                        title: "About",
                        url: "/about"
                    },

                    {
                        id: 3,
                        title: "Contact",
                        url: "/contact"
                    },

                    {
                        id: 4,
                        title: "Catalogue",
                        url: "/catalogue"
                    }
                ]
            };
        },
    }
</script>

<style lang="scss" scoped>

</style>