import User from "../model/user.model.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "Please fill in all fields!" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new User({ fullname, email, password: hashedPassword });
            await newUser.save();

            res.status(201).json({ message: "User created successfully!" });
        }
    } catch (error) {
        console.error("Error in creating user: ", error);
        res.status(500).json({ message: "Internal server error!" });
    }
};

export const login = async (req, res) => {
    try {
        const {email , password} = req.body ;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message : "User not found!"});
        } else {
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if(!isPasswordCorrect){
                return res.status(400).json({message : "Invalid credentials!"});
            } else {
                res.status(200).json({message : "Login successful!"});
        }
    }
    } catch (error) {
        console.log("Error in logging in: ", error.message);
        res.status(500).json({message : "Internal server error!"});
    }
};
