use flix
db.redacted.aggregate([
   { $project:
        { cast : {$split: ["$cast", ", "]},
         listed_in : {$split: ["$listed_in", ", "]},
         director : {$split: ["$director", ", "]},
         country: 1,
         date_added: 1,
         duration: 1,
         description: 1,
         rating: 1,
         release_year: 1,
         show_id: 1,
         title: 1,
         type:1
        }
   },
   {$out: {db: "flix", coll: "movies"}}
])
