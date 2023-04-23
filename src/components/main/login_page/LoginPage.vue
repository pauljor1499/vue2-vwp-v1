<template>
    <div class="main-content">
        <div class="body">
            <div class="left">
                <div>
                    <h2>Sign In</h2>
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
                        Invalid username or password.
                    </div>
                </div>
                <div>
                    <v-text-field
                        v-model="email"
                        :error-messages="emailErrors"
                        label="Email address"
                        placeholder="sample@email.com"
                        outlined
                        dense
                        required
                        @input="$v.email.$touch()"
                    >
                    </v-text-field>

                    <v-text-field
                        v-model="password"
                        :error-messages="passwordErrors"
                        label="Password"
                        :append-icon="show_eye ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show_eye ? 'text' : 'password'"
                        name="input-10-2"
                        outlined
                        dense
                        required
                        class="input-group--focused"
                        @click:append="show_eye = !show_eye"
                        @input="$v.password.$touch()"
                    >
                    </v-text-field>
                </div>
                <v-btn color="#1fc75b" dark large @click="submit">
                    SIGN IN
                </v-btn>

                <span class="item-center"
                    ><a href="#">Forgot Password?</a>
                </span>
                <hr />
                <div class="item-center">
                    <span>
                        Don't have a Virtual Webinar Platform account? <br
                    /></span>
                    <span> <a href="#">Sign Up Now </a> </span>
                </div>
            </div>
            <div class="right">
                <v-carousel cycle :show-arrows="false" hide-delimiters>
                    <v-carousel-item v-for="(item, i) in items" :key="i">
                        <div class="items">
                            <img :src="item.src" alt="" />
                            <p>{{ item.feedback }}</p>
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],

    validations: {
        email: { required, email },
        password: { required },
    },

    data: () => ({
        email: "",
        password: "",
        show_eye: false,
        show_error_message: false,

        items: [
            {
                src: "https://img.freepik.com/free-vector/group-video-concept-illustration_114360-4792.jpg?w=826&t=st=1659925545~exp=1659926145~hmac=c394392836c71135281e3ae6e80535be725bbc13818deba4852be56106b031ff",
                feedback:
                    "Lost access to OneAuth? Worry not. Set up passphrase and backup number to recover OneAuth easily.",
            },
            {
                src: "https://img.freepik.com/free-vector/group-video-concept-illustration_114360-4942.jpg?w=740&t=st=1659925563~exp=1659926163~hmac=880dbf583748a2f3da07edb145ca87050049eeb59a1a2c533c566c2a6990ad7d",
                feedback:
                    "Move away from risky passwords and experience one-tap access to VWP. Download and install OneAuth.",
            },
            {
                src: "https://img.freepik.com/free-vector/remote-meeting-concept-illustration_114360-4704.jpg?w=826&t=st=1659925584~exp=1659926184~hmac=36867e329cf8f03605929a84bd76cbde6b5f6ce2e6b1cbae0dc51cdc328b7087",
                feedback:
                    "Secure online accounts with OneAuth 2FA. Back up OTP secrets and never lose access to your accounts.",
            },
        ],
    }),

    computed: {
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
    background-color: #1fc75b;
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
    justify-content: space-between;
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

    border-left: 1px solid rgb(221, 221, 221);
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

.v-btn {
    width: 100%;
}
</style>
