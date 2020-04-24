
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
    table.integer("id").notNull().primary()
    table.integer("vin").notNull()
    table.text("make").notNull()
    table.text("model").notNull()
    table.integer("mileage").notNull()
    table.text("transmission").notNull()
    table.boolean("title").notNull().defaultTo(true)
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
}
