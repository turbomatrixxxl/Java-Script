export const logSomething = () => console.log("Hello import-export js...!!!");

export const logSomething0 = () => console.log("something");
export const RADU_NAME = "Radu";

const mainFunction = () => console.log("This is my main function");

export { mainFunction };

export default function secondFunction() {
  console.log(`second function`);
}
