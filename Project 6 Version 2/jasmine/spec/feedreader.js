/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         THE PAGE RAISED AN ERROR
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         /* We call the global function it that takes a string and
        a function just like describe. 
        */
          it('URLs are defined', function() {
            /* The loop below loops thru each feed in allFeeds onject to check if
            the URL is defined and is not empty.
            */
            allFeeds.forEach(function(feed){
              expect(feed.url).toBeDefined();
              expect(feed.url.length).not.toBe(0);
            });
          });

        /* We call the global function it that takes a string and
        a function just like describe. 
        */
         it('Names are defined', function() {
            /* The loop below loops thru each feed in allFeeds onject to check if
            the name is defined and is not empty.
            */
            allFeeds.forEach(function(feed){
              expect(feed.name).toBeDefined();
              expect(feed.name.length).not.toBe(0);
            });
          });
    });


   
    /* The test suite begins with a call to the global Jasmine function
    * describe then we pass in two parameters - the string 'The Menu' which is
    * the name of the suite and then the function
    */
    describe('The Menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         
         // The class menu-hidden is applied to the body. 
         it('The menu is hidden by default', function() {
               expect($('body').hasClass('menu-hidden')).toBe(true);
         });

        /* This spec checks if the body has the class 'menu-hidden' when icon with the class 
         * .menu-icon-link is clicked and if id class disappears one the icon is clicked again.
         */
        it('The menu changes visibility when icon is clicked', function() {
            $(".menu-icon-link").trigger("click");
                expect($('body').attr("class")).not.toBe("menu-hidden");
            $(".menu-icon-link").trigger("click");
                expect($('body').attr("class")).toBe("menu-hidden");
          });

    });

    /* The test suite begins with a call to the global Jasmine function
    * describe then we pass in two parameters - the string 'Initialize Entries' which is
    * the name of the suite and then the function
    */
    describe('Initial Entries', function() {

        /* We called the beforeEach global Jasmine function
        *  before the calling the spec
        */
        beforeEach(function(done) {
            // grabs the text from h2 and stores it to variable called title
            title = $('h2').text();
            // logs the title
            console.log(title);
            loadFeed(1, done);
        });
 
        it('The content actually changes', function(done) {
            newEntry = $('h2').text();
            console.log(newEntry);
            // checks is neweEntry is defined
            expect(newEntry).toBeDefined();
            // compares newEntry to title
            expect(newEntry).not.toBe(title);
            done();
        });

        afterEach(function(done) {
            loadFeed(0, done);
        });

    });

}());


















