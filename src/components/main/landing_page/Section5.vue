<template>
    <div class="section5-page">
        <div class="header">
            <div class="header-title">
                <h1>Ready To Join The Virtual Webinar Platform?</h1>
                <p>Sign Up Today And Get Your First Webinar Live Within Minutes!</p>
            </div>
            <v-btn class="rounded-0" width="25%" outlined style="background-color: white" color="#1FC75B" dark x-large to="register">
                GET STARTED
            </v-btn>
        </div>
        <div class="body"></div>
    </div>
</template>

<style scoped>
.link {
    text-decoration: none;
    list-style: none;
    text-transform: initial;
}

.section5-page {
    display: flex;
    flex-direction: column;
    padding: 100px 5%;
    background-image: url("@/assets/landing_page/section5/background-people.jpg");
}

.header {
    width: 75%;
    margin: auto;
    color: #ffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
}

.header-title {
    text-align: center;
}

h1 {
    font-size: 2.5em;
}

p {
    font-size: 1.5em;
}

.body {
    width: 100%;
    margin-top: 50px;
}
</style>
