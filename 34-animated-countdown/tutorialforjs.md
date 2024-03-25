Roadmap To Rewrite The JavaScript Yourself:

1. **Select elements:**

   - Get a collection of all spans within the "nums" class using `querySelectorAll`.
   - Select individual elements with classes "counter", "final", and an ID of "replay" using `querySelector`.

2. **Initialize animation:**

   - Call the `runAnimation` function to start things off.

3. **Define `runAnimation` function:**

   - Loop through each "num" element using a `forEach` loop.
     - Get the index of the current element (`idx`).
     - Calculate the index of the second-to-last element (`nextToLast`).
     - Add an event listener to each "num" element for the "animationend" event.
       - If the animation that just ended was "goIn" and it's not the last element:
         - Remove the "in" class from the current element.
         - Add the "out" class to the current element.
       - Else if the animation was "goOut" and the element has a next sibling:
         - Add the "in" class to the next sibling element.
       - Else (meaning the animation on the last element has ended):
         - Hide the "counter" element.
         - Show the "finalMessage" element.

4. **Define `resetDOM` function:**

   - Remove any "hide" class from the "counter" element.
   - Remove any "show" class from the "finalMessage" element.
   - Clear all classes from each "num" element using a `forEach` loop.
   - Add the "in" class to the first "num" element.

5. **Handle replay button:**
   - Add an event listener to the "replay" element for the "click" event.
     - When clicked, call the `resetDOM` function to reset elements.
     - Rerun the animation by calling `runAnimation`.
