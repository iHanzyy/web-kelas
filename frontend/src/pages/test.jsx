import useFetchMenfess from "../hooks/useFetchMenfess";

export default function Test() {
  const { data } = useFetchMenfess();

  console.log(data);
  return (
    <div>
      <h1>Test Page</h1>
    </div>
  );
}
