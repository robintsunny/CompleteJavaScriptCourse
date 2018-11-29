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
        deleteItem: function(type, id) {
            var ids, index;
            
            // id = 6
            //data.allItems[type][id];
            // ids = [1 2 4  8]
            //index = 3
            
            ids = data.allItems[type].map(function(current) {
                return current.id;
            });

            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
            
        },
        
        
        calculateBudget: function() {
            
            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            
            // Calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            
            // calculate the percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }            
            
            // Expense = 100 and income 300, spent 33.333% = 100/300 = 0.3333 * 100
        },
        
        
        clearFields: function() {
            var fields, fieldsArr;
            
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            
            fieldsArr = Array.prototype.slice.call(fields);
            
            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            });
            
            fieldsArr[0].focus();
        },
        
        
        displayBudget: function(obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';
            
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }
            
        },
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
       budgetLabel: '.budget__value',
       incomeLabel: '.budget__income--value',
       expensesLabel: '.budget__expenses--value',
       percentageLabel: '.budget__expenses--percentage',
       container: '.container',
       expensesPercLabel: '.item__percentage',
       dateLabel: '.budget__title--month'
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
        deleteListItem: function(selectorID) {
            
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
            
        },
        displayBudget: function (obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');

            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }

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

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem)
    }
    
    var updateBudget = function() {   
        // 1. Calculate the budget
        budgetCtrl.calculateBudget();
        
        // 2. Return the budget
        var budget = budgetCtrl.getBudget();
        
        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget);
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

    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID;
        
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id

        if(itemID) {
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            //delete from budget 
            budgetCtrl.deleteItem(type,ID)

            //delete from UI
            UICtrl.deleteListItem(itemID)

            // update budget
            updateBudget()
        }
    }

    return {
        init: function () {
            console.log('Application has started.');

            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    }

})(budgetController, UIController)

controller.init()