const express = require('express');
const userRoutes = require('./routes/users');
const contactsRoutes = require('./routes/contacts');
const authRoutes = require('./routes/auth');

const app = express();

//Define routes
app.use('/api/users', userRoutes);
app.use('/api/contacts', contactsRoutes);
app.use('/api/auth', authRoutes);

const port = process.env.PORT | 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
