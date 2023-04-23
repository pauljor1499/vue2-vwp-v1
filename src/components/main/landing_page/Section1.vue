<template>
    <div class="section1-page">
        <div class="left-section">
            <div class="banner-text">
                <h1 class="title-banner">We'll help you create your next webinar or virtual event!</h1>
                <p>
                    Virtual Webinar Platform is a secure online meeting platform and webinar solution that helps people find new ways to collaborate
                    and work remotely with efficacy.
                </p>
            </div>
            <v-btn class="rounded-0" color="#FF763B" dark width="200" x-large> Register Now </v-btn>
        </div>
        <div class="right-section"></div>
    </div>
</template>

<style scoped>
.section1-page {
    display: flex;
    padding: 5% 0;
    background-image: url("@/assets/landing_page/section1/green-banner.jpg");
}

.left-section {
    flex: 1;
    padding: 5%;
    color: white;
    display: flex;
    flex-direction: column;
    text-align: justify;
    text-justify: inter-word;
    gap: 50px;
}

.banner-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.title-banner {
    font-size: 2.5rem;
    line-height: 1;
}

.right-section {
    flex: 1;
}
</style>
