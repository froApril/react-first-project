import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '24ca8606b1ff4eef9030c285f456cc63'
    }
})