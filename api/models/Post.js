const db = require('../initDb');

module.exports = class Post {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.name = data.name;
        this.story = data.story;
    };
    
    // static get all(){ 
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             // console.log(db);
    //             const result = await db.query('SELECT * FROM authors;')
    //             const authors = result.rows.map(a => ({ id: a.id, name: a.name }))
    //             resolve(authors);
    //         } catch (err) {
    //             reject("Error retrieving authors")
    //         }
    //     })
    // };


    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query('SELECT * FROM posts WHERE id = $1;', [ id ]);
                let post = new Post(postData.rows[0]);
                resolve(post);
            } catch (err) {
                reject('Post not found');
            };
        });
    };

    static create({ title, name, story){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`INSERT INTO posts 
                                                (title, name, story) 
                                                VALUES ($1, $2, $3);`, [ title, name, story ]);
                let post = new Post(postData.rows[0]);
                resolve (post);
            } catch (err) {
                reject('Post could not be created');
            };
        });
    };

};