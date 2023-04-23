<template>
    <div class="section2-page">
        <div class="header">
            <h1>Virtual Conference for Solving Problems</h1>
            <p>Virtual Webinar Platform has vast experience creating customized virtual hubs and integrating various webinar platforms.</p>
        </div>
        <div class="body">
            <ul class="rows">
                <li class="item1">
                    <div class="icon1">
                        <img src="@/assets/landing_page/section2/icon1.png" alt="" />
                    </div>
                    <span>Webinars</span>
                </li>
                <li class="item2">
                    <div class="icon2">
                        <img src="@/assets/landing_page/section2/icon2.png" alt="" />
                    </div>
                    <span>Virtual Events</span>
                </li>
                <li class="item3">
                    <div class="icon3">
                        <img src="@/assets/landing_page/section2/icon3.png" alt="" />
                    </div>
                    <span>Consultation</span>
                </li>
                <li class="item4">
                    <div class="icon4">
                        <img src="@/assets/landing_page/section2/icon4.png" alt="" />
                    </div>
                    <span>Professional Development</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.item1,
.item2,
.item3,
.item4 {
    text-decoration: none;
    list-style: none;
    text-transform: initial;

    font-weight: bold;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
}

.section2-page {
    padding: 100px 70px 100px 70px;
    display: flex;
    flex-direction: column;
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
}

.rows {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    row-gap: 50px;
}

.rows li {
    display: flex;
}

.icon1,
.icon2,
.icon3,
.icon4 {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rows li span {
    font-size: 1.5em;
    padding-left: 10%;
    display: flex;
    align-items: center;
}

.item1 {
    border: 2px solid #ff2661;
    color: #ff2661;
}
.icon1 {
    background-color: #ff2661;
}

.item2 {
    border: 2px solid #ffb339;
    color: #ffb339;
}
.icon2 {
    background-color: #ffb339;
}

.item3 {
    border: 2px solid #8000ff;
    color: #8000ff;
}
.icon3 {
    background-color: #8000ff;
}
.icon3 img {
    width: 50px;
}

.item4 {
    border: 2px solid #26a1ff;
    color: #26a1ff;
}
.icon4 {
    background-color: #26a1ff;
}
</style>
