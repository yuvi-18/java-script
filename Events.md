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
