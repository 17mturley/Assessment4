const complimentBtn = document.getElementById("complimentButton")
const catContainer = document.getElementById("cats-container")
const fortuneBtn = document.getElementById("fortuneButton")
const getCatsBtn = document.getElementById("getCats")

const baseURL = `http://localhost:4000/api/cats`;

const catsCallback = ({ data: cats }) => displayCats(cats);
const errCallback = err => console.log(err.response.data);

const getAllCats = () =>
    axios.get(baseURL).then(catsCallback).catch(errCallback);
const createCat = (body) =>
    axios.get(baseURL, body).then(catsCallback).catch(errCallback);
const deleteCat = (id) => 
    axios.get(`${baseURL}/${id}`).then(catsCallback).catch(errCallback)
const updateCatRating = (id, type) =>
    axios
        .put(`${baseURL}/${id}`, { type })
        .then(catsCallback)
        .catch(errCallback);

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

fortuneBtn.addEventListener('click', getFortune)


function displayCats(arr) {
    catContainer.innerHTML = ``;
    for (let i = 0; i < arr.length; i++) {
        createCat(arr[i]);
    }
}

getCatsBtn.addEventListener('click', displayCats)

