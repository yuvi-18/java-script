# Hidden property
hidden property when given to an element hides it from the user.

```js
element.hidden = true;
```

# element has attribute
# element get atrribute
# element set atrribute
# element remove atrribute
# element atrributes

# Data- attribute
In HTML, a "data attribute" is a custom attribute that allows you to store extra information on an element without using additional properties or classes.Data attributes are prefixed with data-, followed by a name of your choice.You can access these attributes in JavaScript using the dataset property.

```js

<div data-user-id="123" data-role="admin">User Info</div>

const element = document.querySelector('div');
console.log(element.dataset.userId); // "123"
console.log(element.dataset.role); // "admin"
```

# Insertion methods

## Append
adding an element to the end of a parent element
Yes, the append() method does indeed remove the element from its current parent and adds it to the new parent.

```js
 let div = document.createElement("div");
    div.innerHTML = "I have been inserted <b>by harry</b>"
    div.setAttribute("class", "created");
    document.querySelector(".container").append(div);
```

## Prepend 
refers to adding an element to the beginning of a parent element

```js
const parentElement = document.getElementById('parent');
const newElement = document.createElement('div');
newElement.textContent = 'I am the first child!';

// Prepend the new element to the parent element
parentElement.prepend(newElement);
```

## before
The before() method inserts a specified element or text before a target element.

```js
const targetElement = document.getElementById('target');
const newElement = document.createElement('div');
newElement.textContent = 'I am before the target!';

// Insert the new element before the target element
targetElement.before(newElement);
```

## after
The after() method inserts a specified element or text after a target element.

```js
const targetElement = document.getElementById('target');
const newElement = document.createElement('div');
newElement.textContent = 'I am after the target!';

// Insert the new element after the target element
targetElement.after(newElement);
```

## replace with
used to replace a specified element with new content in the DOM.

```js
// Select the element to be replaced
const oldElement = document.getElementById('oldElement');

// Create a new element
const newElement = document.createElement('div');
newElement.textContent = 'I replaced the old element!';

// Replace the old element with the new element
oldElement.replaceWith(newElement);
```

## Append child
Adds a single child node to the end of the list of children of a specified parent node.

```js
const parent = document.getElementById('container');
const child = document.createElement('p');
child.textContent = 'This is a child paragraph.';
parent.appendChild(child);
```

## insertAdjacentHTML/text
Parses the specified text as HTML and inserts the resulting nodes at a specified position relative to an existing element.


```js
element.insertAdjacentHTML(position, text);


const parent = document.getElementById('container');
parent.insertAdjacentHTML('beforeend', '<p>Inserted using insertAdjacentHTML.</p>');
```

'beforebegin': Inserts the HTML before the element itself.
'afterbegin': Inserts the HTML inside the element, before its first child.
'beforeend': Inserts the HTML inside the element, after its last child.
'afterend': Inserts the HTML after the element itself.

## innerAdjacentElement
Inserts an element at a specified position relative to an existing element.

```js
const parent = document.getElementById('container');
const newElement = document.createElement('p');
newElement.textContent = 'Inserted element using insertAdjacentElement.';
parent.insertAdjacentElement('afterend', newElement);
```

## removeChild
Removes a specified child node from a parent node.

```js
const parent = document.getElementById('container');
const childToRemove = parent.firstChild;
parent.removeChild(childToRemove);
```

## remove
used to remove an element from the DOM.

```js
// Select the element to be removed
const elementToRemove = document.getElementById('elementId');

// Remove the selected element from the DOM
elementToRemove.remove();
```

# className
It represents the entire list of class names of an element as a single string.


```js
const element = document.getElementById('myElement');

// Assuming the element initially has classes "class1 class2"
console.log(element.className); // Output: "class1 class2"

// Set a new class name
element.className = 'newClass';

// Now, the previous classes are removed
console.log(element.className); // Output: "newClass"
```

# classList
It provides a more convenient way to access and manipulate the classes of an element as individual items.


```js
const element = document.getElementById('myElement');

// Add a class
element.classList.add('newClass');

// Remove a class
element.classList.remove('oldClass');

// Toggle a class
element.classList.toggle('active');

// Check if it contains a class
if (element.classList.contains('myClass')) {
    console.log('Element has myClass');
}
```

