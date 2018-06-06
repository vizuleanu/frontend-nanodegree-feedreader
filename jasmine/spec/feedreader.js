/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* The ‘it’ function tests allFeeds URLs to be defined and longer than 0 characters. */
        it('urls are defined', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });

        /* The ‘it’ function tests allFeeds names to be defined and longer than 0 characters. */
        it('names are defined', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    /* Test suite named "The menu" */
    describe('The Menu', function () {

        /* Test that ensures the menu element is hidden by default. */
        it('hides the menu by default', () => {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Ensures the menu changes visibility when the menu icon is clicked */
        it('Toggle menu display when clicked', function () {
            $('.menu-icon-link').trigger('click');
                    expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.menu-icon-link').trigger('click');
                    expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    // Test suite named "Initial Entries"
    describe('Initial Entries', function () {
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container. 
         */

        // Async "done" function
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('feed has at least one entry', function (done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    // Test suite named "New Feed Selection".
    describe('New Feed Selection', function () {
        /* Test that ensures that the content changes when a new feed is loaded
         * by the loadFeed function. 
         */
        let oldFeed,
            newFeed;
      
        beforeEach(function(done) {
            loadFeed(0, function() {
                // feed 0 done loading
                oldFeed = document.querySelector('.feed').innerHTML;
                loadFeed(1, function(){
                // feed 1 done loading
                newFeed = document.querySelector('.feed').innerHTML;
                // all variables initialized, can begin tests
                done();
            });
        });
    });
      
        /* Check if feeds have been added to the feedList. 
         * To see if the two entries are not equal.
         */
        it('loads new added feeds', function (done) {
            expect(oldFeed).not.toEqual(newFeed);
            done();
        });
      });
} ());
