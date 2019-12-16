import axios from 'axios';

export default function getToken() {

    axios.post('http://localhost:8081/login_check', {
        username: 'antoine',
        password: 'antoine'
    }).then(r => {
        if (r) {
            localStorage.setItem('token', r.data.token);
        }
    }, (error) => {
        console.log(error);
    } );

}
