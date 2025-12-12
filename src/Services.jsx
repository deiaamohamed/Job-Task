import Heading from "./partials/Heading";

function Services(props) {
  return (
    <div className="mt-28">
      <Heading title={props.head} />
      <props.Component />
    </div>
  );
}
export default Services;
