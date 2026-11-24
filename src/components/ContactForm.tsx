"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { eventTypes } from "@/content/services";
import { site, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./BrandIcons";

// No backend needed: the enquiry is sent through WhatsApp (the business's main channel)
// or the visitor's email app. Swap for an API route + email service if preferred.
export function ContactForm() {
  const [error, setError] = useState<string | null>(null);

  function buildMessage(form: HTMLFormElement) {
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const lines = [
      `Hello Poshbee, my name is ${get("name")}.`,
      `Event type: ${get("type")}`,
      get("date") ? `Event date: ${get("date")}` : null,
      get("guests") ? `Guests: ${get("guests")}` : null,
      `Phone: ${get("phone")}`,
      "",
      get("message"),
    ];
    return lines.filter((l) => l !== null).join("\n");
  }

  function send(form: HTMLFormElement, via: "whatsapp" | "email") {
    if (!form.reportValidity()) {
      setError("Please fill in the required fields.");
      return;
    }
    setError(null);
    const message = buildMessage(form);
    if (via === "whatsapp") {
      window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    } else {
      const subject = encodeURIComponent("Event enquiry from website");
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(message)}`;
    }
  }

  return (
    <form
      className="grid gap-5 sm:grid-cols-2"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        send(e.currentTarget, "whatsapp");
      }}
    >
      <label className="grid gap-2 text-sm font-medium">
        Full name *
        <input name="name" required autoComplete="name" className="field" placeholder="Your name" />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Phone number *
        <input
          name="phone"
          required
          type="tel"
          autoComplete="tel"
          className="field"
          placeholder="080..."
        />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Event type *
        <select name="type" required className="field" defaultValue="">
          <option value="" disabled>
            Select an event
          </option>
          {eventTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Event date
        <input name="date" type="date" className="field" />
      </label>
      <label className="grid gap-2 text-sm font-medium sm:col-span-2">
        Estimated guests
        <input name="guests" inputMode="numeric" className="field" placeholder="e.g. 250" />
      </label>
      <label className="grid gap-2 text-sm font-medium sm:col-span-2">
        Tell us about your event *
        <textarea
          name="message"
          required
          rows={5}
          className="field resize-y"
          placeholder="Venue ideas, theme, colours, anything you have in mind…"
        />
      </label>

      {error && (
        <p role="alert" className="text-sm text-magenta-600 sm:col-span-2">
          {error}
        </p>
      )}

      <div className="flex flex-wrap gap-3 sm:col-span-2">
        <button type="submit" className="btn bg-[#25D366] text-white hover:bg-[#1fb457]">
          <WhatsAppIcon className="size-4" /> Send via WhatsApp
        </button>
        <button
          type="button"
          className="btn-outline"
          onClick={(e) => send(e.currentTarget.form!, "email")}
        >
          <Mail className="size-4" aria-hidden /> Send via email
        </button>
      </div>
    </form>
  );
}
