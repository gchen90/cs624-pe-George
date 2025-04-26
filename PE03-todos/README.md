# Input
The app has an Input element that allows text.

# Process
As the value in Input changes, the inputChange function is called to to pass
the value to the parent component and set the inputValue state. When the submit
button is pressed, is calls the submitTodo function. This function creates a
todo object, iterates the variable todoIndex, pushes the todo object into the
todo array, and sets the state to match the updated array.

# Output
This app only outputs to the log at the moment. When the inputChange function
is called, it prints the value to the log allowing us to track what the input.
When submitTodo function is called, it prints the current state to the log so 
we can see what items are in the todo array.