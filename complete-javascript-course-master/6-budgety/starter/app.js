// BUDGET CONTROLLER
var budgetController = (function() {

    

})()



// UI CONTROLLER
var UIController = (function() {



})()




//GLOBAL CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        // get input data
        // add item to budget controller
        // add itemto UI
        // calculate budget
        // display budget on UI
        console.log('it works')
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)


    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
            ctrlAddItem()
        }
    })

})(budgetController, UIController)