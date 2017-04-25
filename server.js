var express = require('express');
var app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => { 
    console.log(`Server is up on port ${port}`); 
});
app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    var teams = [
        { name: 'Шахтер', points:  63},
        { name: 'Динамо', points:  52},
        { name: 'Заря', points:  41},
        { name: 'Олимпик Д', points:  35},
        { name: 'Александрия', points:  34},
        { name: 'Черноморец', points:  34},
        { name: 'Ворскла', points:  27},
        { name: 'Сталь К', points:  27},
        { name: 'Зирка К', points:  26},
        { name: 'Карпаты', points:  17},
        { name: 'Днепр', points:  11},
        { name: 'Волынь', points:  10}
    ];
    res.render('index', {
        teams: teams
    });
});