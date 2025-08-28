# assignment-5

# 1 Difference between selectors
1. getElementById() selects a single unique elements by its id
2. getElementsByClassName() selects by class name of elements, it can select as many as you want with the same class name
3. querySelector() selects first element with the css class selector
4. querySelectorAll() selcts all elements with the same css class selector

# 2 Creating new element and inserting it into DOM
const p = document.createElement('p'); // creates the p element

document.getElementById('p-container').appendChild(p); inserts newly created p element to the div with id='p-container' in the DOM 

# 3 Event bubbling 
event bubbling is when an element is clicked or an event occurs it triggers its parents grandparents and so on till the root

# 4 Event Delegation
event delegation is to set event handler to the parent element to control its child elements

# 5 Difference between preventDefault() and stopPropagation()
1. preventDefault() is used to stop default behaviour of and element like submit button in a form element
2. stopPropagation() is used to stop bubbling at certain point while an event is occur on elements
