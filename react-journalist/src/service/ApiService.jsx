import axios from 'axios';

const BASE = 'http://localhost:8080/';

class ApiService {

    fetchAll(entity) {
        return axios.get(BASE+entity);
    }

    fetchById(entity,id) {
        return axios.get(BASE + entity + "/" + id);
    }

    deleteId(entity,id) {
        return axios.delete(BASE + entity + "/" + id);
    }

    add(entity,obj) {
        return axios.post(""+BASE+entity, obj);
    }

    edit(entity,id,obj) {
        return axios.put(BASE + entity + "/" + id, obj);
    }

}

export default new ApiService();