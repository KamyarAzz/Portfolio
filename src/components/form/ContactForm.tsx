import {useEffect, useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import confetti from "canvas-confetti";
import {useTranslation} from "react-i18next";
import GradualSpacing from "@/components/ui/animations/text_animations/gradual-spacing";
import {cn} from "@/lib/utils";

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
            toast.success(t("messageSent"));
            setIsSubmitting(false);
          },
          () => {
            toast.error(t("error"));
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
      className={cn(
        "flex flex-col items-center gap-5 bg-softGray dark:bg-darkCharcoal shadow-nav-light dark:shadow-nav-dark p-6 md:p-8 rounded-md text-black dark:text-white md:text-lg",
        i18n.dir(i18n.language) === "ltr" ? "ltr" : "rtl"
      )}
    >
      {i18n.dir(i18n.language) === "ltr" ? (
        <GradualSpacing
          className="text-4xl font-bold text-center font-display md:text-4xl"
          text={t("formTitle")}
        />
      ) : (
        <h1 className="text-4xl font-bold text-center font-display md:text-4xl">
          {t("formTitle")}
        </h1>
      )}
      <div className="flex flex-wrap gap-6">
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between w-full gap-4 px-4 py-2 bg-white rounded-md dark:bg-darkBg shadow-input-light dark:shadow-input-dark md:py-1">
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
          <div className="flex justify-between w-full gap-4 px-4 py-2 bg-white rounded-md dark:bg-darkBg shadow-input-light dark:shadow-input-dark md:py-1">
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
        <div className="flex justify-between w-full gap-4 px-4 py-2 bg-white rounded-md dark:bg-darkBg shadow-input-light dark:shadow-input-dark md:py-1">
          <label htmlFor="description">{t("formDesc")}:</label>
          <textarea
            className="w-full overflow-y-auto bg-transparent resize-none focus:outline-none h-36 text-start"
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
