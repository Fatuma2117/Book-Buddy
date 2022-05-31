

const options = {
    method: 'GET',
    url: 'https://magicblox.p.rapidapi.com/v1/sandbox',
    headers: {
      'X-RapidAPI-Host': 'magicblox.p.rapidapi.com',
      'X-RapidAPI-Key': 'f010151a61msh66accc926c221e8p1a12a0jsn507a180bd783'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });