** first of all updating the HTML file to have 4 sections instead of four 

** as per the js file I started by populating the nav bar by the new elements 
** at first i used the href to suddenly trasition to the desired section but the changed that to creating an imaginary id for every created 'a' element to add the eventlistener to it as i didn't know how to do that with the string-building way of populating the nva bar 


** after that i created the helper function that checks if an element is in view or not to use it later in the "doAll" function that remove the active status and adds it to the inview element and highlight it 

// the highlighting thing isn't working properly, i didn't know how to fix it 

** after that the scrolling event calls the function and so highlights the inview elements and de-highlights the other ones

