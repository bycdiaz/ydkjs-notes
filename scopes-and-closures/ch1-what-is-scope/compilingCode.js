// Scope is primarily determined during compilation

// sample program & compilation

var a = 2;

// tokenizing/lexing
// program would be broken up into var, a, =, 2, and ;

// parsing
// stream of tokens is turnd into tree of nested elements called Abstract Syntax Tree (AST)

// top level node called VariableDeclaration (for var), with child for identifier (for a),
// with another child AssignmentExpression (for =), which has another child of
// NumericLiteral (for 2)

// code generation: changing AST into executable code
// JS engine takes the AST of var a = 2; and turns it into machine instructions
// that actually creates the variable a and stores the value into a.

