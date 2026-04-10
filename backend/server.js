const express = require('express');
const cors = require('cors');

const loadRoutes = require('./routes/loadRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/loads', loadRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('🚛 Smart Load Backend is running');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
