const index = async () => {
  try {
    const options = { method: 'GET', headers: { Authorization: 'Bearer ' } };
    const response = await fetch('https://react-eatable-api.herokuapp.com/products', options);
    let data = await response.json();
    data.forEach((e) => {
      e.name = e.name.replace(/\b\w/g, (match) => match.toUpperCase());
      e.price = (e.price/100.0).toFixed(2);
    });
    
    // console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default index;
