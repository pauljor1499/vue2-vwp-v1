<template>
    <div class="main-content">
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
                    <img
                        src="https://www.thebrehon.com/files/hotel/hotel-a/04-meetings/The-Gleneagle-group-working-remotly-website-images-1080x1080-1.jpg"
                        alt=""
                    />
                    <h2>Webinars</h2>
                    <p>Help save time and effort that goes into conducting in-person webinars and helps ensure everyone is on the same page.</p>
                </div>
                <div class="item-footer">
                    <img src="https://demo.themewinter.com/html/exhibz/classic/images/feature/feature_image1.png" alt="" class="footer-image" />
                </div>
            </div>

            <div class="item">
                <div class="item-body">
                    <img
                        src="https://www.eposaudio.com/contentassets/777acbf106a0499fa8b3d6c690b6ff8c/virtual-meeting-hero2-1400x800px.jpg?width=1300"
                        alt=""
                    />
                    <h2>Meetings</h2>
                    <p>
                        Built in collaboration tools make meetings easy for participants to share content for more interactive and productive meetings
                        in real-time.
                    </p>
                </div>
                <div class="item-footer">
                    <img src="https://demo.themewinter.com/html/exhibz/classic/images/feature/feature_image2.png" alt="" class="footer-image" />
                </div>
            </div>

            <div class="item">
                <div class="item-body">
                    <img src="https://www.buildersmerchantsnews.co.uk/images/teaser//W725/training_75L.png" alt="" />
                    <h2>Learning & Training</h2>
                    <p>Remote collaboration is made possible and allowing people to be virtually connected quickly and easily.</p>
                </div>
                <div class="item-footer">
                    <img src="https://demo.themewinter.com/html/exhibz/classic/images/feature/feature_image3.png" alt="" class="footer-image" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-content {
    display: flex;
    flex-direction: column;
    padding: 100px 70px 100px 70px;
    background: #ecfff1;
    background-image: url("https://demo.themewinter.com/html/exhibz/classic/images/bg/feature_bg.png");
    background-size: cover;
    background-repeat: no-repeat;
}

.main-content .header {
    width: 50%;
    margin: auto;
    text-align: center;
}

p {
    opacity: 80%;
}

.main-content .body {
    width: 100%;
    margin: auto;
    margin-top: 50px;

    display: flex;
    justify-content: space-between;
    gap: 75px;
}

.main-content .body .item {
    width: 50%;
    display: flex;
    background: #ffff;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);

    flex-direction: column;
    justify-content: space-between;
}

.main-content .body .item .item-body {
    padding: 25px 25px 0px 25px;
    text-align: center;

    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

.main-content .body .item .item-body img {
    width: 100%;
    height: 200px;
    display: block;
}

.main-content .body .item .item-footer {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
