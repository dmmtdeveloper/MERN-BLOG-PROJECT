import Card from "../Components/Card";

export default function HomePage() {
  return (
    <div className=" lg:grid grid-cols-2 md: flex flex-col items-center gap-5 mx-auto">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
}
