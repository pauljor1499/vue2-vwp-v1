<template>
    <div class="section4-page">
        <div class="header">
            <h1>Virtual Webinar Features</h1>
            <p>
                A secure online meeting platform and webinar service that helps you in effectively collaborating and working remotely in innovative
                ways.
            </p>
        </div>
        <div class="body">
            <div class="body-items">
                <div class="item">
                    <div class="icon">
                        <img src="@/assets/landing_page/section4/check.png" alt="" />
                    </div>
                    <span>Conduct video meetings</span>
                </div>
                <div class="item">
                    <div class="icon">
                        <img src="@/assets/landing_page/section4/check.png" alt="" />
                    </div>
                    <span>Share your screen</span>
                </div>
                <div class="item">
                    <div class="icon">
                        <img src="@/assets/landing_page/section4/check.png" alt="" />
                    </div>
                    <span>Record & share web meetings</span>
                </div>
                <div class="item">
                    <div class="icon">
                        <img src="@/assets/landing_page/section4/check.png" alt="" />
                    </div>
                    <span>Interact with your audience</span>
                </div>
                <div class="item">
                    <div class="icon">
                        <img src="@/assets/landing_page/section4/check.png" alt="" />
                    </div>
                    <span>Protect and moderate online meetings</span>
                </div>
                <div class="item">
                    <div class="icon">
                        <img src="@/assets/landing_page/section4/check.png" alt="" />
                    </div>
                    <span>Multi-presenter webinars</span>
                </div>
            </div>
            <div class="body-image">
                <img src="@/assets/landing_page/section4/virtual_webinar.png" alt="" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.section4-page {
    display: flex;
    flex-direction: column;
    padding: 100px 5%;
}

.header {
    width: 50%;
    margin: auto;
    text-align: center;
}

p {
    opacity: 80%;
}

.body {
    width: 100%;
    margin-top: 50px;

    display: flex;
}

.body-items,
.body-image {
    flex: 1;
}

.body-items {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.item {
    display: flex;
}

.body-items span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
}

.icon {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon img {
    width: 35px;
}

.body-image img {
    width: 100%;
    display: block;
}
</style>
