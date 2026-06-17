# Browser Rendering Pipeline and Event Handling

## Parsing
When the browser receives an HTML file, it's not treated as actual HTML right away. It's just received as a long string containing all the HTML content. The browser then starts parsing this string to understand the structure of the webpage.

## Tokenization
During tokenization, the browser breaks that HTML string into individual tokens like `<`, `html`, `>`, `</html>`, and many others. These tokens help the browser understand the document structure and are later used to build the DOM Tree.

## DOM Tree
The DOM (Document Object Model) Tree is a document-like representation of the HTML structure. The hierarchy starts from the `window` object, then the `document` object, and extends deeper into all the elements on the page.

The DOM Tree consists of nodes, and each HTML element is stored as an object — because JS doesn't understand HTML directly, but it does understand objects. So the DOM acts as a bridge that converts HTML into the Document Object Model, allowing JS to access and manipulate HTML elements easily.

## CSSOM Tree
Similar to the DOM Tree, CSS is also parsed and converted into its own object model called the CSSOM (CSS Object Model) Tree. It holds all the styling information and rules applied to the webpage.

## Render Tree
When the DOM Tree and CSSOM Tree are combined, the Render Tree is created. It goes through three major stages — Layout, Reflow, and Display (Painting).

One important distinction here:
- `display: none` → the element stays in the DOM Tree but is **not included** in the Render Tree.
- `visibility: hidden` → the element is **present** in the Render Tree, just not visible on screen.

## Event Bubbling
When an event is triggered, by default it travels from the child element up to its parent elements. That's called Event Bubbling.

```
Child → Parent → Grandparent
```

## Event Capturing
Event Capturing is disabled by default. You can enable it by passing `true` as the third argument to `addEventListener()`. When enabled, the event travels from the parent down to the child — the opposite of Bubbling.

```
Grandparent → Parent → Child
```

## Event Delegation
Event Delegation is a technique where instead of attaching separate event listeners to multiple child elements, you attach a single event listener to the parent element. When an event occurs on a child, it bubbles up to the parent where it gets handled. This improves performance, reduces memory usage, and is especially useful when child elements are added dynamically.