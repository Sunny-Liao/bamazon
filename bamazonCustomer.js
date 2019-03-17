var inquirer = require('inquirer');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '####',
    database: 'bamazon_db'
});
var product_name;
    query = 'SELECT * FROM products';
    connection.query(query, function(err, res) {
        if(err) throw err;
        for(var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].item_id + " - Product: " + res[i].product_name + " - Department: " + res[i].department_name + " - Price: " + res[i].price);
            console.log('................................................................................\n')
        }
        runID();
    })


    function runID() {
        inquirer
        .prompt({
            name: "item_id",
            type: "input",
            message: "What is the ID of the product you would like to buy?",
            validate: function(value) {
                if(isNaN(value) === false) {
                    return true;
                }
                return false;
            },
        })
        .then(function(answer) {
            var query = "SELECT item_id, product_name, department_name, price FROM products WHERE ?";
    
            connection.query(query, {item_id: answer.item_id}, function(err, res){
            for(var i = 0; i < res.length; i++) {
            console.log(" - Product: " + res[0].product_name + " -Department: " + res[0].department_name + " - Price: " + res[0].price);
            runQuantity();
            product_name=answer.item_id;
            
        } 
    });
});
}

function runQuantity() {

    inquirer
    .prompt({
        name: "stock_quantity",
        type: "input",
        message: "How many would you like to purchase?",
        validate: function(value) {
            if(isNaN(value) === false) {
                return true;
            }
            return false;
        }
    })
    .then(function(answer) {
        
        var query = "SELECT stock_quantity,product_name, price FROM products WHERE ?";
        connection.query(query, {item_id: product_name}, function(err, res){
            //console.log("stck qty-" + answer.stock_quantity);
            //console.log("res qty -" + res[0].stock_quantity);
            //console.log("prod price =" + res[0].price);
            if(answer.stock_quantity > res[0].stock_quantity){
                console.log("Insufficient quantity!");
            }
            else if(answer.stock_quantity <= res[0].stock_quantity){
                buyAmount = res[0].stock_quantity - answer.stock_quantity;
                console.log("Your order has been placed!  Your total is $" + parseFloat(res[0].price) * answer.stock_quantity);
                query = "UPDATE products SET stock_quantity =" + buyAmount + " WHERE item_id = " + product_name;
                console.log (query);
                connection.query(query, function(err, res){
                    if (err) throw err;
                    console.log(res.affectedRows + " record(s) updated");
                })

                
            }
        });
    });
}    
