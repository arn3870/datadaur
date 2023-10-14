import styles from "@/components/styles/gradients.module.css";
import Link from "next/link";
export default function index() {
  return (
    <div className="text-white">
      <div
        className={` ${styles.contact_gradient} absolute top-0 right-0 w-[300px] md:w-[500px] lg:w-[700px] h-[300px] md:h-[450px] lg:h-[450px]`}
      ></div>
      <div
        className={` ${styles.contact_gradient2} absolute right-0 w-[300px] md:w-[500px] lg:w-[700px] h-[300px] md:h-[450px] lg:h-[450px]`}
      ></div>
      <div className="text-center text-[28px] md:text-[60px] lg:text-[60px] py-[20px] md:py-[30px] lg:pt-[30px] px-[20px] md:px-[150px] lg:px-[200px]">
        Meet with your manager
      </div>
      <div
        className="relative w-full flex justify-center items-center h-screen"
        style={{ zIndex: "5" }}
      >
        <div className="xl:w-[875px] md:w-[700px] md:top-[-25px] w-full">
          <form>
            <div className="px-[20px] md:pr-5 lg:pr-5">
              <div className="flex justify-between py-[10px] gap-5 xl:gap-16">
                <div className="flex flex-col w-full">
                  <label className="pb-[4px] text-[12px] md:text-[16px] lg:text-[18px]">
                    What is your email?
                  </label>
                  <input
                    className={` ${styles.inputClass} pl-[10px] lg:mt-[15px] outline-none focus:outline-none py-[10px] md:py-[20px] lg:py-[20px] px-[20px] rounded-[7px] text-[12px] sm:text-[14px]`}
                    id="email"
                    placeholder="Email"
                  ></input>
                </div>
              </div>
              <div className="flex justify-between py-[10px] gap-5 xl:gap-16">
                <div className="flex flex-col w-full">
                  <label className="pb-[4px] text-[12px] md:text-[16px] lg:text-[18px]">
                    OTP code
                  </label>
                  <input
                    className={` ${styles.inputClass} pl-[10px] lg:mt-[15px] outline-none focus:outline-none py-[10px] md:py-[20px] lg:py-[20px] px-[20px] rounded-[7px] text-[12px] sm:text-[14px]`}
                    id="OTP"
                    placeholder="OTP"
                  ></input>
                </div>
              </div>
            </div>
            <p className="text-center">
              do not have a account?
              <Link href="/sign-up">
                <span className="underline"> Signup</span>
              </Link>
            </p>
            <div className="flex justify-center mt-[50px] sm:text-sm md:text-lg lg:text-xl">
              <button
                style={{
                  border: "2px solid var(--Button-Stroke, #A265F0)",
                  background:
                    "var(--Button-Filled--Gradient, linear-gradient(89deg, #3E2567 0.92%, #140769 98.29%))",
                  boxShadow: "0px 4px 25px 0px #2F1C64",
                }}
                className="px-[20px] md:px-[30px] lg:px-[50px] py-[10px] md:py-[10px] lg:py-[10px] rounded-[20px] color-white"
              >
                Login
              </button>
            </div>
            <div
              className=" w-[100%] h-[4px] mt-[20px] md:mt-[50px] lg:mt-[100px]"
              style={{
                background:
                  "linear-gradient(89deg, #3F1B79 0.92%, #11074F 98.29%)",
              }}
            ></div>
          </form>
        </div>
      </div>
    </div>
  );
}
