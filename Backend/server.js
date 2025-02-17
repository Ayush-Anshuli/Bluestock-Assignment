const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Error:', err));

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});
const User = mongoose.model('User', UserSchema);

const IPOSchema = new mongoose.Schema({
    company: String,
    price: Number,
    listingDate: Date
});
const IPO = mongoose.model('IPO', IPOSchema);

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered' });
    } catch (error) {
        res.status(400).json({ error: 'Email already exists' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

const auth = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid token' });
    }
};

app.get('/ipos', async (req, res) => {
    const ipos = await IPO.find();
    res.json(ipos);
});

app.post('/ipos', auth, async (req, res) => {
    const { company, price, listingDate } = req.body;
    const ipo = new IPO({ company, price, listingDate });
    await ipo.save();
    res.status(201).json({ message: 'IPO added' });
});

app.post('/seed', async (req, res) => {
    await IPO.insertMany([
        { company: 'Tech Corp', price: 100, listingDate: new Date('2025-01-15') },
        { company: 'Finance Ltd', price: 200, listingDate: new Date('2025-02-10') }
    ]);
    res.json({ message: 'Dummy data added' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; 
