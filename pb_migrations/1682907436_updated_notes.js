migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jh2aahzkia5odxp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "etghmnyz",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jh2aahzkia5odxp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "etghmnyz",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
