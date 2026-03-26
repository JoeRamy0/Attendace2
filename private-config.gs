// ============ PRIVATE CONFIGURATION - DO NOT SHARE ============
// This file contains sensitive data - keep it private!

// User credentials with passwords
const USERS_PRIVATE = [
  {
    id: "user_001",
    username: "joe",
    password: "joe@123",
    role: "Admin",
    sheets: null
  },
  {
    id: "user_002", 
    username: "m3",
    password: "m3@123",
    role: "Teacher",
    sheets: ["M3"]
  },
  {
    id: "user_003",
    username: "m2",
    password: "m2@123",
    role: "Teacher",
    sheets: ["M2"]
  }
];

// Sheets configuration
const SHEETS_PRIVATE = [
  {
    id: "sheet_m2",
    name: "M2",
    url: "https://script.google.com/macros/s/AKfycbxYotAOxC314l0PAQ67j9Q0SGUrFwbyVQiKLIVC6R-AKZ5glHa0ba4PonkbeDvHpxCx/exec",
    sheetId: "1665W6Z9bNbcJ6l5rLbi41c_xC1FGzRySyMtdAaO5g9A",
    groups: ["خدام", "اولى بنين", "تانيه بنين", "اولى بنات", "تانيه بنات"],
    access: "full"
  },
  {
    id: "sheet_m3",
    name: "M3",
    url: "https://script.google.com/macros/s/AKfycbwAxnQgxbxPrG-75bKT_mqHLalPYY2fueedzKgeJSDq2Ekh0viLd8PtkV_m1cBs7bIFSg/exec",
    sheetId: "1eLBj6T5M8toC9nBgZt70elYYrRjWYkdWzTkeKx-k5zA",
    groups: ["خدام", "رابعة بنين", "تالتة بنين", "رابعة بنات", "تالتة بنات"],
    access: "full"
  }
];
