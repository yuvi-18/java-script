# Events 
In JavaScript, events are actions or occurrences that happen in the browser, which can be detected and responded to by your code. These events can be triggered by user interactions, such as clicks, key presses, mouse movements, or changes in form elements. They can also be triggered by the browser itself, such as when a page loads or an image finishes loading.

In simple terms an events is a signal that something has happened.

Some common events in js are listed below 

## Mouse Events 
Mouse events are triggered by user interactions with the mouse:

### Click

```js 
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
    alert('Button clicked!');
});
```

### Onclick 

```js
const button = document.getElementById('myButton');

button.onclick = function() {
    alert('Button clicked!');
};
```

AddEventListener (using click) can be used to attach multiple event handlers to the same event, while onclick can only hold one function. If you assign a new function to onclick, it will overwrite the previous one.

! Prefer click over onclick.

### dblclick
Fired when a mouse button is clicked twice in quick succession.

```js
document.getElementById('dblClickArea').addEventListener('dblclick', function() {
alert('Area double-clicked!');
});
```

### Mouse Over
Triggered when the mouse pointer enters an element.

```js
document.getElementById('myElement').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightblue';
});
```

### Mouse Out 
Triggered when the mouse pointer leaves an element.

```js
document.getElementById('myElement').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});
```

### Mouse move 
Triggered when the mouse pointer moves within an element.

```js
document.getElementById('myElement').addEventListener('mousemove', function(event) {
    console.log(`Mouse position: ${event.clientX}, ${event.clientY}`);
});
```

### Mouse Down 
This event occurs when a mouse button (left, middle, or right) is pressed down. It can be used to initiate actions like starting to drag an element or performing a selection.

```js
myElement.addEventListener('mousedown', function() {
    this.style.backgroundColor = 'lightcoral'; // Change background color on mousedown
});
```

### Mouse up
Triggered when a mouse button is released.

```js
myElement.addEventListener('mouseup', function() {
    this.style.backgroundColor = 'gray'; // Change back to original color on mouseup
});
```

### Comtext Menu 
Triggered when the right mouse button is clicked, often to show a context menu.

```js 
document.body.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevent the default context menu from appearing
    alert('Custom context menu!'); // Display a custom message
});
```