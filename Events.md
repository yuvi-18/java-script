# Events 
In JavaScript, events are actions or occurrences that happen in the browser, which can be detected and responded to by your code. These events can be triggered by user interactions, such as clicks, key presses, mouse movements, or changes in form elements. They can also be triggered by the browser itself, such as when a page loads or an image finishes loading.

In simple terms an events is a signal that something has happened.

Some common events in js are listed below 

# Mouse Events 
Mouse events are triggered by user interactions with the mouse:

## Click

```js 
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
    alert('Button clicked!');
});
```

## Onclick 

```js
const button = document.getElementById('myButton');

button.onclick = function() {
    alert('Button clicked!');
};
```

AddEventListener (using click) can be used to attach multiple event handlers to the same event, while onclick can only hold one function. If you assign a new function to onclick, it will overwrite the previous one.

! Prefer click over onclick.

## dblclick
Fired when a mouse button is clicked twice in quick succession.

```js
document.getElementById('dblClickArea').addEventListener('dblclick', function() {
alert('Area double-clicked!');
});
```

## Mouse Over
Triggered when the mouse pointer enters an element.

```js
document.getElementById('myElement').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightblue';
});
```

## Mouse Out 
Triggered when the mouse pointer leaves an element.

```js
document.getElementById('myElement').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});
```

## Mouse move 
Triggered when the mouse pointer moves within an element.

```js
document.getElementById('myElement').addEventListener('mousemove', function(event) {
    console.log(`Mouse position: ${event.clientX}, ${event.clientY}`);
});
```

## Mouse Down 
This event occurs when a mouse button (left, middle, or right) is pressed down. It can be used to initiate actions like starting to drag an element or performing a selection.

```js
myElement.addEventListener('mousedown', function() {
    this.style.backgroundColor = 'lightcoral'; // Change background color on mousedown
});
```

## Mouse up
Triggered when a mouse button is released.

```js
myElement.addEventListener('mouseup', function() {
    this.style.backgroundColor = 'gray'; // Change back to original color on mouseup
});
```

## Comtext Menu 
Triggered when the right mouse button is clicked, often to show a context menu.

```js 
document.body.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevent the default context menu from appearing
    alert('Custom context menu!'); // Display a custom message
});
```

# Keyboard Events

## Keydown 
Triggered when a key is pressed down.

```js
document.addEventListener('keydown', function(event) {
    console.log('Key down:', event.key);
});


// another example

colorInp.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.body.style.backgroundColor = colorInp.value;
    }
});
```

## Key up 
Triggered when a key is released.

```js
document.addEventListener('keyup', function(event) {
    console.log('Key up:', event.key);
});
```

## Keypress
(Note: This event is deprecated and not recommended for use in modern applications.) 
It was triggered when a key that produces a character value is pressed down. Instead, use keydown.

# Form Evnets 

## Submit 
Triggered when a form is submitted.

```js
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    console.log('Form submitted');
});
```

## change
This event occurs when the value of an input field changes.

```js
const input = document.getElementById('myInput');
input.addEventListener('change', (event) => {
    console.log('Input changed to:', event.target.value);
});
```

## Focus
This event is triggered when an input field gains focus.

```js
input.addEventListener('focus', () => {
    console.log('Input is focused');
});
```

## Blur
This event occurs when an input field loses focus.

```js
input.addEventListener('blur', () => {
    console.log('Input lost focus');
});
```

## Input 
This event is triggered whenever the value of an input field changes, including when typing.

```js
input.addEventListener('input', (event) => {
    console.log('Current input value:', event.target.value);
});
```

# Window Events 

## Load
Fires when the entire page has fully loaded, including all dependent resources like images and stylesheets.

```js
window.addEventListener('load', () => {
    console.log('Window fully loaded');
});
```

## Resize 
Triggered when the window is resized.

```js
window.addEventListener('resize', () => {
    console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
});
```

## Scroll
Triggered when the document is scrolled.

```js
window.addEventListener('scroll', () => {
    console.log('Window scrolled to:', window.scrollY);
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.body.style.backgroundColor = 'lightblue';
    } else {
        document.body.style.backgroundColor = 'white';
    }
});
```

## Before Unload
Occurs when the user is about to leave the page, allowing you to prompt them with a confirmation dialog.

```js
window.addEventListener('beforeunload', function(event) {
    // Display a confirmation dialog
    event.preventDefault(); // Older browsers might require this
    event.returnValue = ''; // Chrome requires this to show the dialog
});


// detailed Example
        let isFormDirty = false; // Track if the form has unsaved changes

        // Mark the form as dirty on input
        document.getElementById('myForm').addEventListener('input', function() {
            isFormDirty = true;
        });

        // Add the beforeunload event listener
        window.addEventListener('beforeunload', function(event) {
            if (isFormDirty) {
                // This is necessary for some browsers to show the dialog
                event.preventDefault();
                // Most browsers show a generic message, this line may be ignored
                event.returnValue = ''; 
            }
        });

        // Reset the dirty flag on form submission
        document.getElementById('myForm').addEventListener('submit', function() {
            isFormDirty = false; // Reset the flag as the form is submitted
        });
```

