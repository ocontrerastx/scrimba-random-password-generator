# Scrimba > Random Password Generator

This project involved creating a random password generator based on the design provided in the following Figma file:

[Figma Design](https://www.figma.com/design/NEj9JDycMjF3XKXq7swoc9/Random-Password-Generator--New-version-?node-id=0-1&t=ciFEu6bQGPLUXq83-1)

The primary goal was to implement the visual design and interactive functionality using core web development technologies. This project served as a practical exercise in applying the following concepts:

**Key Concepts Applied:**

* **JavaScript Fundamentals (Arrays, Loops):** Core JavaScript concepts were essential. An array (`characters`) served as the pool of available characters. `for` loops were used iteratively to select random characters from this array and construct passwords of a defined length (15 characters). Nested `for` loops were implemented to efficiently generate two distinct passwords within a single user action.
* **DOM Manipulation:** JavaScript was used to interact with the HTML structure (the Document Object Model). This included retrieving the generated passwords and displaying them in the designated output fields on the webpage upon user request (e.g., button click).
* **Array Data Structures for Management:** Beyond the source character array, another array was utilized as a practical way to temporarily store the two generated passwords before they were rendered to the screen, simplifying the process of handling multiple outputs.
* **Web APIs (`navigator.clipboard`) & Asynchronous JavaScript (Stretch Goal):** To implement the "copy on click" feature, the browser's `navigator.clipboard.writeText()` Web API was used. This involved understanding and utilizing asynchronous JavaScript, specifically the Promise-based syntax (`async/await`), to interact with the system clipboard effectively and provide user feedback.
* **HTML/CSS for Structure and Styling:** Foundational HTML was used to structure the page elements (buttons, display areas), and CSS was applied to style the application according to the Figma design specifications, ensuring a clean user interface.

**Learning Journey Highlight:**

A notable part of this project was tackling the requirement to generate two distinct random passwords simultaneously. While generating a single password using a `for` loop was straightforward based on course concepts, generating the second required nesting loops. An initial challenge arose when using the same counter variable (`i`) for both the inner and outer loops, which produced unexpected results. Debugging this led to a clearer understanding of variable scope and the importance of distinct counters in nested iterations. Researching efficient ways to handle and pass the two generated passwords led to the decision to store them temporarily in an array before updating the DOM. Implementing the copy-on-click functionality also provided valuable practical experience with modern Web APIs and asynchronous operations.