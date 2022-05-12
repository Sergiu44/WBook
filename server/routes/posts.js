const path = require("path");
const fs = require('fs');

const postsRouter = (appInstance) => {
    appInstance.get('/posts', (req, res) => {
        const category = req.query.category;
        fs.readFile(path.join('/', path.dirname(__dirname), 'mockData', 'posts.json'), 'utf8', ((err, data) => {
            if (err) {
                console.error(err);
                return res.render('postsPage', {message: 'Posts are not available', status: 1})
            }
            data = JSON.parse(data);
            if(category) {
                data = data.filter(post => {
                    return post['category'] === category
                });
            }
            console.log(data);
            return res.render('postsPage', {posts: data, status: 0});
        }));
    })

    appInstance.get('/posts/create', (_req, res) => {
        return res.render('postForm', { message: "Hello" });
    });

    appInstance.post('/posts', (req, _res) => {
        const fileData = fs.readFileSync(path.join('/', path.dirname(__dirname), 'mockData', 'posts.json'));
        const oldPosts = JSON.parse(fileData);
        console.log(req.body);
        oldPosts.push(req.body);
        const newProfiles = JSON.stringify(oldPosts);
        fs.writeFileSync(path.join('/', path.dirname(__dirname), 'mockData', 'posts.json'), newProfiles, err => {
            if(err) {
                console.log(err);
            }
        });
    })
}

module.exports = postsRouter;