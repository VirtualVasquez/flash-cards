const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {UserInputError} = require('apollo-server');

const {validateRegisterInput, validateLoginInput} = require('../../util/validators')
const { SECRET_KEY } = require('../../config')
const User = require('../../models/user');

//helper function created to return a token
//used at login and user creation
function generateToken(user){
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            username: user.username
        }, SECRET_KEY, {expiresIn: '1h'});
}

module.exports = {
    Mutation:{
        async login(_, {username, password}){
            const {errors, valid} = validateLoginInput(username, password);
            
            //if valid is false            
            if(!valid){
                throw new UserInputError('Errors', {errors});
            }
            const user = await User.findOne({username});
            //if user not registered            
            if(!user){
                errors.general = "User not found";
                throw new UserInputError('User not found', {errors})
            }
            //compare submitted password to the password of the user
            const match = await bcrypt.compare(password, user.password)
            if(!match){
                errors.general = 'Wrong credentials';
                throw new UserInputError('Wrong credentials', {errors});
            }

            const token = generateToken(user);
            return{
                ...user._doc,
                id: user._id,
                token
            }
        },

        // needs input (parents, args, context, info)
        async register(_, {registerInput: {username, email, password, confirmPassword}}, context, info){
            
            ////1)validate user data////
            const {valid, errors} = validateRegisterInput(username, email, password, confirmPassword);
            if(!valid){
                throw new UserInputError('Errors', {errors})
            }
            ////

            ////2)make sure user doesn't already exist////
            const user = await User.findOne({username});
            if(user){
                throw new UserInputError('Username is taken', {
                    errors:{
                        username: 'This username is taken'
                    }
                })
            }
            ////////
            
            ////3)Hash password and create an auth token ////
            password = await bcrypt.hash(password, 12);  
            
            //create user object
            const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date().toISOString()
            })

            //save new user to the DB
            const res = await newUser.save() ; 

            const token = generateToken(res)

            return{
                ...res._doc,
                id: res._id,
                token
            }
            ////////
        }
    }
}