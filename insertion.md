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

```js
 let div = document.createElement("div");
    div.innerHTML = "I have been inserted <b>by harry</b>"
    div.setAttribute("class", "created");
    document.querySelector(".container").append(div);
```

## Append child
Adds a single child node to the end of the list of children of a specified parent node.

```js
const parent = document.getElementById('container');
const child = document.createElement('p');
child.textContent = 'This is a child paragraph.';
parent.appendChild(child);
```

## insert before 
Description: Inserts a new node before a specified existing child node of a parent node.

```js
const parent = document.getElementById('container');
const newChild = document.createElement('p');
newChild.textContent = 'Inserted before the first child.';
const firstChild = parent.firstChild;
parent.insertBefore(newChild, firstChild);
```

## insertAdjacentHTML
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

## replaceChild
Replaces an existing child node with a new node.


```js
// Select the parent element
const container = document.getElementById('container');

// Create a new paragraph element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is the new paragraph.';

// Select the old paragraph to be replaced
const oldParagraph = document.getElementById('oldParagraph');

// Replace the old paragraph with the new paragraph
container.replaceChild(newParagraph, oldParagraph);
```

## removeChild
Removes a specified child node from a parent node.

```js
const parent = document.getElementById('container');
const childToRemove = parent.firstChild;
parent.removeChild(childToRemove);
```