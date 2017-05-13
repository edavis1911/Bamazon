require("dotenv").config();

var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
var colors = require('colors');

//MySQL Connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Jhm!2297",
  database: "BamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // printItems(function(){
    //   userSelectsItem();
    });

var checkAndBuy = function() {
    connection.query('SELECT * FROM products', function(err, res) {
        var table = new Table({
            head: ['ID', 'Product Name', 'Department', 'Initial Bid','Price', 'Stock Quantity']
        });

        //DISPLAYS ALL ITEMS FOR SALE 
        console.log("HERE ARE ALL THE ITEMS AVAILABLE FOR SALE: ");
        console.log("===========================================");
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].initial_bid, res[i].price.toFixed(2), res[i].stock_quantity.toFixed(2)]);
        }
        console.log("-----------------------------------------------");
        //LOGS THE COOL TABLE WITH ITEMS IN FOR PURCHASE. 
        console.log(table.toString());
        inquirer.prompt([{
            name: "itemId",
            type: "input",
            message: "What is the item ID you would like to buy?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name: "Quantity",
            type: "input",
            message: "How many of this item would you like to buy?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }]).then(function(answer) {
            var chosenId = answer.itemId - 1
            var chosenProduct = res[chosenId]
            var chosenQuantity = answer.Quantity
            if (chosenQuantity < res[chosenId].stock_quantity) {
                console.log("Your total for " + "(" + answer.Quantity + ")" + " - " + res[chosenId].product_name + " is: $" + res[chosenId].price.toFixed(2) * chosenQuantity);
                    connection.query("UPDATE products SET ? WHERE ?", [{
                    stock_quantity: res[chosenId].stock_quantity - chosenQuantity

                }, {
                    item_id: res[chosenId].item_id
                }], function(err, res) {
                    console.log(err);
                    checkAndBuy();
                });

            } else {
                console.log("Sorry, insufficient quanity at this time. All we have is " + res[chosenId].stock_quantity + " in our inventory.");
                checkAndBuy();
            }
        })

    })
}


checkAndBuy();
