<template>
    <footer>
        <div class="footer-head"></div>
        <div class="footer-body">
            <div class="content">
                <div class="about">
                    <h3>VWP</h3>
                    <p>
                        Book us to facilitate your next webinar. We offer speaker trainings, marketing guidance, custom registration pages, and
                        technical assistance during live, simulive, or on-demand events.
                    </p>
                </div>
            </div>
            <div class="content"></div>
            <div class="content">
                <h3>SERVICES</h3>
                <a href="#">Webinars</a>
                <a href="#">Virtual Events</a>
                <a href="#">Consultation</a>
                <a href="#">Profressional Development</a>
            </div>
            <div class="content">
                <h3>COMPANY</h3>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contacts</a>
            </div>
            <div class="content">
                <div class="social-links">
                    <a href="#">
                        <div class="social-item">
                            <v-icon large color="gray"> mdi-facebook </v-icon>
                        </div>
                    </a>
                    <a href="#">
                        <div class="social-item">
                            <v-icon large color="gray"> mdi-twitter </v-icon>
                        </div>
                    </a>
                    <a href="#">
                        <div class="social-item">
                            <v-icon large color="gray"> mdi-instagram </v-icon>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="border-bottom"></div>
        <div class="footer-bottom">
            <div>&copy; 2023 by Virtual Webinar Platform. All rights reserved.</div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: #353535;
    background-image: url("https://demo.themewinter.com/html/exhibz/classic/images/bg/footer_bg.png");
    background-repeat: no-repeat;
    background-size: cover;
}

h3,
p,
a {
    text-decoration: none;
    list-style: none;
    text-transform: initial;
}

footer {
    max-width: 100%;
}

footer .footer-head {
    overflow: hidden;
    padding: 10px 70px 10px 70px;
}

footer .footer-body {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr 1fr;
    gap: 20px;
    padding: 50px 70px 50px 70px;
}

footer .footer-body .content {
    width: 100%;
    color: #ffff;
    text-align: left;
}

footer .footer-body .content h3 {
    margin-bottom: 20px;
    color: #1fc75b;
}

footer .footer-body .content .about {
    text-align: justify;
    text-justify: inter-word;
}

footer .footer-body .content .about p {
    color: #ffff;
    opacity: 50%;
}

footer .footer-body .content a {
    display: block;
    color: #ffff;
    opacity: 50%;
    margin-top: 5px;
}

footer .footer-body .content a:hover,
footer .footer-head .brands .v-icon:hover {
    color: #ffff;
    opacity: 100%;
}

footer .footer-bottom {
    width: 100%;
    padding: 10px 70px 50px 50px;
    text-align: center;
}

footer .footer-bottom div {
    padding: 20px;
    opacity: 50%;
    color: white;
}

.border-bottom {
    width: 90%;
    margin: auto;
    border-bottom: 0.1px solid #ffff;
    opacity: 50%;
}

.social-links {
    display: flex;
    justify-content: space-between;
}

.social-item {
    width: 50px;
    height: 50px;
    background-color: #8d8d8d;

    display: flex;
    justify-content: center;
    align-items: center;
}

.social-item:hover {
    width: 50px;
    height: 50px;
    background-color: #1fc75b;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
}

.v-icon:hover {
    color: #ffff;
}

.social-item img {
    width: 50px;
}
</style>
