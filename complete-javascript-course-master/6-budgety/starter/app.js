// BUDGET CONTROLLER
var budgetController = (function() {
    var Expense = function(id,desc, value) {
        this.id = id;
        this.desc = desc;
        this.value = value;
    }

    var Income = function(id,desc, value) {
        this.id = id;
        this.desc = desc;
        this.value = value;
    }

    var data = {
        allItems: {
            expense: [],
            income: []
        },
        totals: {
            exp: 0,
            income: 0
        }
    }

    return {
        addItem: function(type,desc,val){
            
            var newItem, ID;

            // Create new ID
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length-1].id + 1
            } else {
                ID = 0;
            }
            
            //Create Item based on expense or income
            if (type === 'expense') {
                newItem = new Expense(ID,desc, val )
            } else {
                newItem = new Income(ID,desc, val )
            }
            
            //Push item into appropriate spot
            data.allItems[type].push(newItem)

            //return new item 
            return newItem
        },
        testing: function(){
            console.log(data)
        }
    }
    

})()



// UI CONTROLLER
var UIController = (function() {


    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description', 
        inputValue: '.add__value', 
        inputBtn: '.add__btn'

    }
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            }

        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    }

})()




//GLOBAL CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    var setupEventListerner = function(){
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13) {
                ctrlAddItem()
            }
        })
    }
    

    var ctrlAddItem = function() {
        // get input data
        var input = UICtrl.getInput()
        console.log(input)

        // add item to budget controller
        budgetCtrl.addItem(input.type, input.description, input.value)
        
        // add itemto UI
        
        
        // calculate budget
        
        
        // display budget on UI
        console.log('it works')
    }

    return {
        init: function(){
            setupEventListerner();
        }
    }

})(budgetController, UIController)

controller.init()