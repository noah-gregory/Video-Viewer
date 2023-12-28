export default class HTTP { 

    static doPost(host, message) { 

        return fetch(
            host,
            {
                method: 'POST',
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: message
            }
        )
        .catch((error) => {
            console.log(error);
        });
    }
}