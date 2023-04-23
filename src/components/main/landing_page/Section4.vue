<template>
    <div class="main-content">
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
                        <img src=" https://www.freeiconspng.com/thumbs/check-tick-icon/tick-mark-icon-png-7.png" alt="" />
                    </div>
                    <span>Conduct video meetings</span>
                </div>
                <div class="item">
                    <div class="icon">
                        <img src=" https://www.freeiconspng.com/thumbs/check-tick-icon/tick-mark-icon-png-7.png" alt="" />
                    </div>
                    <span>Share your screen</span>
                </div>
                <div class="item">
                    <div class="icon">
                        <img src=" https://www.freeiconspng.com/thumbs/check-tick-icon/tick-mark-icon-png-7.png" alt="" />
                    </div>
                    <span>Record & share web meetings</span>
                </div>
                <div class="item">
                    <div class="icon">
                        <img src=" https://www.freeiconspng.com/thumbs/check-tick-icon/tick-mark-icon-png-7.png" alt="" />
                    </div>
                    <span>Interact with your audience</span>
                </div>
                <div class="item">
                    <div class="icon">
                        <img src=" https://www.freeiconspng.com/thumbs/check-tick-icon/tick-mark-icon-png-7.png" alt="" />
                    </div>
                    <span>Protect and moderate online meetings</span>
                </div>
                <div class="item">
                    <div class="icon">
                        <img src=" https://www.freeiconspng.com/thumbs/check-tick-icon/tick-mark-icon-png-7.png" alt="" />
                    </div>
                    <span>Multi-presenter webinars</span>
                </div>
            </div>
            <div class="body-image">
                <img
                    src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg?w=826&t=st=1659873958~exp=1659874558~hmac=460ed6e986615bccd05a4da74929e5c51a035fa808ee4fcb35dc99cec43c40f1"
                    alt=""
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-content {
    display: flex;
    flex-direction: column;
    padding: 100px 70px 100px 70px;
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
    margin-top: 50px;

    display: flex;
}

.main-content .body .body-items,
.body-image {
    flex: 1;
}

.main-content .body .body-items {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.main-content .body .body-items .item {
    display: flex;
}

.main-content .body .body-items span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
}

.main-content .body .body-items .icon {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-content .body .body-items .icon img {
    width: 35px;
}

.main-content .body .body-image img {
    width: 100%;
    display: block;
}
</style>
