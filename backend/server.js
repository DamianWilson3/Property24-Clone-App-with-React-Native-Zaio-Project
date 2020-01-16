// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// // Bodyparser middleware
// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   }),
// );
// app.use(bodyParser.json());

// app.use(cors());
// app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('MongoDB database connection established successfully');
// });

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const passport = require('passport');
const users = require('./routes/api/users');
const properties = require('./routes/api/properties');
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(bodyParser.json());
// DB Config
const db = require('./config/keys').mongoURI;
// Connect to MongoDB
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB successfully connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require('./config/passport')(passport);
// Routes
app.use('/api/users', users);
app.use('/api/properties', properties);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
