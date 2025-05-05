# Input
The app has an Input element that allows text.

# Process
As the value in Input changes, the inputChange function is called to to pass
the value to the parent component and set the inputValue state. When the submit
button is pressed, is calls the submitTodo function. This function creates a
todo object, iterates the variable todoIndex, pushes the todo object into the
todo array, and sets the state to match the updated array.

# Output
The TodoList is populated with the todos array, and provides options to complete
the todo item or delete it. If the delete button is pressed, the specific todo is 
filtered out of todos array and the state is set. If the complete button is pressed, 
it will flip the completed boolean for that todo and set the state. The TodoList
also filters itself based on the type (prop). When the "All" TabBarItem is selected,
the type is set to "All", and all items in todos array are returned. Similarly,
"Active" will show only todo items that have not been completed, and "Completed"
will show only todo items that have been completed.