var thumbs = require('./createThumbnails');



thumbs.thumbs("/users/todd/cohort/week07 03-20-2017/wednesday/makeAModule/images" ,function(err) {
        if (err){
          console.log("something went wrong");
          console.log(err.message);
          return;
        }
        console.log("it worked");
      }

);
