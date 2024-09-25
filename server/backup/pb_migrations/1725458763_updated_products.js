migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ov9ugani5t4peim")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ov9ugani5t4peim")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
