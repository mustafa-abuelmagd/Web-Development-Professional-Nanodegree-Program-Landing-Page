/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */



const navBarElements = document.querySelectorAll('section');
const navigation = document.getElementById('navbar__list');


//populating the nav bar with the elements

function createNav() {
  const fragmant = document.createDocumentFragment();

  //create li element
  //create a element
  //add id to the a element to use it later withscroll event
  //append a element to li lement then li to fragment then fragment to "navigation"

  navBarElements.forEach(e => {
    const liEle = document.createElement('li');
    const aEle = document.createElement('a');


    //creating a new attribute class

    const clsAtt = document.createAttribute('class');
    const clsAttVal = `menu__link`;
    clsAtt.value = clsAttVal;

    //adding "class"
    aEle.setAttributeNode(clsAtt);

    //creating a new attribute id to use later with the scroll

    const ID = document.createAttribute('id');
    const IDAttVal = `S${e.getAttribute("id")}`;
    ID.value = IDAttVal;

    //adding ID
    aEle.setAttributeNode(ID);

    //creating a new attribute href to use later with the scroll

    const HREF = document.createAttribute('href');
    const HREFAttVal = `#${e.getAttribute("id")}`;
    HREF.value = HREFAttVal;

    //adding HREF
    aEle.setAttributeNode(HREF);


    //putting text in the a element 
    aEle.innerHTML = e.getAttribute("data-nav");

    //stopping the action of taking us straight to the element instead of getting there smoothly 
    aEle.addEventListener("click", function (e) {
      e.preventDefault();
  });



    liEle.appendChild(aEle);
    fragmant.appendChild(liEle);

  });
  navigation.appendChild(fragmant);


};

createNav();

//the function to scroll


function scroll() {
  let i = 1;

  //looping through each element of the sections
  //P.S it's not very convenient to create it this way but that i was able to come up with to work with the previously created elements in populating the navbar the way it was created

  navBarElements.forEach(el => {

    //creating new id to use later to quesrySelect using it to add the evenListen to it
    let Id = '';
    //forming the id by combining 
    Id = `#Ssection${i}`;

    //locating the actual element we want to add crolling event to
    aEl = document.querySelector(Id);

    aEl.addEventListener("click", function () {
      el.scrollIntoView({ behavior: "smooth" });
    });
    //increasing the iterrator to update the id for the next element in the loop 
    i++;

  });
};

scroll();



//checking if an element is in the view or not by checking if %50 of its size is in the view or not

function inView(element) {
  const rect = element.getBoundingClientRect();
  const ofsset = -1 * (element.offsetHeight / 2);
  return (

    //first case: check if %50 of the upper element is in the view
    (rect.top >= ofsset &&
      rect.bottom <= window.screen.height)
    // the bottom %50
    || (rect.top <= -1 * (ofsset) &&
      rect.bottom >= window.screen.height)

  );
}


// the function that ties that all together 

function doAll() {

  //looping through elements to check which is inview 
  navBarElements.forEach(el => {

    //if inview, set to active and highlight
    if (inView(el)) {

      el.classList.add("your-active-class");
      el.style.cssText = "background-color: green ;";
    }

    //else, naah!
    if (!inView(el)) {


      el.classList.remove("your-active-class");
      el.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";

    };


  });

};

//the event of scrolling calls the function that ties it all
window.addEventListener("scroll", doAll);




