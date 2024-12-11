// ============= getElementById() =============

const banner = document.getElementById('banner')
banner.src = "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"

// ============= getElementsByTagName() =============

console.log("getElementsByTagName('img')");
const allImages = document.getElementsByTagName('img');
for (let img of allImages) {
    console.log(img.src);
}
// This will print all the image links in the console

// ============= getElementsByClassName() ================

console.log("getElementsByClassName('square')");
const bottomImages = document.getElementsByClassName('square');
for (let img of bottomImages) {
    console.log(img.src);
}
// Same as prev
// Both of these return an 'HTML Collection' that looks like an array
// Each 'Element' of this array is an object and here the 'src' is the 
// attribute of each image object 


// ========= querySelector() and querySelectorAll() ===========

const first_sq_image = document.querySelector('.square');
// this will select the first image with the 'square' class 
const last_sq_image = document.querySelector('.square:nth-of-type(4)');
// can also select with some complex css 
const anchor_java = document.querySelector('a[title="Java"]');
// selects an anchor tag with the "Java" title attribute

console.log("querySelectorAll('p a')");
const nested_anchors = document.querySelectorAll('p a');
// selects all anchor tags inside a paragraph
for (let link of nested_anchors) {
    console.log(link.href);
}
// prints out all hrefs of the anchors




// ###################### PROPERTIES AND METHODS ######################


// ========= .innerText, .innerHTML, .textContent ==========

const first_para = document.querySelector('p').innerText;
// selects the text inside the p tags
// .innerText is sensitive to some elements for example if a nested tage has 
// it's display set to 'none' it won't appear in innerText but it will in 
// .textContent
// .innerHtml gives all the html content inside the tags 
document.querySelector('h1').innerHTML = "<i>Silkie Chickens</i>";

// =========== getAttributes() and setAttributes() =============

console.log("querySelector('a')");
const firstLink = document.querySelector('a');
console.log('.href'); // gives the href from the js object
console.log(firstLink.href);
console.log("getAttribute('href')"); // gives href directly from the html
console.log(firstLink.getAttribute('href'));
firstLink.setAttribute('href', 'http://www.google.com');
// here href="http://www.google.com" will be set for the first anchor tag that we selected named 'firstLink'

// ================ .style ====================

const allLinks = document.querySelectorAll('a');
for (let link of allLinks) {
    link.style.color = "magenta";
}
// IMPORTANT!!!!!!!!!!!!!!!
// .style can only access the inline html styles and not the external css 
// use window.getComputedStyle('a') to get all the styles after the page is done loading

const h2 = document.querySelector('h2');
h2.classList.add('purple');
h2.classList.add('border');
h2.classList.remove('border');
h2.classList.contains('purple'); // returns true or false depending on if class present or not
h2.classList.toggle('purple');
h2.classList.toggle('purple'); // toggles the class (add/removes);


// ============ .parentElement, .children, .next and .previousSibling ============

// document.querySelector('b').parentElement --> will give us the parent of the first bold 
// which is the first paragraph, and .children will give an html collection of all
// the tags that are nested inside in the first para i.e the bolds and anchors

// .nextSibling and .previousSibling will give us text nodes instead of the sibling
// element as there is a return character text node after each element

// use .nextElementSibling will actually give us the next actual element



// ========= creating, removing and inserting elements =================

const newImg = document.createElement('img');
newImg.src = "https://images.unsplash.com/photo-1556566483-21269497b7d9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
document.body.appendChild(newImg);
newImg.classList.add('square');
// here we created a new image element and appended it to body 
// .append and .prepend is a newer way to do this
const firstParagraph = document.querySelector('p');
firstParagraph.append("I am new appended text. ", "Also me.");
// here we directly appended text instead of creating a new element
// we can append multiple elements using this at once

const sub_heading = document.createElement('h2');
sub_heading.append('Are Adorable!');
const main_heading = document.querySelector('h1');
main_heading.insertAdjacentElement('afterend', sub_heading);
// using this we can insert an element adjacent to an element
// beforebegin, afterbegin, beforeend, afterend are available parameters
// another one is .after() and .before() 

// first_sq_image.remove();
// first_sq_image.parentElement.removeChild(first_sq_image);
// both remove the first square image. 
// .remove() is used more often 