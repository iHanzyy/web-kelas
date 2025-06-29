import MenfessCard from "../components/MenfessCard";

export default function Test() {
  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <MenfessCard sender={"Romeo"} receiver={"Juliet"} message={"Kalau mencintaimu adalah kesalahan, maka biarkan aku salah selamanya."} />
    </div>
  )
}