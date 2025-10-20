import Footer from "../components/Footer";
import GlowText from "../components/GlowText";
import MenfessCard from "../components/MenfessCard";
import Navbar from "../components/Navbar";
import useCreateMenfess from "../hooks/useCreateMenfess";
import useFetchMenfess from "../hooks/useFetchMenfess";
import { useForm } from "react-hook-form";

export default function Menfess() {
  const { data: menfessData, refetch: refetchMenfess } = useFetchMenfess();
  const { mutateAsync: createMenfess } = useCreateMenfess({
    onSuccess: () => {
      refetchMenfess();
    },
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    createMenfess(data);
    console.log(data);
  };

  return (
    <div>
      <Navbar />
      <div className="relative w-full overflow-hidden">
        <div className="w-screen overflow-hidden">
          <div className="-z-30 w-[882px] h-[480px]  bg-secondary rounded-[50%] translate-y-[260%] translate-x-[-50%] absolute"></div>
          <div className="-z-30 w-[882px] h-[480px]  bg-secondary rounded-[50%] translate-y-[160%] translate-x-[100%] absolute"></div>
        </div>
        <div className=" backdrop-blur-0 sm:backdrop-blur-[200px] bg-background-mobile sm:bg-transparent">
          <section className="sm:backdrop-blur-[200px] backdrop-blur-none h-[calc(100vh-60px)] w-screen flex justify-center items-center overflow-y-hidden">
            <div className="-z-20 w-[882px] h-[480px] blur-[200px] translate-y-[90%] bg-primary rounded-[50%] absolute"></div>
            <div className="-z-30 absolute blur-[200px] -translate-y-[50px] h-[85vh] w-screen flex justify-center items-center bg-secondary brightness-50"></div>
            <div className="flex flex-col">
              <GlowText
                text="MENFESS"
                size="sm:text-primary text-white text-5xl"
                font="font-poppins-semibold"
              />
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-4  flex flex-col sm:flex-row justify-between bg-background-secondary w-[calc(100vw-50px)] max-w-[900px]  h-auto sm:h-[340px] rounded-[52px] p-7 sm:p-12 gap-4 sm:gap-6 md:gap-10"
              >
                <div className="flex flex-col items-center w-full sm:w-1/2 gap-4 sm:gap-8">
                  <div className="flex flex-nowrap gap-2 bg-input rounded-[52px] w-full py-3 px-5 overflow-hidden">
                    <div className="font-poppins-semibold text-nowrap">
                      FROM :{" "}
                    </div>
                    <input
                      type="text"
                      className="w-9/12"
                      {...register("sender", { required: true })}
                    />
                  </div>
                  <div className="flex flex-nowrap gap-2 bg-input rounded-[52px] w-full py-3 px-5">
                    <div className="font-poppins-semibold text-nowrap">
                      TO :{" "}
                    </div>
                    <input
                      type="text"
                      className="w-10/12"
                      {...register("receiver", { required: true })}
                    />
                  </div>
                  <button className="hidden sm:block bg-input rounded-[52px] w-fit py-2 px-6 cursor-pointer font-poppins-semibold">
                    SEND
                  </button>
                </div>
                <div className="w-full sm:w-1/2 bg-input rounded-[28px] h-[36vh] sm:h-full resize-none flex flex-col p-4">
                  <div className="font-poppins-semibold">MESSAGE : </div>
                  <textarea
                    name=""
                    id=""
                    className="h-full w-full resize-none"
                    {...register("message", { required: true })}
                  ></textarea>
                </div>
                <button className="sm:hidden self-center bg-input rounded-[52px] w-fit py-1 px-5 cursor-pointer font-poppins-semibold">
                  SEND
                </button>
              </form>
            </div>
          </section>
          <div className="flex flex-col items-center bg-background sm:bg-transparent rounded-t-3xl sm:rounded-none pt-20 sm:pt-0 mt-10 gap-4">
            <GlowText
              text="FEEDS"
              size="sm:text-primary text-white text-5xl"
              font="font-poppins-semibold"
            />
            <section className=" flex justify-center items-start pb-40 mx-auto gap-2 sm:gap-10 flex-wrap">
              {menfessData?.map((menfess) => (
                <MenfessCard
                  key={menfess.id}
                  sender={menfess.sender}
                  receiver={menfess.receiver}
                  message={menfess.message}
                  date={menfess.createdAt.split("T")[0]}
                />
              ))}
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
