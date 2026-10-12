"use client";

import { useState, type FormEvent } from "react";
import { contactReasons } from "@/data/content";
import Button from "@/components/ui/Button";

type Field = "name" | "email" | "reason" | "modality" | "message";
type Errors = Partial<Record<Field, string>>;

function validate(d: FormData): Errors {
  const get = (k: Field) => String(d.get(k) ?? "").trim();
  const errors: Errors = {};
  if (get("name").length < 2) errors.name = "Escribe tu nombre.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email"))) errors.email = "Escribe un correo válido, por ejemplo nombre@correo.com.";
  if (!get("reason")) errors.reason = "Elige un motivo de consulta.";
  if (!get("modality")) errors.modality = "Elige una modalidad.";
  if (get("message").length < 10) errors.message = "Cuéntame un poco más (mínimo 10 caracteres).";
  return errors;
}

const input = "mt-1.5 w-full rounded-xl border border-sage-300 bg-white px-4 py-3 text-base text-ink placeholder:text-ink-soft/60";

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate(new FormData(e.currentTarget));
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true); // Simulación: no se envía ni guarda nada.
  }

  const err = (f: Field) => errors[f] && <p id={`${f}-error`} role="alert" className="mt-1 text-sm text-red-700">{errors[f]}</p>;
  const a11y = (f: Field) => ({ "aria-invalid": !!errors[f], "aria-describedby": errors[f] ? `${f}-error` : undefined });

  if (sent) {
    return (
      <div role="status" className="rounded-2xl bg-white p-8 text-ink">
        <h3 className="font-serif text-2xl text-sage-900">¡Gracias! Recibimos tu solicitud (simulada)</h3>
        <p className="mt-3 leading-relaxed text-ink-soft">Este es un formulario demostrativo: no se envió ni se guardó ninguna información. En un sitio real, recibirías una respuesta en un plazo breve.</p>
        <Button variant="secondary" className="mt-6" onClick={() => { setSent(false); setErrors({}); }}>Enviar otra solicitud</Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl bg-white p-6 text-ink sm:p-8">
      <p className="text-sm text-ink-soft">Formulario demostrativo: no se envía ni se almacena información.</p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-medium">Nombre</label>
          <input id="name" name="name" autoComplete="name" className={input} {...a11y("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className="font-medium">Correo electrónico</label>
          <input id="email" name="email" type="email" autoComplete="email" className={input} {...a11y("email")} />
          {err("email")}
        </div>
      </div>
      <div>
        <label htmlFor="reason" className="font-medium">Motivo de consulta</label>
        <select id="reason" name="reason" defaultValue="" className={input} {...a11y("reason")}>
          <option value="" disabled>Selecciona una opción</option>
          {contactReasons.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
        {err("reason")}
      </div>
      <fieldset aria-describedby={errors.modality ? "modality-error" : undefined}>
        <legend className="font-medium">Preferencia de modalidad</legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {["Online", "Presencial", "Sin preferencia"].map((m) => (
            <label key={m} className="flex min-h-12 cursor-pointer items-center gap-2 rounded-full border border-sage-300 px-4 has-[:checked]:border-sage-700 has-[:checked]:bg-sage-100 has-[:focus-visible]:outline-2">
              <input type="radio" name="modality" value={m} className="accent-sage-700" />{m}
            </label>
          ))}
        </div>
        {err("modality")}
      </fieldset>
      <div>
        <label htmlFor="message" className="font-medium">Mensaje</label>
        <textarea id="message" name="message" rows={4} className={input} {...a11y("message")} />
        {err("message")}
      </div>
      <Button type="submit" className="w-full sm:w-auto">Agendar una sesión</Button>
    </form>
  );
}
