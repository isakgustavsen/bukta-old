import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

// export const users = sqliteTable('users', {
//   id: integer('id').primaryKey({ autoIncrement: true }),
//   name: text('name').notNull(),
//   email: text('email').notNull().unique(),
//   password: text('password').notNull(),
//   avatar: text('avatar').notNull(),
//   createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
// })

export const product = sqliteTable('product', {
  productId: integer('id').primaryKey({ autoIncrement: true }),
  productName: text('name').notNull(),
  productDescription: text('description'),
  barcode: integer('barcode'),
  stock: integer('stock').notNull(),
})

export const inventory = sqliteTable('inventory', {
  inventoryId: integer('id').primaryKey({ autoIncrement: true }),
  quantityAvailable: integer('available'),
  minimumAmount: integer('minimum').notNull()
})

export const orders = sqliteTable('orders', {
  orderId: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('borrower').notNull()
})


