<template>
    <div class="navbar">
        <div class="logo-links">
            <div class="logo">
                <h1>VWP</h1>
            </div>
            <div class="nav-links">
                <router-link :to="'/'" class="nav-link"> HOME </router-link>
                <router-link :to="'about'" class="nav-link"> ABOUT US </router-link>
                <router-link :to="'services'" class="nav-link"> SERVICES </router-link>
                <router-link :to="'contact'" class="nav-link"> CONTACT US </router-link>
            </div>
        </div>
        <div class="action-buttons">
            <v-btn class="rounded-0" outlined color="#1FC75B" to="join"> Join </v-btn>
            <v-btn class="rounded-0" outlined color="#1FC75B" to="login"> Sign In </v-btn>
            <v-btn class="rounded-0" color="#1FC75B" dark to="register"> Sign Up, It's Free </v-btn>
        </div>
    </div>
</template>

<style scoped>
* {
    text-decoration: none;
    list-style: none;
    text-transform: initial;
}

.navbar {
    position: relative;
    z-index: 999;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 5%;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
}

.logo-links {
    display: flex;
    justify-content: space-between;
    gap: 10rem;
}

.nav-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 5rem;
    white-space: nowrap;
}

.nav-link {
    color: black;
}

.nav-link:hover {
    color: #00c545;
}

.router-link-exact-active {
    color: #00c545;
    font-weight: bold;
}

.action-buttons {
    display: flex;
    justify-content: space-between;
    column-gap: 1rem;
}
</style>
