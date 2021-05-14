const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const SMTPTransport = require('nodemailer/lib/smtp-transport');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/',()=>{
    resizeBy.send('welcome to my form')
})

app.post('/api/form',(req,res)=>{

    let data =req.body
    let smtTransport = nodemailer.createTransport({
        service:'Gmail',
        port:465,
        auth:{
            user:'portfolio.swathy@gmail.com',
            pass:'portfolio567'
        }
    });
    let mailOptions={
        from:data.email,
        to:'portfolio.swathy@gmail.com',
        subject:`Message from ${data.name}`,
        html:`
        <h3>Informations</h3>
        <ul>
        <li>Name: ${data.name}<li>
        <li>Lastname: ${data.lastname}<li>
        <li>Email: ${data.email}<li>
        <ul>
        <h3>Message</h3>
        <p>${data.message}</p>
        
        `
    };
    smtpTransport.sendMail(mailOptions,(error,response)=>{
        if(error){
            res.send(error)
        }
        else{
            res.send('Sucess')
        }
    })
    smtpTransport.close();

})