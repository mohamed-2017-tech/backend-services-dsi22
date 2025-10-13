const moogoose = require('mongoose');
const articleSchema = new moogoose.Schema({
   titer:{
        type: String,
        required:[true, 'please provide titer']
    },
    continue:{
        type:String,
         required:[true, 'please provide continue']
    },
  
    imageUrl:{
        type:String,
       
    }
});

const Article = moogoose.model('Article', articleSchema);
module.exports = Article;
