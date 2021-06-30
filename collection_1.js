// Insert one document in db
db.student.insertOne({
    "name": "jack",
    "major": "Biology",
    "gpa": 3.5
})


// {
// 	"acknowledged" : true,
// 	"insertedId" : ObjectId("60dc95ffadd98fadcb85eb8d")
// } 

// It will generate an object id
// we can also give our own object id

db.student.insertOne({
    "_id": 2,
    "name": "jack",
    "major": "Biology",
    "gpa": 3.5
})

// { "acknowledged" : true, "insertedId" : 2 }

// Use of array 
db.student.insertOne({
    "_id": 3,
    "name": "kkobi",
    "major": "Biology",
    "gpa": 67.8,
    "awards": ["team","gym"]
})


// Insert many
db.student.insertMany([
    {
    "name": "aaaa",
    "major": "Biology",
    "gpa": 2.5,
    "awards": ["team","gym"]
    },
    {
        "name": "bbbb",
        "major": "Biology",
        "gpa": 3.0,
        "awards": ["team","gym"]
    }
]);

// Finding Documents/ Records (Query)

// All documents
db.student.find({}).pretty();

// Show all data except _id field
db.student.find({},{_id: 0})

// Show only _id field
db.student.find({},{_id:1})

// Show the name field of the student collection
db.student.find({},{name:1})

// show only the name field of the student collection
db.student.find({},{name:1,_id:0})

// use of limit function
db.student.find({}).limit(1)

// Sorting output by gpa
db.student.find({},{_id: 0}).sort({gpa:1})

// Sorting output by gpa and name

db.student.find({},{_id: 0}).sort({gpa:1,name:1})


// Find based on a specific field
db.student.find({major: "Biology"},{_id:0})

// Find based on multiple fields
db.student.find({major: "Biology",name: "kk"},{_id:0})


// Logical query operators
// or operation
db.student.find({$or: [{major:"Chemistry"},{name: "kk"}]},{_id:0})

// $lte 
db.student.find({gpa: {$lte: 3}},{_id:0}).sort({gpa:1})

// $eq , $ne, $lt, $lte, $gt, $gte


// $in
db.student.find({name: {$in: ["kk","kko"]}})
db.student.find({gpa: {$in: [1,3,2.5]}})

//$nin
db.student.find({gpa: {$nin: [1]}})

// here 2 is the string Datatype 
// each BSON type has both integer and string idetifiers
db.student.find({name: {$type: 2}})

// 

db.student.find({grades: {$size: 4}},{_id:0})









