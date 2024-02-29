import { useParams } from "react-router-dom";

export default function Receipe() {
  const { id } = useParams();

  return <h1>Receipe Page: {id}</h1>;
}
