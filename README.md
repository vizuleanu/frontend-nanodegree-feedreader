# Front-end Nanodegree Project - Feed Reader Testing

We are given a web-based application that reads RSS feeds.
Jasmine is included.

# How to run the app

To start the app, open index.html in your browser. 

The tests are written in feedreader.js file. 
Jasmine test results appears at the bottom of the index.html page.

Tests that are green pass and red ones fail.

## Steps that were necessary to complete the project and make all tests green:

1. Test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. Test that ensures the menu element is hidden by default.
4. Test that ensures the menu changes visibility when the menu icon is clicked.
5. Test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
6. Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.