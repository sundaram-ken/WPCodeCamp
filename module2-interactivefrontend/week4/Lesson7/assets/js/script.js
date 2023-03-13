var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var inputText = $('#shopping-input');


count = 1
// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
shoppingFormEl.on('submit', function(event) {
    event.preventDefault()
    console.log(inputText.val());
    li = $('<li>')
    li.attr('id','item'+count)
    shoppingFormEl.append(li)
    $('#item'+count).html(inputText.val())
    console.log(li)
    count += 1
});

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
