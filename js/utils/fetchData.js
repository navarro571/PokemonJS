function request(url){
    return fetch(url)
    .then(res => res.json())
    .catch(err => console.error(`Hay un error en la consulta a la url (${url}): ${err}`));
}

export default request;
