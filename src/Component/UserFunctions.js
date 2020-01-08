import axios from "axios";

export const register = newUser => {
    return axios

        .post('/users/signup', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password
        })
        .then(res => {

            console.log('Registered...');
        })
}

export const login = user => {
    return axios

        .post('users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {

            localStorage.setItem('usertoken', res.data);
            return res.data;
            //console.log('Logged in...');
        })
        .catch(err => {
            console.log('error' + err);
        })
}
