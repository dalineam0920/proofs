const numb = ["245", "2222", "12363", "64"];
const indexes = [];
for (let i = 0; i < numb.length; i++) { 
if (numb[i].length > 3) {
    indexes[indexes.length] = i;
}}

if  (indexes.length > 0) {console.log(indexes);}
else { console.log("Sorry, there is not an entity in the array which has more than 3 symbols"); }
