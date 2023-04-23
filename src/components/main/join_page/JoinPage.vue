<template>
    <div class="main-content">
        <div class="body">
            <h1>Join Meeting</h1>
            <div class="text-field">
                <span>Meeting Key</span>
                <v-text-field outlined dense> </v-text-field>
            </div>
            <router-link :to="'/meeting'" class="link">
                <v-btn color="#1fc75b" dark x-large> JOIN MEETING </v-btn>
            </router-link>
        </div>
    </div>
</template>
<style scoped>
.link {
    text-decoration: none;
    list-style: none;
    text-transform: initial;
}

.main-content {
    display: flex;
    justify-content: center;
    padding: 175px 0;
}

.body {
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
