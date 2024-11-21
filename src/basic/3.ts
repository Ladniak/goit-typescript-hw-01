type unionType = string | number;

let example: unionType;
example = 123;
example = "string";
// example = true;   -   typescript mistake

type status = "enable" | "disable";

let currentStatus: status;
currentStatus = "enable";
currentStatus = "disable";
// currentStatus = "on";   -   typescript mistake
