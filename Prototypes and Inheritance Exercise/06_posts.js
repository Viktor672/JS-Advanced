function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            let resultArr = [];
            resultArr.push(`Post: ${this.title}`);
            resultArr.push(`Content: ${this.content}`);
            return resultArr.join('\n').trim();
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.commentsArr = [];
        }

        addComment(comment) {
            this.commentsArr.push(comment);
        }

        toString() {
            let result = super.toString() + '\n';
            result += `Rating: ${this.likes - this.dislikes}` + '\n';
            if (this.commentsArr.length !== 0) {
            
            result += 'Comments:' + '\n';
            for (const curComment of this.commentsArr) {
                result += ` * ${curComment}` + '\n';
            }
        }
            return result.trim();
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) { 
            super(title, content);
            this.views = Number(views);
        }

        view() {
            this.views += 1;
            return this;
        }

        toString() {
            let result = super.toString() + '\n';
            result += `Views: ${this.views}` + '\n';
            return result.trim();
        }
    }

    let obj = {
        Post,
        SocialMediaPost,
        BlogPost,
    }
    return obj;
}


const classes = solution();

let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post

// Content: Content

// let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

// scm.addComment("Good post");

// scm.addComment("Very good post");

// scm.addComment("Wow!");

// console.log(scm.toString());

let blogObj = new classes.BlogPost('T', 'Y', 2);
blogObj.view();
console.log(blogObj.toString());


// Post: TestTitle

// Content: TestContent

// Rating: -5

// Comments:

// * Good post

// * Very good post

// * Wow