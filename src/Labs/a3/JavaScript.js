import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import Destructing from "./Destructing";
import ES5Functions from "./ES5Functions";
import FunctionDestructing from "./FunctionDestructing";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import Spread from "./Spread";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithFunctions from "./WorkingWithFunctions";

function JavaScript() {
    console.log("Hello World!");
    return (
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <WorkingWithFunctions />
            <WorkingWithArrays />
            <House />
            <Spread />
            <Destructing />
            <FunctionDestructing />
        </div>
    );
}
export default JavaScript;
