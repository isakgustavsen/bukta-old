export default defineEventHandler( async (event) => {
  const { productName, productDescription, stock} = await readBody(event)

  const product = await useDrizzle().insert(tables.product).values({
    productName,
    productDescription,
    stock
  }).returning().get()

  return product
})
