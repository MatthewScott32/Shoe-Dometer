const remoteURL = "http://localhost:5002"
// const userAccount = "?userId="

export default {
    get(id) {
        return fetch(`${remoteURL}/races/${id}?_expand=shoe`).then(result => result.json())
    },
    getAllAccountRaces(id) {
        return fetch(`${remoteURL}/races?userId=${id}&_expand=shoe`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/races?_expand=shoe`).then(result => result.json())
    },
    post(newRaces) {
        return fetch(`${remoteURL}/races`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRaces)
        }).then(data => data.json())
    },

    delete(id) {
        return fetch(`http://localhost:5002/races/${id}`,{
            method: "DELETE"
        })
        .then(result => result.json)
    },
    
    update(editedRace) {                                       
        return fetch(`${remoteURL}/races/${editedRace.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedRace)
        }).then(data => data.json());
      }
}