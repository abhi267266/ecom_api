

  <h1>Ecommerce API</h1>
  
  <p>This is the API for an ecommerce website. It includes endpoints for user management, products, and orders.</p>

  <h2>Endpoints</h2>
  
  <h3>Auth</h3>
  <p>- POST <code>/api/auth/register</code> - Register a new user</p>
  <p>- POST <code>/api/auth/login</code> - Login and receive a JWT token</p>

  <h3>Users</h3>  
  <p>- GET <code>/api/users</code> - Get all users</p>
  <p>- GET <code>/api/users/:id</code> - Get user by id</p>
  <p>- PUT <code>/api/users/:id</code> - Update user</p>
  <p>- GET <code>/api/users/stats</code> - Get user stats</p>

  <h3>Products</h3>
  <p>- POST <code>/api/products</code> - Create a new product</p>
  <p>- GET <code>/api/products</code> - Get all products (use query params to filter, sort, etc)</p>
  <p>- GET <code>/api/products/income</code> - Get product income stats</p>  

  <h3>Orders</h3>
  <p>- POST <code>/api/orders</code> - Create a new order</p>
  
  <h2>Usage</h2>

  <p>All endpoints require authentication via JWT token sent in the Authorization header, except register and login.</p>

  <h3>Sample Requests</h3>
  
  <pre>
  GET /api/products
  Authorization: Bearer {token}
  </pre>
  
  <pre>
  POST /api/products
  Authorization: Bearer {token}

  {
    "name": "Product 1",
    "description": "This is product 1", 
    "price": 99.99
  }
  </pre>

  <h2>Models</h2>

  <p>User, Product, Order models...</p>
