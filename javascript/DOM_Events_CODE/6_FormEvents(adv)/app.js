// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('#tweets');
// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault();
// 
//     // const usernameInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value)
//     usernameInput.value = '';
//     tweetInput.value = '';
// });
// 
// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`)
//     tweetsContainer.append(newTweet);
// }




document.addEventListener('DOMContentLoaded', function() {

    const twtForm = document.querySelector('#tweetForm');
    const tweetsContainer = document.querySelector('#tweets');

    twtForm.addEventListener('submit', function(e) {

        e.preventDefault();

        const usernameInput = twtForm.elements.username;
        const twtInput = twtForm.elements.tweet;
        addtwt(usernameInput.value, twtInput.value);
        usernameInput.value = '';
        twtInput.value = '';

    }); 

    const addtwt = (username, tweet) => {
        const newTwt = document.createElement('li');
        const bTag = document.createElement('b');    
        const spanTag = document.createElement('span');
        bTag.append(username);
        newTwt.append(bTag);
        spanTag.append(` - ${tweet}`);
        newTwt.append(spanTag);
        tweetsContainer.append(newTwt);
    };

});