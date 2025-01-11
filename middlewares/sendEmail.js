require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const OTP= require('../models/MongoOtp.js')


sgMail.setApiKey('');




exports.sendForgetPassOtp= async (email,otp)=>{
    try{
        const sendOTP = async (to, otp) => {
            const msg = {
            to: to,
            from: 'info.dakshifoundation@gmail.com',
            subject: 'Your OTP Code for reseting Password. Please do not share this OTP with anyone',
            text: `Your OTP is: ${otp}`,
            }
         
            try {
                await sgMail.send(msg);
                console.log('OTP sent successfully');
                const newotp= new OTP({email,otp})
                const result=await newotp.save();
        
            } catch (error) {
                console.error('Error sending OTP:', error);
            }
         }
         sendOTP(email, otp);    
         
    }catch(err){
        console.log(err)
    }
}
