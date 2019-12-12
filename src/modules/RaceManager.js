const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/races/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/races`).then(result => result.json())
    },
    post(newRaces) {
        return fetch(`${remoteURL}/races`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRaces)
        }).then(data => data.json())
    }
}