const userIds = [
    1 ,2 , 3,4 , 5, 6, 7 , 8 ,9,10,11,12,13,14,15
  ];

export const users = [
    {
      _id: userIds[0],
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      password: "password123",
      picturePath: "path/to/picture1.jpg",
      role: "supplier",
      location: "New York, USA",
      employeeId: "E123456",
      supplierId: "S654321",
      phoneNumber: 1234567890,
      securityQuestion: "What is your mother's maiden name?",
      securityAnswer: "Smith",
      createdAt: 1115211422,
      updatedAt: 1115211422,
      __v: 0,
    },
    {
      _id: userIds[1],
      firstName: "Jane",
      lastName: "Smith",
      email: "janesmith@example.com",
      password: "password456",
      picturePath: "path/to/picture2.jpg",
      location: "Los Angeles, USA",
      role: "employee",
      employeeId: "E234567",
      supplierId: "S765432",
      phoneNumber: 2345678901,
      securityQuestion: "What was the name of your first pet?",
      securityAnswer: "Buddy",
      createdAt: 1115211423,
      updatedAt: 1115211423,
      __v: 0,
    },
    {
      _id: userIds[2],
      firstName: "Michael",
      lastName: "Johnson",
      email: "michaeljohnson@example.com",
      password: "password789",
      picturePath: "path/to/picture3.jpg",
      location: "Chicago, USA",
      role: "supplier",
      employeeId: "E345678",
      supplierId: "S876543",
      phoneNumber: 3456789012,
      securityQuestion: "What is your favorite book?",
      securityAnswer: "1984",
      createdAt: 1115211424,
      updatedAt: 1115211424,
      __v: 0,
    },
    {
      _id: userIds[3],
      firstName: "Emily",
      lastName: "Davis",
      email: "emilydavis@example.com",
      password: "password101",
      picturePath: "path/to/picture4.jpg",
      location: "Houston, USA",
      role: "supplier",
      employeeId: "E456789",
      supplierId: "S987654",
      phoneNumber: 4567890123,
      securityQuestion: "What is the name of your favorite teacher?",
      securityAnswer: "Mrs. Williams",
      createdAt: 1115211425,
      updatedAt: 1115211425,
      __v: 0,
    },
    {
      _id: userIds[4],
      firstName: "David",
      lastName: "Wilson",
      email: "davidwilson@example.com",
      password: "password102",
      picturePath: "path/to/picture5.jpg",
      location: "Phoenix, USA",
      role: "employee",
      employeeId: "E567890",
      supplierId: "S098765",
      phoneNumber: 5678901234,
      securityQuestion: "What is your favorite movie?",
      securityAnswer: "The Matrix",
      createdAt: 1115211426,
      updatedAt: 1115211426,
      __v: 0,
    },
    {
      _id: userIds[5],
      firstName: "Sophia",
      lastName: "Martinez",
      email: "sophiamartinez@example.com",
      password: "password103",
      picturePath: "path/to/picture6.jpg",
      location: "San Diego, USA",
      role: "supplier",
      employeeId: "E678901",
      supplierId: "S109876",
      phoneNumber: 6789012345,
      securityQuestion: "What city were you born in?",
      securityAnswer: "Miami",
      createdAt: 1115211427,
      updatedAt: 1115211427,
      __v: 0,
    },
    {
      _id: userIds[6],
      firstName: "Daniel",
      lastName: "Anderson",
      email: "danielanderson@example.com",
      password: "password104",
      picturePath: "path/to/picture7.jpg",
      location: "Dallas, USA",
      role: "employee",
      employeeId: "E789012",
      supplierId: "S210987",
      phoneNumber: 7890123456,
      securityQuestion: "What was your first car?",
      securityAnswer: "Toyota",
      createdAt: 1115211428,
      updatedAt: 1115211428,
      __v: 0,
    },
  ];
  
  export const products = [
    {
      _id:  userIds[7],
      userId: userIds[1],
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse with adjustable DPI.",
      price: 25.99,
      quantity: 150,
      minQuantity: 20,
      reorderPoint: 30,
      maxQuantity: 200,
      supplierId: "S654321",
      category: "Electronics",
    },
    {
      _id:  userIds[8],
      userId: userIds[2],
      name: "Stainless Steel Water Bottle",
      description: "Insulated bottle, keeps liquids cold for 24 hours.",
      price: 18.99,
      quantity: 75,
      minQuantity: 10,
      reorderPoint: 15,
      maxQuantity: 100,
      supplierId: "S765432",
      category: "Home & Kitchen",
    },
    {
      _id:  userIds[9],
      userId: userIds[3],
      name: "Yoga Mat",
      description: "Eco-friendly, non-slip yoga mat with carrying strap.",
      price: 30.0,
      quantity: 50,
      minQuantity: 10,
      reorderPoint: 20,
      maxQuantity: 70,
      supplierId: "S876543",
      category: "Fitness",
    },
    {
      _id:  userIds[10],
      userId: userIds[4],
      name: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with 12-hour battery life.",
      price: 45.5,
      quantity: 40,
      minQuantity: 5,
      reorderPoint: 10,
      maxQuantity: 60,
      supplierId: "S987654",
      category: "Electronics",
    },
    {
      _id: userIds[11] ,
      userId: userIds[5],
      name: "Organic Green Tea",
      description: "Premium organic green tea leaves, 100g pack.",
      price: 12.99,
      quantity: 200,
      minQuantity: 30,
      reorderPoint: 50,
      maxQuantity: 250,
      supplierId: "S098765",
      category: "Grocery",
    },
    {
      _id:  userIds[12],
      userId: userIds[6],
      name: "LED Desk Lamp",
      description: "Adjustable LED desk lamp with USB charging port.",
      price: 35.75,
      quantity: 60,
      minQuantity: 10,
      reorderPoint: 20,
      maxQuantity: 80,
      supplierId: "S109876",
      category: "Office Supplies",
    },
    {
      _id:  userIds[13],
      userId: userIds[0],
      name: "Running Shoes",
      description: "Lightweight running shoes with breathable mesh.",
      price: 65.0,
      quantity: 100,
      minQuantity: 15,
      reorderPoint: 25,
      maxQuantity: 120,
      supplierId: "S210987",
      category: "Footwear",
    },
  ];
  