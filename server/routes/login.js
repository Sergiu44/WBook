const fs = require('fs');
const path = require('path');

const loginRouter = (appInstance) => {
    appInstance.get('/login', (_req, res) => {
        fs.readFile(path.join('/', path.dirname(__dirname), 'mockData', 'profiles.json'), 'utf8', ((err, data) => {
            if (err) {
                console.error(err);
                return res.render('login', {message: 'Profiles are not available', status: 1})
            }
            data = JSON.parse(data);
            res.render('login', { profiles: data, status: 0 });
        }));
    })

    appInstance.post('/login', (req, _res) => {
        const fileData = fs.readFileSync(path.join('/', path.dirname(__dirname), 'mockData', 'profiles.json'));
        const oldProfiles = JSON.parse(fileData);
        oldProfiles.push(req.body);
        const newProfiles = JSON.stringify(oldProfiles);
        fs.writeFileSync(path.join('/', path.dirname(__dirname), 'mockData', 'profiles.json'), newProfiles, err => {
            if(err) {
                console.log(err);
            }
        });
    })
}

module.exports = loginRouter;