## Unload 
Triggered when the window is being unloaded (e.g., when navigating away from the page).

```js
window.addEventListener('unload', () => {
    console.log('Window is unloading');
});
```

## Focus 
Fires when the window gains focus.

```js
window.addEventListener('focus', () => {
    console.log('Window focused');
});
```

## Blur 
Triggered when the window loses focus.

```js
window.addEventListener('blur', () => {
    console.log('Window blurred');
});
```

## Error 
Occurs when an error is encountered while loading a resource or executing a script.

```js
window.addEventListener('error', (event) => {
    console.error('Error occurred:', event.message);
});
```

# Touch Events (For Mobile)

## Touchstart
Triggered when a touch point is placed on the touch surface.

```js
const touchArea = document.getElementById('touchArea');
touchArea.addEventListener('touchstart', (event) => {
    console.log('Touch started:', event.touches);
});
```

## Touch move 
This event occurs when a touch point is moved along the touch surface.

```js 
touchArea.addEventListener('touchmove', (event) => {
    console.log('Touch moved to:', event.touches[0].clientX, event.touches[0].clientY);
    event.preventDefault(); // Prevent scrolling
});
```

## Touch end
This event is triggered when a touch point is removed from the touch surface.

```js
touchArea.addEventListener('touchend', (event) => {
    console.log('Touch ended');
});
```

# Clipboard Events

## Copy
Triggered when the content is copied to the clipboard

```js
document.addEventListener('copy', (event) => {
    console.log('Content copied to clipboard');
    // You can modify the copied text
    event.clipboardData.setData('text/plain', 'Modified text');
    event.preventDefault(); // Prevent the default copy action
});
```

## Cut 
This event is triggered when the user cuts content to the clipboard

```js
document.addEventListener('cut', (event) => {
    console.log('Content cut to clipboard');
    event.preventDefault(); // Prevent the default cut action
});


// detailed example
document.addEventListener('cut', (event) => {
    const selectedText = window.getSelection().toString();
    
    // Example validation: Prevent cutting if the selected text is "forbidden"
    if (selectedText === 'forbidden') {
        event.preventDefault(); // Prevent cut action
        alert("Cutting this text is not allowed.");
    } else {
        console.log('Content cut:', selectedText);
        // You could also manipulate clipboard data here if needed
    }
});
```

## Paste
This event is triggered when the user pastes content from the clipboard

```js
document.addEventListener('paste', (event) => {
    const pastedData = event.clipboardData.getData('text/plain');
    console.log('Pasted content:', pastedData);
    // You can modify the pasted content or prevent the default paste
    event.preventDefault(); // Prevent the default paste action
    // Optionally, insert modified content instead
    document.execCommand('insertText', false, 'Modified pasted text');
});



// paste button in js
const textArea = document.getElementById('textArea');
const pasteButton = document.getElementById('pasteButton');

pasteButton.addEventListener('click', () => {
    // Use the Clipboard API to get the pasted content
    navigator.clipboard.readText()
        .then(text => {
            // Insert the pasted text into the text area
            textArea.value += text; // Append text to existing content
            console.log('Pasted content:', text);
        })
        .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
});

// Optional: You can also listen for paste events directly
textArea.addEventListener('paste', (event) => {
    const pastedData = event.clipboardData.getData('text/plain');
    console.log('Pasted content from paste event:', pastedData);
    // You can modify the pasted content if needed
});
```

# Media Events 

## Play
The play event is triggered when a media element (like <audio> or <video>) starts playing.

```js
const video = document.getElementById('myVideo');
video.addEventListener('play', () => {
    console.log('Media is now playing.');
    // Update UI to reflect the playing state
});
```

## Pause 
The pause event is triggered when the media playback is paused

```js
video.addEventListener('pause', () => {
    console.log('Media is paused.');
    // Update UI to reflect the paused state
});
```

## Ended
The ended event is triggered when the media playback has completed.

```js
video.addEventListener('ended', () => {
    console.log('Media playback has ended.');
    // Update UI, e.g., show a "Video finished" message or restart
});
```
!These can be directly used on video and audio tags.



# Drag Events 

## Drag
Triggered when an element is being dragged.

```js
element.addEventListener('drag', (event) => {
    console.log('Dragging...');
});
```

## Drag Enter
Triggered when the dragged element enters a valid drop target. This event can be used to indicate that a drop is possible.

