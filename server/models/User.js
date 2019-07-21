const mongoose = require('mongoose');
const CryptoJS = require('crypto-js');
const Validator = require('validator');

const schema = new mongoose.Schema({

        username: {
            type: String,
            unique: [true,'نام کاربری قبلا استفاده شده است'],
            required: [true, 'نام کاربری الزامی می باشد'],
            validate: [
                {
                validator: function(v) {
                    return Validator.isMobilePhone(v,"fa-IR",{strictMode:false}) || Validator.isEmail(v);
                },
                message: props => `$ نام کاربری شماره موبایل یا ایمیل می باشد `
            },{
                    validator: function(v) {
                        if(Validator.isMobilePhone(v,"fa-IR")){
                            if(Validator.isLength(v,{min:11, max: 11})){
                                return true;
                            }else {
                                return false;
                            }
                                }
                        return true;
                    },
                    message: props => `موبایل باید 10 رقم باشد و با 09 شروع شود `
                }
                ],
        },
        password: {
            type: String,
            validate: [
              {
                    validator: function(v) {
                        if(Validator.isLength(CryptoJS.AES.decrypt(v, process.env.SECRET_JWT).toString(CryptoJS.enc.Utf8),{min:6, max: 50})){
                            return true;
                        }
                        return false;
                    },
                    message: props => 'رمز عبور باید بیشتر از 6 رقم باشد'
                }
            ],
            required: [true, 'رمز عبور الزامی می باشد'],
            set: v => CryptoJS.AES.encrypt(v.toString(), process.env.SECRET_JWT),
        },
    role:{
        type: String,
        validate: [
            {
                validator: function(v) {
                    if(v.toString().length>0){
                        return true;
                    }
                    return false;
                },
                message: props => 'نقش کاربر را وارد نمایید'
            }
        ],
        required: [true, 'نقش کاربر الزامی می باشد'],
    }
    }
    , {autoIndex: false, collection: 'users', id: true, timestamps: true});
schema.post('save', function(error, doc, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
        next({message:'نام کاربری باید یکتا باشد'});
    } else {
        next(error);
    }
});
// schema.pre('save', async function() {
//     await Promise.resolve();
//     // You can also throw an error in an `async` function
//     throw new Error('something went wrong');
// });
// schema.pre('validate', function() {
//     console.log('this gets printed first');
// });
// schema.pre('remove', function() { console.log('Removing!'); });
// schema.pre('find', function() {
//     console.log(this instanceof mongoose.Query); // true
//     this.start = Date.now();
// });
// schema.pre('update', function() {
//     this.update({},{ $set: { updatedAt: new Date() } });
// });
//
// schema.post('init', function(doc) {
//     console.log('%s has been initialized from the db', doc._id);
// });
// schema.post('validate', function(doc) {
//     console.log('%s has been validated (but not saved yet)', doc._id);
// });
// schema.post('save', function(doc) {
//     console.log('%s has been saved', doc._id);
// });
// schema.post('remove', function(doc) {
//     console.log('%s has been removed', doc._id);
// });
// schema.post('find', function(result) {
//
// })

/*schema.statics.findByUsername = function(username) {
    return this.find({ username: username });
};*/

const User = mongoose.model('user', schema);
const findByUsername = async function (username) {
    return await User.findOne({'username': username}).exec();
}
const addUser = function (user,cb) {
     User.create(user,cb);
}
module.exports = {
    User: User,
    findByUsername: findByUsername,
    addUser: addUser

}
