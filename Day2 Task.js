// (1) Find all the topics and tasks which are thought in the month of October

db.collection.find({
    month: {
      "$eq": "october"
    }
  })

  [
    {
      "_id": ObjectId("5a934e000102030405000000"),
      "id": "1",
      "month": "october",
      "tasks": 10,
      "topics": "react"
    },
    {
      "_id": ObjectId("5a934e000102030405000001"),
      "id": "8",
      "month": "october",
      "tasks": 50,
      "topics": "express"
    },
    {
      "_id": ObjectId("5a934e000102030405000002"),
      "id": "9",
      "month": "october",
      "tasks": 43,
      "topics": "python"
    }
]

// (2) Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.collection.find({
    "$and": [
      {
        date: {
          "$gt": "2020-10-15"
        }
      },
      {
        date: {
          "$lt": "2020-10-31"
        }
      }
    ]
  })

  [
    {
      "_id": ObjectId("5a934e000102030405000001"),
      "company": "booing",
      "date": "2020-10-16",
      "month": "october"
    },
    {
      "_id": ObjectId("5a934e000102030405000002"),
      "company": "tcs",
      "date": "2020-10-17",
      "month": "october"
    },
    {
      "_id": ObjectId("5a934e000102030405000003"),
      "company": "ibm",
      "date": "2020-10-30",
      "month": "october"
    }
  ]

// (3)  Find all the company drives and students who are appeared for the placement

db.collection.find({})

[
    {
      "_id": ObjectId("5a934e000102030405000000"),
      "company": "thermax",
      "student": "salim"
    },
    {
      "_id": ObjectId("5a934e000102030405000001"),
      "company": "booing",
      "student": "raees"
    },
    {
      "_id": ObjectId("5a934e000102030405000002"),
      "company": "tcs",
      "student": "tahir"
    },
    {
      "_id": ObjectId("5a934e000102030405000003"),
      "company": "ibm",
      "student": "tamim"
    }
  ]

// (4)  Find the number of problems solved by the user in codekata

db.collection.find({})

[
    {
      "_id": ObjectId("5a934e000102030405000000"),
      "codekata": 20,
      "student": "salim"
    },
    {
      "_id": ObjectId("5a934e000102030405000001"),
      "codekata": 30,
      "student": "raees"
    },
    {
      "_id": ObjectId("5a934e000102030405000002"),
      "codekata": 50,
      "student": "tamim"
    }
  ]

//  (5) Find all the mentors with who has the mentee's count more than 15

db.collection.find({})

[
    {
      "_id": ObjectId("5a934e000102030405000000"),
      "mentees": 23,
      "mentors": "tamim"
    },
    {
      "_id": ObjectId("5a934e000102030405000001"),
      "mentees": 33,
      "mentors": "salim"
    },
    {
      "_id": ObjectId("5a934e000102030405000002"),
      "mentees": 25,
      "mentors": "fahim"
    }
  ]

// (6)  Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.collection.find({},
    {
      student: 1,
      attendance: "absent",
      "task": "not submitted"
    })

[
    {
      "_id": ObjectId("5a934e000102030405000000"),
      "attendance": "absent",
      "student": "salim",
      "task": "not submitted"
    },
    {
      "_id": ObjectId("5a934e000102030405000001"),
      "attendance": "absent",
      "student": "rajesh",
      "task": "not submitted"
    },
    {
      "_id": ObjectId("5a934e000102030405000002"),
      "attendance": "absent",
      "student": "rohit",
      "task": "not submitted"
    }
  ]