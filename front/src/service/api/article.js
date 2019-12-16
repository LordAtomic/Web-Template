import axios from 'axios';

export default function article() {
    if (localStorage.getItem('token')) {

        let token = localStorage.getItem('token');
        let AuthStr = 'Bearer '.concat(token);

        axios.get("http://localhost:8081/api/articles", { headers: { Authorization: AuthStr } } ).then(response => {
            if (response) {
                return response.data['hydra:member']
            }
        }).catch((error) => {
                console.log('error ' + error);
        });
    }
}
