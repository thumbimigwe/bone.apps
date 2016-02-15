router.configure({
    //     layoutTemplate: 'mainLaout'
});
router.route('/', {
    name: 'root',
    controller: 'mainPageController'
});

router.route('/new', {
    name: 'newPost',
    controller: 'baseController'
});
