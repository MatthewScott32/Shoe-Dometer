const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/shoes/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/shoes`).then(result => result.json())
    },
    post(newShoes) {
        return fetch(`${remoteURL}/shoes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newShoes)
        }).then(data => data.json())
    },

    delete(id) {
        return fetch(`http://localhost:5002/shoes/${id}`,{
            method: "DELETE"
        })
        .then(result => result.json)
    }
}