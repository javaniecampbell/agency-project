import * as React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
const apiUrl =
  process.env.GATSBY_API_URL ?? "https://webhooks-functions.deno.dev";
const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const data = Object.fromEntries(formData);
    const data = {
      name: formData.get("clientName"),
      email: formData.get("emailAddress"),
      phone: formData.get("phoneNumber") ?? "+1876xxxxxxx",
      message: formData.get("message"),
    };
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl + "/create-contactus-ticket", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        // credentials: "include",
        // mode: "cors",
      });
      const responseData = await response.json();
      setIsLoading(false);
      if (response.status === 201) {
        toast({
          title: "Scheduled: Catch up",
          description: "We will get back to you as soon as possible.",
        });
      } else if (response.status === 200) {
        toast({
          title: "Scheduled: Catch up",
          description:
            responseData.message ??
            "We will get back to you as soon as possible.",
        });
      } else if (response.status === 400 || response.status === 500) {
        toast({
          title: "Error",
          description:
            responseData.message ??
            "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      setIsLoading(false);
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    }
  };
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="contact-us">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have a question or want to learn more about our services? Fill out
              the form below and we'll be in touch.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form
              className="flex flex-col space-y-2"
              method="POST"
              onSubmit={onSubmit}
            >
              <Input
                className="max-w-lg flex-1"
                placeholder="Name"
                name="clientName"
                required={true}
                type="text"
              />
              <Input
                className="max-w-lg flex-1"
                placeholder="Email"
                name="emailAddress"
                required={true}
                type="email"
              />

              <Textarea
                className="max-w-lg flex-1"
                placeholder="Message"
                name="message"
              />
              <button
                className={
                  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
                }
                type="submit"
              >
                Submit
                {isLoading && (
                  <svg
                    className="ml-2 -mr-1 h-4 w-4 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.13
                      5.135 2.963 8.291zm5-4.709a7.962 7.962 0 014 3.709H12c0-3.042-1.13-5.135-2.963-6.291z"
                    />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
