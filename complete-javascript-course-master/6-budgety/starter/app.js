// BUDGET CONTROLLER
var budgetController = (function() {
    var Expense = function(id,description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function(id,description, value) {
        this.id = id;
        this.description = description;
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
        addItem: function(type,description,val){
            
            var newItem, ID;

            // Create new ID
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length-1].id + 1
            } else {
                ID = 0;
            }
            
            //Create Item based on expense or income
            if (type === 'expense') {
                newItem = new Expense(ID,description, val )
            } else {
                newItem = new Income(ID,description, val )
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
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',

    }
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
            }

        },

        addListItem: function(obj, type) {
            // create HTML string with placeholder text
            var html, newHtml, element;
            
            if (type === 'income'){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
                
            } else {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>' 

            }


            // replace placeholder with data
            newHtml = html.replace('%id%', obj.id)
                            .replace('%desc%', obj.description)
                            .replace('%value%', obj.value)

            // insert html into DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)


        },
        clearFields: function() {
            var fields, fieldsArr;
            fields = document.querySelectorAll(`${DOMstrings.inputDescription} , ${DOMstrings.inputValue}`);
            fieldsArr = Array.prototype.slice.call(fields)
            fieldsArr.forEach(function(current, index, array) {
                current.value = ''
            })
            fieldsArr[0].focus();
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
    
    var updateBudget = function() {
        // calculate budget
        

        // return budget


        // display budget on UI

    }

    var ctrlAddItem = function() {
        // get input data
        var input = UICtrl.getInput()
        if (input.description !== "" && isNaN(input.value && input.value > 0)) {

            
            // add item to budget controller
            var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            
            // add itemto UI
            UICtrl.addListItem(newItem, input.type);
            
            
            //clear fields
            UICtrl.clearFields();
            console.log('it works')
            
            // calculate and update budget
            updateBudget();
        }
    }

    return {
        init: function(){
            setupEventListerner();
        }
    }

})(budgetController, UIController)

controller.init()