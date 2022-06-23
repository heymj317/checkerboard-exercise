// Your JS goes here

/*
Each tile should be a div
Each tile's width is 11.1%
Set each tile's float property to left
Each tile's paddingBottom is 11.1%
*/

let body = document.getElementsByTagName("body");
//body.style.width = 'auto';
// global variables to set color
let color = "";
let color_one = "red";
let color_two = "black";

// square size parameters.
let square_width = '11.1%';
let square_height = '11.1%';

// grid size parameters.
let rows = 7;
let cols = 9;

// main entry point for the program
main();



function main(){
    
    // loop down the rows.
    for(let i = 0; i < rows; i++){
        
        // container for the row.
        let UI_body = UI_box(String(i));
      
        // loop across the columns.
        for(let j = 0; j < cols; j++){
           
            if(j % 2 == 0 && i %2 == 0){
                color = color_one;
            }
            else {
                color = color_two;

                if(i % 2 != 0 && j % 2 != 0){
                    color = color_one;
                }
            }
            
            // generates a parameterized square and attaches it to the UI_box container.
            square(UI_body, square_width, square_height, color);
        }
    }

    

}


// generates a parent container to store grid squares.
function UI_box(UI_box_number){
    UI_body = document.createElement("div");
    body[0].append(UI_body);
    UI_body.setAttribute("id", UI_box_number);
    UI_body.style.display = "flex";

    return UI_body;
}


function square(UI_body, width, height, color){
    let square = document.createElement('div');
    square.style.width = width;
    //square.style.height = width;
    square.style.margin = "0";
    square.style.backgroundColor = color;
    square.style.paddingBottom = "11.1%";
    square.style.cssFloat = "left";
    UI_body.append(square);
}