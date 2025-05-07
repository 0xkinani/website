import { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

export const ContactPage = () => {
  const [result, setResult] = useState<string | null>(null);
  const [success, setSuccess] = useState<null | string>(null);
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { VITE_WEB_3_FORMS_KEY, DEV } = import.meta.env;

  useEffect(() => {
    console.log(VITE_WEB_3_FORMS_KEY);
    console.log(DEV);
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    setIsLoading(true);
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", VITE_WEB_3_FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    console.log(data);

    if (data.success) {
      setSuccess("Thank you for reaching out, I'll get back to you soon.");
      (event.target as HTMLFormElement).reset();
    } else {
      setError(data.message);
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full lg:py-20 py-10 flex items-center justify-center">
      <div className="w-[90%] flex items-start justify-between lg:flex-row flex-col-reverse">
        <div className="lg:w-[68%] w-full">
          <div className="w-full text-center">
            <h3 className="text-4xl font-bold">Send Me A Message</h3>
          </div>

          <div className="w-full mt-5 text-xl">
            <p>
              Got something important or interesting? Reach out, I'm always open
              to meaningful conversations and collaborations.
            </p>

            {success && (
              <div className="w-full mt-5 text-xl text-green-500">
                <p>{success}</p>
              </div>
            )}

            {error && (
              <div className="w-full mt-5 text-xl text-red-500">
                <p>{error}</p>
              </div>
            )}

            {!error && !success && result && (
              <div className="w-full mt-5 text-xl text-gray-500">
                <p>{result}</p>
              </div>
            )}
          </div>

          {/* form */}

          <div className="w-full mt-10">
            <form onSubmit={onSubmit}>
              <div className="w-full flex items-center justify-between">
                <div className="w-[48%]">
                  <p className="text-sm ml-3 my-2 text-gray-500">First Name</p>

                  <input
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    required
                    className="w-full mt-2 p-3 text-md rounded-full outline-none border border-black border-r-4 border-b-4"
                  />
                </div>

                <div className="w-[48%]">
                  <p className="text-sm ml-3 my-2 text-gray-500">Last Name</p>

                  <input
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    className="w-full mt-2 p-3 text-md rounded-full outline-none border border-black border-r-4 border-b-4"
                  />
                </div>
              </div>

              <div className="w-full flex items-center justify-between my-3">
                <div className="w-full">
                  <p className="text-sm ml-3 my-2 text-gray-500">Email</p>

                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    className="w-full mt-2 p-3 text-md rounded-full outline-none border border-black border-r-4 border-b-4"
                  />
                </div>
              </div>

              <div className="w-full flex items-center justify-between my-3">
                <div className="w-full">
                  <p className="text-sm ml-3 my-2 text-gray-500">Message</p>

                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    rows={5}
                    cols={50}
                    className="w-full mt-2 p-3 text-md rounded-xl outline-none border border-black border-r-4 border-b-4 resize-none"
                  />
                </div>
              </div>

              <div className="w-full flex items-center justify-between my-3">
                <button
                  disabled={isLoading}
                  className="bg-red-500 text-white px-6 border border-r-4 border-b-4 border-black cursor-pointer hover:bg-black hover:text-white py-2 rounded-full"
                >
                  {isLoading ? "Submitting..." : "Submit Form"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="lg:w-[30%] w-full lg:px-5 px-0">
          <div className="w-full lg:h-[400px] lg:mb-0 mb-10 h-fit border border-r-6 border-b-6 rounded-xl flex items-center justify-center  flex-col p-4">
            <div className="w-full flex items-center gap-3 text-xl">
              <span>
                <IoLocationSharp />
              </span>
              <p>Boston, United States</p>
            </div>

            <div className="w-full flex items-center gap-3 text-xl my-3">
              <span>
                <IoMail />
              </span>
              <p>hello@0xkinani.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
