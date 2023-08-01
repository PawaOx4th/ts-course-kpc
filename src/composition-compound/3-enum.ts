const role: "admin" | "user" | "guest" = "admin"

enum Role1 {
  Admin,
  User,
  Guest,
}
console.log("⏩️⏩️ Role1  :", Role1[0])

// Enum
// Path: src/composition-compound/4-enum.ts
enum Role2 {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

const role2: Role2 = Role2.Admin
console.log("⏩️⏩️ role2 :", role2)

// // Const Enum
const enum Role3 {
  Admin,
  User,
  Guest,
}

const role3: Role3 = Role3.Admin
