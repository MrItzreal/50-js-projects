Roadmap To Rewrite The JavaScript Yourself:

**1. Access HTML elements:**

- Get a reference to the element where you'll display results (`result`)
- Get a reference to the filter input field (`filter`)

**2. Prepare a storage array:**

- Create an empty array named `listItems` to hold the fetched data

**3. Fetch initial data:**

- Call the `getData()` function to fetch data and display it

**4. Set up filtering:**

- Add an event listener to the filter input field
- When the user types, call the `filterData()` function with the search term

**5. Fetch data (inside `getData()` function):**

- Make an asynchronous request to fetch data from the API
- Convert the response to JSON format
- Clear the previous content of the `result` element

**6. Process fetched data:**

- Loop through each user in the fetched results
  - Create a new list item element (`li`)
  - Add the user's information to the `li`'s content (image, name, location, email)
  - Push the created `li` element to the `listItems` array
  - Append the `li` element to the `result` element to display it

**7. Filter data (inside `filterData()` function):**

- Loop through each list item in the `listItems` array
  - If the item's text matches the search term (case-insensitively):
    - Remove the "hide" class from the list item (to show it)
  - Else:
    - Add the "hide" class to the list item (to hide it)
