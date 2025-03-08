import {useEffect, useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import confetti from "canvas-confetti";
import clsx from "clsx";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import GradualSpacing from "@/components/ui/animations/text_animations/gradual-spacing";
import {reduxState} from "@/lib/type";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const {t, i18n} = useTranslation();

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();

  const form = useRef<HTMLFormElement>(null);
  const theme = useSelector((state: reduxState) => state.theme);

  const handleConfetti = () => {
    const duration = 2000;
    const animationEnd = Date.now() + duration;
    const defaults = {startVelocity: 30, spread: 360, ticks: 60, zIndex: 0};

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
      });
    }, 250);
  };

  const onSubmit = () => {
    if (form.current) {
      setIsSubmitting(true);
      emailjs
        .sendForm("service_jfdleh4", "template_al39thv", form.current, {
          publicKey: "2x0odKI83LDAngx5S",
        })
        .then(
          () => {
            handleConfetti();
            reset();
            toast.success(t("messageSent"), {
              theme: "dark",
            });
            setIsSubmitting(false);
          },
          () => {
            toast.error(t("error"), {
              theme: "dark",
            });
            setIsSubmitting(false);
          }
        );
    }
  };

  useEffect(() => {
    reset();
  }, [i18n.language]);

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(
        "flex flex-col items-center gap-5 bg-[#fdfdfd] dark:bg-[#303030] p-6 md:p-8 rounded-md text-black dark:text-white md:text-lg",
        i18n.dir(i18n.language) === "ltr" ? "ltr" : "rtl"
      )}
      style={{
        boxShadow: `0px 2px 8px ${theme === "dark" ? "#1e1e1e" : "#ddd"}`,
      }}
    >
      {i18n.dir(i18n.language) === "ltr" ? (
        <GradualSpacing
          className="font-display font-bold text-4xl md:text-4xl text-center"
          text={t("formTitle")}
        />
      ) : (
        <h1 className="font-display font-bold text-4xl md:text-4xl text-center">
          {t("formTitle")}
        </h1>
      )}
      <div className="flex flex-wrap gap-6">
        <div className="flex flex-col flex-grow">
          <div
            className="flex justify-between gap-4 bg-white dark:bg-darkBg px-4 py-2 md:py-1 rounded-md w-full"
            style={{
              boxShadow: `0px 0px 3px ${
                theme === "dark" ? "black" : "#999"
              } inset`,
            }}
          >
            <label htmlFor="name">{t("formName")}: </label>
            <input
              {...register("name", {required: t("error1")})}
              className="flex-grow bg-transparent focus:outline-none"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <p className="h-3 text-red-600">{`${
            errors.name?.message !== undefined ? errors.name?.message : ""
          }`}</p>
        </div>
        <div className="flex flex-col flex-grow">
          <div
            className="flex justify-between gap-4 bg-white dark:bg-darkBg px-4 py-2 md:py-1 rounded-md w-full"
            style={{
              boxShadow: `0px 0px 3px ${
                theme === "dark" ? "black" : "#999"
              } inset`,
            }}
          >
            <label htmlFor="email">{t("formEmail")}:</label>
            <input
              {...register("email", {required: t("error2")})}
              type="text"
              name="email"
              id="email"
              className="flex-grow bg-transparent focus:outline-none"
            />
          </div>
          <p className="h-3 text-red-600">{`${
            errors.email?.message !== undefined ? errors.email?.message : ""
          }`}</p>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div
          className="flex justify-between gap-4 bg-white dark:bg-darkBg px-4 py-2 md:py-1 rounded-md w-full"
          style={{
            boxShadow: `0px 0px 3px ${
              theme === "dark" ? "black" : "#999"
            } inset`,
          }}
        >
          <label htmlFor="description">{t("formDesc")}:</label>
          <textarea
            className="bg-transparent focus:outline-none w-full h-36 overflow-y-auto text-start resize-none"
            {...register("description", {
              required: t("error3"),
            })}
            name="description"
            id="description"
          ></textarea>
        </div>
        <p className="h-3 text-red-700">{`${
          errors.description?.message !== undefined
            ? errors.description?.message
            : ""
        }`}</p>
      </div>
      <input
        disabled={isSubmitting}
        className="bg-transparent hover:dark:bg-red-900 disabled:!bg-transparent dark:bg-red-700 px-7 py-1.5 border-2 disabled:!border-gray-500 dark:border-transparent border-red-700 hover:border-red-900 rounded-md w-min text-red-700 hover:text-red-900 disabled:!text-gray-500 dark:text-white duration-200 cursor-pointer disabled:!cursor-default"
        type="submit"
        value={t("send")}
        id="submit"
      />
    </form>
  );
}