```js
dropZone.addEventListener('dragenter', (event) => {
    event.preventDefault(); // Prevent default to allow drop
    dropZone.style.border = '2px dashed green'; // Visual cue
});
```

!By default, when a user drags an item over certain elements (like links or other interactive elements), the browser may not allow dropping. Calling preventDefault() on the dragenter event indicates that you want to accept the drop in that element.

## Drag over 
Fired continuously while the dragged element is over a valid drop target.

```js
dropZone.addEventListener('dragover', (event) => {
    event.preventDefault(); // Necessary to allow drop
});
```

!In simple terms:

dragenter: This event fires once when a dragged item first enters a drop zone. It's often used to indicate that the drop zone is ready to accept the item (like changing its color).

dragover: This event fires continuously as the dragged item stays over the drop zone. You use it to control whether dropping is allowed by calling event.preventDefault().

So, dragenter is for the initial entry into the drop zone, while dragover keeps firing as long as the item is over the zone.

## Drag leave 
Triggered when the dragged element leaves a valid drop target. This event can be used to reset the appearance of the drop target.

```js
dropZone.addEventListener('dragleave', () => {
    dropZone.style.border = ''; // Reset visual cue
});
```

## Drag start
Triggered when the user starts dragging an element. This is where you typically set up data to be transferred during the drag operation.It can occur multiple times for example if someone drags something and then stops and drags again the drag start will fire again and it will fire until the event is starting to drag multiple times.


```js
element.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', 'Some data to drag');
});
```


## Drag end
Triggered when the drag operation is complete, regardless of whether it was successful or not. This event is useful for cleaning up after the drag operation.


```js
element.addEventListener('dragend', () => {
    element.style.opacity = ''; // Reset any styles changed during drag
});
```

## Drop
Triggered when the dragged element is dropped on a valid drop target. This event is where you can handle the dropped data.

```js
dropZone.addEventListener('drop', (event) => {
    event.preventDefault(); // Prevent default action (e.g., open as link)
    const data = event.dataTransfer.getData('text/plain');
    console.log('Dropped data:', data);
    // Handle the dropped data (e.g., append it to a list)
});
```


DragOver, DragEnter, DragLeave, Drop are mainly used on the elemnts on which an item is being dragged,for ex:- a sqaure box over which an element is being dragged will change it's color with the help of an event listener.
DragEnd is generaly used to tell us that the dragging has stopped.

example use case of drag and drop:-


```js

const king = document.querySelector('.king'),
              squares = document.querySelectorAll('.square'),
              info = document.querySelector('p');
        
        let beingDragged;

        king.addEventListener('drag', (e)=>{
            beingDragged = e.target;  // specifies what has started to drag.
            info.textContent = `${e.target.classList} is being dragged...`
        })

        king,addEventListener('dragend', (e)=>{
            info.textContent = `${e.target.classList} has been dropped`
        })
        
        squares.forEach(square =>{
            square.addEventListener('dragover', (e)=>{
                e.preventDefault()
            });
            square.addEventListener('drop', (e)=>{
                e.target.append(beingDragged)
            });
        })
 

/*
let beingDragged;   it is acting like the whole object that is being dragged, for example if we are dragging an element of image over something then it is the whole image and we can append it to anywhere by event listeners.


function dragover(e){
    e.preventDefault()   to drop somthing on somehting it is neccassary.
}

The dragover function prevents the default behavior of the browser. By default, the browser does not allow a dragged element to be dropped onto an element, so calling e.preventDefault() makes it possible to drop the element onto the target (the square).

function dragdrop(){
    e.target.append(beingDragged)
}

e.target refers to the element that the dragged element is dropped onto, which is one of the square elements.
*/

```


Find more events: 
https://developer.mozilla.org/en-US/docs/Web/Events


# Event Bubbling 
Event bubbling is a key concept in JavaScript that refers to the way events propagate in the DOM (Document Object Model). When an event occurs on an element, it first runs the event handler on that specific element, and then it "bubbles up" to its parent elements, allowing them to respond to the event as well.

!To stop this we use stop propogation method

```js
const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', () => {
    console.log('Parent clicked!');
});

child.addEventListener('click', (event) => {
    console.log('Child clicked!');
    event.stopPropagation(); // Prevents the parent click event from firing
});
```

# Remove event listener
removeEventListener is a method in JavaScript that allows you to remove an event listener that was previously added to an element using addEventListener. This is useful for preventing memory leaks or unwanted behavior in your application, especially if the event listener is no longer needed.

Same Function Reference: To successfully remove an event listener, the function reference passed to removeEventListener must be the same as the one passed to addEventListener. This means you cannot use an anonymous function for both; you need to define the function separately.

```js
function handleClick() {
  alert('Clicked!');
}

myButton.addEventListener('click', handleClick);
myButton.removeEventListener('click', handleClick);
```


