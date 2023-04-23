<template>
    <div class="section3-page">
        <div class="header">
            <h1>Virtual Webinar Platform</h1>
            <p>
                Virtual Webinar Platform offers speaker trainings, marketing guidance, custom registration pages, and technical assistance during
                live, simulive, or on-demand events.
            </p>
        </div>
        <div class="body">
            <div class="item">
                <div class="item-body">
                    <img src="@/assets/landing_page/section3/webinars.jpg" alt="" />
                    <h2>Webinars</h2>
                    <p>Help save time and effort that goes into conducting in-person webinars and helps ensure everyone is on the same page.</p>
                </div>
                <div class="item-footer">
                    <img src="@/assets/landing_page/section3/webinars_bottom.png" alt="" class="footer-image" />
                </div>
            </div>
            <div class="item">
                <div class="item-body">
                    <img src="@/assets/landing_page/section3/meetings.jpg" alt="" />
                    <h2>Meetings</h2>
                    <p>
                        Built in collaboration tools make meetings easy for participants to share content for more interactive and productive meetings
                        in real-time.
                    </p>
                </div>
                <div class="item-footer">
                    <img src="@/assets/landing_page/section3/meetings_bottom.png" alt="" class="footer-image" />
                </div>
            </div>
            <div class="item">
                <div class="item-body">
                    <img src="@/assets/landing_page/section3/learning.png" alt="" />
                    <h2>Learning & Training</h2>
                    <p>Remote collaboration is made possible and allowing people to be virtually connected quickly and easily.</p>
                </div>
                <div class="item-footer">
                    <img src="@/assets/landing_page/section3/learning_bottom.png" alt="" class="footer-image" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.section3-page {
    display: flex;
    flex-direction: column;
    padding: 100px 70px 100px 70px;
    background: #ecfff1;
    background-image: url("https://demo.themewinter.com/html/exhibz/classic/images/bg/feature_bg.png");
    background-size: cover;
    background-repeat: no-repeat;
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
    margin: auto;
    margin-top: 50px;

    display: flex;
    justify-content: space-between;
    gap: 75px;
}

.item {
    width: 50%;
    display: flex;
    background: #ffff;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);

    flex-direction: column;
    justify-content: space-between;
}

.item-body {
    padding: 25px 25px 0px 25px;
    text-align: center;

    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

.item-body img {
    width: 100%;
    height: 200px;
    display: block;
}

.item-footer {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
