<template>
    <div class="main-page">
        <Navbar />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Navbar from "@/components/main/NavBar.vue";
import Footer from "@/components/main/Footer.vue";

export default {
    components: {
        Navbar,
        Footer,
    },
};
</script>
