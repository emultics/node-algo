const axios = require('axios');
exports.getPetrolPrice = async (req, res) => {
  axios
    .get('https://mfapps.indiatimes.com/ET_Calculators/oilpricebycitystate.htm')
    .then((response) => {
      res.status(200).send({
        message: 'fetched!',
        results: response.data['results'],
      });
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};
