const show = async (id) => {
  try {
    const options = { method: 'GET', headers: { Authorization: 'Bearer ' } };
    const response = await fetch(`https://react-eatable-api.herokuapp.com/products/${id}`, options);
    let data = await response.json();
    data = {...data, 
            name: data.name.replace(/\b\w/g, (match) => match.toUpperCase()),
            price: (data.price/100.0).toFixed(2)};
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default show;