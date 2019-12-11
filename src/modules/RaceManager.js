const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/races/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/races`).then(result => result.json())
    }
}