const express = require('express')
const app = express()
const port = 3001
const cors=require("cors")

app.use(cors())

ABOUTME={
    'data':'St. agur blue cheese queso melted cheese. Mascarpone port-salut who moved my cheese port-salut macaroni cheese melted cheese the big cheese cut the cheese. Swiss feta cheese triangles cheesecake manchego ricotta feta cheese and wine. Ricotta jarlsberg cauliflower cheese danish fontina mascarpone cheese slices hard cheese lancashire. Boursin cheese and wine swiss croque monsieur croque monsieur cheese and wine cream cheese who moved my cheese. Brie stilton stilton brie bocconcini camembert de normandie roquefort smelly cheese. Melted cheese fromage macaroni cheese melted cheese queso cheese on toast pecorino cauliflower cheese. Emmental cheese slices. Hard cheese the big cheese cow. Goat jarlsberg macaroni cheese stilton cheese triangles camembert de normandie paneer cow. Port-salut cream cheese airedale hard cheese stinking bishop cream cheese fromage frais mozzarella. Cheese and wine caerphilly danish fontina cream cheese jarlsberg macaroni cheese chalk and cheese when the cheese comes out everybodys happy. Rubber cheese mozzarella blue castello gouda mozzarella chalk and cheese caerphilly caerphilly. St. agur blue cheese red leicester paneer brie cut the cheese halloumi feta cheese triangles. Babybel gouda croque monsieur caerphilly airedale cauliflower cheese cut the cheese mozzarella. Edam croque monsieur roquefort brie ricotta.'
}

app.get('/', (req, res) => {
  res.json({ABOUTME})
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})