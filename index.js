const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use(bodyParser.json())

var main_ctrl = require('./controllers/main_ctrl.js');

// <!~~~----- GET endpoints ----~~~>
app.get('/name', main_ctrl.getName);
app.get('/location', main_ctrl.getLocation);
app.get('/occupations', main_ctrl.getOccupations);
app.get('/occupations/latest', main_ctrl.getOccupationLatest);
app.get('/hobbies', main_ctrl.getHobbies);
app.get('/hobbies/:type', main_ctrl.getHobbiesByType);
app.get('/family', main_ctrl.getFamily);
app.get('/family/:gender', main_ctrl.getFamilyByGender);
app.get('/restaurants', main_ctrl.getRestaurants);
app.get('/restaurants/:name', main_ctrl.getRestaurantsByName);
app.get('/skills', main_ctrl.getSkills);


// <!~~~----- PUT endpoints ----~~~>
app.put('/name', main_ctrl.changeName);
app.put('/location', main_ctrl.changeLocation);

// <!~~~----- POST endpoints ----~~~>
app.post('/hobbies', main_ctrl.addHobby);
app.post('/hobbies', main_ctrl.addOccupation);
app.post('/hobbies', main_ctrl.addFamily);
app.post('/hobbies', main_ctrl.addRestaurant);
app.post('/skills', main_ctrl.addSkills);


app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
})