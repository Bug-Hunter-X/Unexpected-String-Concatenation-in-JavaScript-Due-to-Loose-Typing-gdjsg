# Unexpected String Concatenation in JavaScript
This example demonstrates a common error in JavaScript stemming from its loose typing system.  When using the `+` operator with a mix of numbers and strings, JavaScript will perform string concatenation instead of numerical addition.

The `bug.js` file shows the erroneous behavior.  The `bugSolution.js` file provides a corrected version using explicit type checking or Number() function to ensure numerical addition.

This is a subtle but crucial point to understand when working with JavaScript to avoid unexpected results.