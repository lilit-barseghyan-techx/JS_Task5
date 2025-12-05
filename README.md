Part A: API and Async Logic
In main.js, fetch user data from the following API with a delay:

> GET https://reqres.in/api/users?delay=1
> Header: x-api-key: reqres-free-v1



Part B: Page Interaction
Build a basic page in index.html.

The page should:

    Include two buttons:
    “Fetch with Header” – for the success case
    “Fetch without Header” – to simulate a failed request

When either button is clicked:

    Immediately show “Loading...” in the UI
    Log to the console: Fetching users...
    Send a fetch request to the API
    The first button must include the x-api-key: reqres-free-v1 header
    The second button must omit the header

If the request succeeds:

    Wait 1 extra second (using await, setTimeout and a Promise)
    Log the response data to the console
    Combine first_name and last_name using .map() in a new array
    Show the full names in the UI (one per line)
    Log to the console: Done.

If the request fails, or gives an invalid response, or there are no users:

    Show “No users” in the UI


Clear the “Loading...” message after processing is complete.


NOTE:

    Use fetch and Promises or async/await
    Use setTimeout to simulate delay
    Do not use innerHTML
    No need to style the page