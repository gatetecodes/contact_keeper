const express = require('express');
const userRoutes = require('./routes/users');
const contactsRoutes = require('./routes/contacts');
const authRoutes = require('./routes/auth');
const connectDB = require('./config/db');

const app = express();

app.use(express.json({ extended: false }));

//connect database
connectDB();

//Define routes
app.use('/api/users', userRoutes);
app.use('/api/contacts', contactsRoutes);
app.use('/api/auth', authRoutes);

const port = process.env.PORT | 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
