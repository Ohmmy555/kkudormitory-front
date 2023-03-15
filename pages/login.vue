<template>
    <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="login">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="username" required>
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required>
            <button type="submit">Login</button>
        </form>
    </div>
</template>
  
<script>
export default {
    layout: "empty",
    data() {
        return {
            username: '',
            password: ''
        }
    },

    methods: {
        async login() {
            try {
                // Send an API request to authenticate the user
                const response = await axios.post('/api/login', {
                    username: this.username,
                    password: this.password
                });

                // If the login is successful, redirect the user to the home page
                this.$router.push('/admin');

            } catch (error) {
                // If there's an error, show an error message to the user
                console.log(error.response.data.message);
            }
        }
    }

}
</script>

<style>
.login-container {
    max-width: 400px;
    margin: auto;
    margin-top:10%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
}

button:hover {
    background-color: #3e8e41;
}
</style>
  