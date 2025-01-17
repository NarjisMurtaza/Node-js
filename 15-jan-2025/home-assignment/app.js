import express from "express";
import path from "path";
import bcrypt from "bcrypt";
const app = express()
const port = 8000;
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
const verify = {
    username: "narjis",
    password: await bcrypt.hash("j", 10)
};
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, "login.html"));
})
app.listen(port,()=>{
    console.log("working");
})
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (username === verify.username) {
        try {
            const match = await bcrypt.compare(password, verify.password); // Compare the passwords
            if (match) {
                // Passwords match
                res.render('profile', { user_name: username, pass_word: password, verify });
            } else {
                // Passwords do not match
                res.render('profile', { user_name: username, pass_word: password, verify: { username: "", password: "" } });
            }
        } catch (error) {
            console.error('Error comparing passwords:', error);
            res.status(500).send('Internal Server Error');
        }
    } else {
        // Username does not match
        res.render('profile', { user_name: username, pass_word: password, verify: { username: "", password: "" } });
    }
});