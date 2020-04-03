var express = require('express');
var app = express();
const nodemailer = require('nodemailer');


const port = process.env.PORT || 3030;

// tell express where our static files are (js, images, css etc)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

const server = app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});



app.post('/send', (req,res) => {
   

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'inderjitsingh.sing@gmail.com',
            pass: 'Fanshawecollege'
        }
    });

    let mailOptions = {
        from: '"Portfolio website" <connect@inderjitsingh.com>',
        to: "inderjitsingh.sing@gmail.com",
        subject: "Message from portfolio website",
        html: output 
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error,info) => {
        if(error){
            console.log(error);
        }
    
    })

    });
