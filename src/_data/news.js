const axios = require("axios");

module.exports = async function getData() {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=se&category=technology&apiKey=33b6f16eb05a4f0482b47f29dd466cfc');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}