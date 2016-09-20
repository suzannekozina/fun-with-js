// idea from https://github.com/udacity/ud989-cat-clicker-premium-vanilla/blob/master/js/app.js and Udacity's JavaScript Design Patterns course.
// Sorry this js file was a little to complex to embed into an html file. But I just wanted to add this to this repository to help remind me of what a simple js MVC looks like.
/* ======= Model ======= */

var model = {
    currentCat: null,
    cats: [
        {
            clickCount : 0,
            name : 'Pinky',
            imgSrc : 'https://giphy.com/gifs/cat-version-chatting-vhsNmFjuN4WDS',
            imgAttribution : '<iframe src="//giphy.com/embed/vhsNmFjuN4WDS" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-version-chatting-vhsNmFjuN4WDS">via GIPHY</a></p>'
        },
        {
            clickCount : 0,
            name : 'Serious Sam',
            imgSrc : '<iframe src="//giphy.com/embed/jZxeUsLnXYdO0" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-funny-serious-jZxeUsLnXYdO0">via GIPHY</a></p>',
            imgAttribution : 'tumblr.com'
        },
        {
            clickCount : 0,
            name : 'Ravie',
            imgSrc : '<iframe src="//giphy.com/embed/on8rFkuhfbbZm" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-colors-serious-on8rFkuhfbbZm">via GIPHY</a></p>',
            imgAttribution : 'http://iheartcatgifs.tumblr.com/post/1424598981/romanticpiano-remember-my-cat-gif'
        },
        {
            clickCount : 0,
            name : '',
            imgSrc : '',
            imgAttribution : ''
        },
        {
            clickCount : 0,
            name : '',
            imgSrc : '',
            imgAttribution : ''
        }
    ]
};


/* ======= Controller ======= */

var controller = {

    init: function() {
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    }
};


/* ======= View ======= */

var catView = {

    init: function() {
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function(){
            controller.incrementCounter();
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current cat
        var currentCat = controller.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

var catListView = {

    init: function() {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('cat-list');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        var cat, elem, i;
        // get the cats we'll be rendering from the controller
        var cats = controller.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    controller.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

// make it go!
controller.init();
