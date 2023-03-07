const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

//const errorController = require('./controllers/error');

const app = express();
const rootDir = require('./util/path');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactUs');
const success = require('./routes/success')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(success);

app.use((req,res,next)=>{
    res.status(404).render('404',{
        pageTitle:'page not found!!',
        path: ''
    })
})

//app.use(errorController.get404);


app.listen(3000);
