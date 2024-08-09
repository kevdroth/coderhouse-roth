const getReservas = async () => {
    const res = await fetch(
        `https://my.api.mockaroo.com/reservas?key=${API_KEY}`
    );

    const data = await handleResponse(res);
    return data;
};

const getTipos = async () => {
    const res = await fetch(
        `https://my.api.mockaroo.com/vehiculos?key=${API_KEY}`
    );

    const data = await handleResponse(res);
    return data;
};

const getModelos = async (id) => {
    const res = await fetch(
        `https://my.api.mockaroo.com/modelos/${id}?key=${API_KEY}`
    );

    const data = await handleResponse(res);
    return data;
};

const handleResponse = async (res) => {
    if (!res.ok) {
        toast('error', 'Ocurrió un error al solicitar el recurso');
        return [];
    } else {
        const data = await res.json();
        return data;
    }
};
