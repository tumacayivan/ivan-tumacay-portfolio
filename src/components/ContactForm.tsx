import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Loader2, ShieldCheck } from "lucide-react";
import { notifyInquiry, type InquiryPayload } from "@/lib/notify";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(120),
  email: z.string().trim().email("Enter a valid email").max(160),
  company: z.string().trim().max(160).optional(),
  inquiryType: z.string().max(60).optional(),
  budget: z.string().trim().max(80).optional(),
  message: z.string().trim().min(10, "Tell me a bit more (min 10 chars)").max(3000),
  // honeypot — real users leave this empty
  hp: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

const inquiryTypes = [
  "Job Offer / Full-Time",
  "Freelance / Project",
  "Virtual Assistance",
  "Automation / AI",
  "Collaboration",
  "Other",
];

const fieldClass =
  "w-full bg-[hsl(0_0%_4%)] border border-[hsl(var(--accent-red)/0.4)] px-3 py-2.5 font-typewriter text-base text-[hsl(var(--accent-bone))] placeholder:text-[hsl(var(--ink-brown))] focus:outline-none focus:border-[hsl(var(--accent-red))] focus:ring-1 focus:ring-[hsl(var(--accent-red)/0.5)] transition-colors";
const labelClass =
  "font-blackops text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))] uppercase mb-1.5 block";
const errClass = "mt-1 font-courier text-[11px] tracking-[0.15em] text-[hsl(var(--accent-red-bright))]";

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    try {
      await notifyInquiry(values as InquiryPayload);
      setSent(true);
      reset();
      toast.success("Transmission received", {
        description: "Your inquiry was dispatched. I'll respond shortly.",
      });
    } catch (err) {
      const rate = err instanceof Error && err.message === "rate_limited";
      toast.error(rate ? "Too many messages" : "Transmission failed", {
        description: rate
          ? "Please wait a few minutes before sending again."
          : "Something went wrong. Email tumacayivan@gmail.com directly.",
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto mb-10 paper-card-cream p-5 sm:p-8 relative">
      <div className="absolute -top-3 left-5 stamp stamp-black !text-[12px] !p-1 !rotate-0 bg-[hsl(var(--paper))]">
        FILE AN INQUIRY
      </div>

      <div className="flex items-center justify-between border-b border-dashed-ink pb-3 mb-5">
        <span className="font-blackops text-lg sm:text-2xl text-[hsl(var(--accent-bone))] tracking-[0.08em] uppercase">
          Encrypted Contact Form
        </span>
        <span className="hidden sm:flex items-center gap-2 font-courier text-[11px] tracking-[0.28em] text-[hsl(var(--ink-brown))] uppercase">
          <ShieldCheck className="w-4 h-4 text-[hsl(var(--accent-red))]" /> Direct to operator
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        {/* Honeypot: hidden from humans, tempting to bots */}
        <div aria-hidden="true" className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden">
          <label>
            Leave this field empty
            <input type="text" tabIndex={-1} autoComplete="off" {...register("hp")} />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass} htmlFor="cf-name">Name *</label>
            <input id="cf-name" className={fieldClass} placeholder="Your name" autoComplete="name" {...register("name")} />
            {errors.name && <p className={errClass}>{errors.name.message}</p>}
          </div>
          <div>
            <label className={labelClass} htmlFor="cf-email">Email *</label>
            <input id="cf-email" type="email" className={fieldClass} placeholder="you@company.com" autoComplete="email" {...register("email")} />
            {errors.email && <p className={errClass}>{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass} htmlFor="cf-company">Company / Org</label>
            <input id="cf-company" className={fieldClass} placeholder="Optional" autoComplete="organization" {...register("company")} />
          </div>
          <div>
            <label className={labelClass} htmlFor="cf-type">Inquiry Type</label>
            <select id="cf-type" className={fieldClass} defaultValue="" {...register("inquiryType")}>
              <option value="" disabled>Select…</option>
              {inquiryTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="cf-budget">Budget / Timeline</label>
          <input id="cf-budget" className={fieldClass} placeholder="Optional — e.g. $2k, ASAP, part-time" {...register("budget")} />
        </div>

        <div>
          <label className={labelClass} htmlFor="cf-message">Message *</label>
          <textarea id="cf-message" rows={5} className={`${fieldClass} resize-y`} placeholder="What do you need built or done?" {...register("message")} />
          {errors.message && <p className={errClass}>{errors.message.message}</p>}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
          <p className="font-courier text-[11px] tracking-[0.22em] text-[hsl(var(--ink-brown))] uppercase order-2 sm:order-1">
            {sent ? "✓ Last transmission delivered" : "· Encrypted · Sent straight to Ivan"}
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="dossier-cta justify-center text-base !py-3.5 !px-7 w-full sm:w-auto order-1 sm:order-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Transmitting…
              </>
            ) : (
              <>
                <Send className="w-5 h-5" /> Send Transmission
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
