<template>
    <div class="main-content">
        <div class="body">
            <div class="left">
                <div>
                    <h2>Sign Up</h2>
                    <span>to Virtual Webinar Platform</span>
                </div>
                <div class="error-message" v-if="show_error_message">
                    <div class="error-message-header">
                        <button
                            @click="show_error_message = !show_error_message"
                        >
                            <v-icon>mdi-close-circle-outline</v-icon>
                        </button>
                    </div>
                    <div class="error-message-body">
                        This account already registered.
                    </div>
                </div>
                <div>
                    <v-text-field
                        v-model="first_name"
                        :error-messages="first_nameErrors"
                        label="First name"
                        :counter="10"
                        outlined
                        dense
                        required
                        @input="$v.first_name.$touch()"
                        @blur="$v.first_name.$touch()"
                    >
                    </v-text-field>

                    <v-text-field
                        v-model="last_name"
                        :error-messages="last_nameErrors"
                        label="Last name"
                        :counter="10"
                        outlined
                        dense
                        required
                        @input="$v.last_name.$touch()"
                        @blur="$v.last_name.$touch()"
                    >
                    </v-text-field>

                    <v-text-field
                        v-model="email"
                        :error-messages="emailErrors"
                        label="Email address"
                        placeholder="sample@email.com"
                        outlined
                        dense
                        required
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                    >
                    </v-text-field>

                    <v-text-field
                        v-model="password"
                        :error-messages="passwordErrors"
                        :append-icon="show_eye ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show_eye ? 'text' : 'password'"
                        label="Password"
                        outlined
                        dense
                        required
                        class="input-group--focused"
                        @click:append="show_eye = !show_eye"
                        @input="$v.password.$touch()"
                        @blur="$v.password.$touch()"
                    >
                    </v-text-field>
                </div>
                <v-btn color="#1fc75b" dark large @click="submit">
                    REGISTER ACCOUNT
                </v-btn>
                <hr />
                <div class="item-center">
                    <span> Already have an account? <br /></span>
                    <span> <a href="#">Sign In Instead </a> </span>
                </div>
            </div>
            <div class="right">
                <v-carousel
                    cycle
                    :show-arrows="false"
                    hide-delimiter-background
                >
                    <v-carousel-item v-for="(item, i) in items" :key="i">
                        <div class="feedbacks">
                            <div class="feedback-image">
                                <img :src="item.src" alt="" />
                            </div>

                            <div class="feedback-person-name">
                                <span>{{ item.name }}</span>
                                <span class="body-text">{{
                                    item.position
                                }}</span>
                            </div>

                            <span class="body-text">
                                "{{ item.feedback }}"
                            </span>
                            <div>⭐⭐⭐⭐⭐</div>
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],

    validations: {
        first_name: { required, maxLength: maxLength(10) },
        last_name: { required, maxLength: maxLength(10) },
        email: { required, email },
        password: { required },
    },

    data: () => ({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        show_eye: false,
        show_error_message: false,

        items: [
            {
                src: "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
                name: "Billy Jones",
                position: "Frontend Developer",
                feedback:
                    "The fact I can easily add all resources in advance is great and the option for attendees to download the resource is such a great tool.",
            },
            {
                src: "https://images.squarespace-cdn.com/content/v1/559b2478e4b05d22b1e75b2d/1549568089409-SJ70E6DVG3XTE70232OL/Nesbit.jpg",
                name: "William Smith",
                position: "QA Tester",
                feedback:
                    "I like that it has very intuitive interface and it is easy to use, branding possibility is great. I also like that attention is given to details when customizing the event.",
            },
            {
                src: "https://miro.medium.com/max/1050/1*7hkI-ZKsglnbjxCRV1bMZA.png",
                name: "Katty Williams",
                position: "Backend Developer",
                feedback:
                    "The Virtual Werbinar Platform has created a road map of their upcoming features and they are super transparent and listen to suggestions and comments as well. This software is amazing and will only get better.",
            },
        ],
    }),

    computed: {
        first_nameErrors() {
            const errors = [];
            if (!this.$v.first_name.$dirty) return errors;
            !this.$v.first_name.maxLength &&
                errors.push("First name must be at most 10 characters long");
            !this.$v.first_name.required &&
                errors.push("First name is required.");
            return errors;
        },
        last_nameErrors() {
            const errors = [];
            if (!this.$v.last_name.$dirty) return errors;
            !this.$v.last_name.maxLength &&
                errors.push("Last name must be at most 10 characters long");
            !this.$v.last_name.required &&
                errors.push("Last name is required.");
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.email && errors.push("Must be valid e-mail");
            !this.$v.email.required && errors.push("E-mail is required");
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            !this.$v.password.required && errors.push("Password is required");
            return errors;
        },
    },

    methods: {
        submit() {
            this.$v.$touch();
            if (this.show_error_message === false)
                this.show_error_message = true;
        },
    },
};
</script>

<style scoped>
.link,
a {
    text-decoration: none;
    list-style: none;
    text-transform: initial;
}

.main-content {
    padding: 100px 0px 100px 0px;
}

.body {
    width: 70%;
    margin: auto;
    display: flex;
    background-color: #ffff;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
}

.left {
    flex: 1.3;
    padding: 50px;

    display: flex;
    flex-direction: column;
    row-gap: 30px;

    border: 2px solid #1fc75b;
}

.left .error-message {
    padding: 10px;
    border: 1px solid #ff0000;
    background-color: #ffd1d1;
}

.left .error-message .error-message-header {
    float: right;
}

.left .item-center {
    text-align: center;
}

.right {
    flex: 1;
    padding: 50px;
    background-color: #1fc75b;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    row-gap: 50px;
}

.right h2 {
    color: #ffff;
}

.right .items {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 40px;
}

.right img {
    width: 100%;
}

.feedbacks {
    margin-top: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 20px;
    background-color: #169e46;
    border-radius: 10px;
    color: #ffff;
    padding: 20px;
}

.feedbacks .feedback-image {
    width: 60px;
    height: 60px;
    margin-top: -20%;
}

.feedbacks .feedback-image img {
    border-radius: 50%;
}

.feedbacks .feedback-person-name {
    display: flex;
    flex-direction: column;
}

.feedbacks .body-text {
    font-size: 1em;
    opacity: 80%;
}

.v-btn {
    width: 100%;
}
</style>
