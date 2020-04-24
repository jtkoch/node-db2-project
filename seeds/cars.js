
exports.seed = async function(knex) {
  await knex("cars").truncate()

  await knex("cars").insert([
    {"vin": "1234567890", "make": "subaru", "model": "outback", "mileage": "112000", "transmission": "automatic", "title": true},
    {"vin": "2345678901", "make": "honda", "model": "crv", "mileage": "2230", "transmission": "automatic", "title": true},
    {"vin": "3456789012", "make": "jeep", "model": "wrangler", "mileage": "130000", "transmission": "manual", "title": true},
    {"vin": "4567890123", "make": "ford", "model": "fiesta", "mileage": "124144", "transmission": "manual", "title": false},
    {"vin": "5678901234", "make": "chevy", "model": "cruze", "mileage": "12458", "transmission": "automatic", "title": true},
    {"vin": "6789012345", "make": "gmc", "model": "yukon", "mileage": "22330", "transmission": "automatic", "title": true},
    {"vin": "7890123456", "make": "kawasaki", "model": "ninja", "mileage": "12000", "transmission": "manual", "title": true},
  ])
}
