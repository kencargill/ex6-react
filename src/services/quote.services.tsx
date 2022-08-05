import axios from "axios";

export default function fetchQuotes() {
    return axios
        .get('https://grandcircusco.github.io/demo-apis/quotes.json')
        .then(response => response);
    }