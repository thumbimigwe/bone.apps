Meteor.methods({
    submitPost: function(post) {

        var additionalParams = {
            author: 'Author',
            createdAt: new Date()
        }

        ._extended(post, additionalParams);
        post._id = post.insert(Post);

        return post;
    }
});
