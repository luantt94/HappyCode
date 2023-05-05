import Card from "./Card";
import useCounter from "../hooks/use-couter";

const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
