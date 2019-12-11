const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/shoes/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/shoes`).then(result => result.json())
    }
}