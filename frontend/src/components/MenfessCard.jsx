export default function MenfessCard({ sender, receiver, message }) {
  return (
    <div className="w-[330px] bg-background-tersary p-5 rounded-[52px] my-4">
      <div className="bg-input w-full h-full rounded-[28px] p-5">
        <div className="flex flex-col gap-3">
          <div className=""><span className="font-poppins-semibold">FROM : </span>{sender}</div>
          <div className=""><span className="font-poppins-semibold">TO : </span>{receiver}</div>
          <div className=""><span className="font-poppins-semibold">MESSAGE :</span></div>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}