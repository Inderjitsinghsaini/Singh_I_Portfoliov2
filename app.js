var express = require('express');
var app = express();

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
    const output = `
    <h1>You have a new message from your website!</h1>
    <h3>Contact details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Message: ${req.body.message}</li>
    </ul>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gleb.portfolio@gmail.com',
            pass: 'password-here'
        }
    });

    let mailOptions = {
        from: '"Portfolio website" <connect@gleb-zavizenov.com>',
        to: "gleb.zavizenov@gmail.com",
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
