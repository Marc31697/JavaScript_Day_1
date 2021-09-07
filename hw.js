//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(names, string){
    let string_array = string.split(' ')
    let result = '';
    let test = 0
    for(let i = 0;i < names.length; i++){
        for(let x = 0; x < string_array.length; x++){
            if(string_array[x].toLowerCase().search(names[i].toLowerCase()) == 0){
                result += `Matched dog_name ${names[i]} \n`
                test = 0
                break
            } else{
                test = 1
            }
        }
        if(test == 1){
            result += 'No Matches \n'
        }
    }
    return result
}

//Call method here with parameters
console.log(findWords(dog_names, dog_string))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i,1, 'even index')
        }
    }
    return arr
}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
console.log(replaceEvens(arr))