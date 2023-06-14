## Users API

### `GET /users`

- Description: Retrieve a list of all users.
- Response: An array of user objects.

### `GET /users/:id`

- Description: Retrieve a specific user by their ID.
- Path parameter: `id` (User ID)
- Response: A user object.

### `POST /users`

- Description: Create a new user.
- Request body: A JSON object containing user details.
- Response: The created user object.

### `PUT /users/:id`

- Description: Update a specific user by their ID.
- Path parameter: `id` (User ID)
- Request body: A JSON object containing the updated user details.
- Response: The updated user object.

### `DELETE /users/:id`

- Description: Delete a specific user by their ID.
- Path parameter: `id` (User ID)
- Response: A message indicating the deletion status.

## Books API

### `GET /books`

- Description: Retrieve a list of all books.
- Response: An array of book objects.

### `GET /books/:id`

- Description: Retrieve a specific book by its ID.
- Path parameter: `id` (Book ID)
- Response: A book object.

### `POST /books`

- Description: Create a new book.
- Request body: A JSON object containing book details.
- Response: The created book object.

### `PUT /books/:id`

- Description: Update a specific book by its ID.
- Path parameter: `id` (Book ID)
- Request body: A JSON object containing the updated book details.
- Response: The updated book object.

### `DELETE /books/:id`

- Description: Delete a specific book by its ID.
- Path parameter: `id` (Book ID)
- Response: A message indicating the deletion status.

## Subscriptions API

### `GET /subscriptions`

- Description: Retrieve a list of all subscriptions.
- Response: An array of subscription objects.

### `GET /subscriptions/:id`

- Description: Retrieve a specific subscription by its ID.
- Path parameter: `id` (Subscription ID)
- Response: A subscription object.

### `POST /subscriptions`

- Description: Create a new subscription.
- Request body: A JSON object containing subscription details.
- Response: The created subscription object.

### `PUT /subscriptions/:id`

- Description: Update a specific subscription by its ID.
- Path parameter: `id` (Subscription ID)
- Request body: A JSON object containing the updated subscription details.
- Response: The updated subscription object.

### `DELETE /subscriptions/:id`

- Description: Delete a specific subscription by its ID.
- Path parameter: `id` (Subscription ID)
- Response: A message indicating the deletion status.
