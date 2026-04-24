"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  CheckCircle2,
  Shield,
  RefreshCw,
  Smartphone,
  User,
  BarChart3,
  MessageCircle,
  Briefcase,
  Activity,
  QrCode,
  X,
  Zap,
  ArrowRight,
  Wifi,
  Nfc,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";

/* ═══════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

/* ═══════════════════════════════════════════════════════════
   SECTION 1 — HERO
   ═══════════════════════════════════════════════════════════ */
function Hero() {
  const bullets = [
    "Destaca al instante con una tarjeta de presentación inteligente.",
    "Captura cada contacto automáticamente; ningún lead se pierde.",
    "Actualiza tu información en tiempo real, sin imprimir de nuevo.",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950">
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-600/8 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:py-0">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ── Left: Copy ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-300"
            >
              <Nfc className="h-3.5 w-3.5 text-blue-400" />
              Tecnología NFC + Perfil Digital
            </motion.span>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Para Profesionales que Hacen Networking:{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Multiplica tus contactos
              </span>{" "}
              y cierra más clientes.
            </motion.h1>

            <motion.ul
              variants={stagger}
              className="mt-8 flex flex-col gap-4"
            >
              {bullets.map((b) => (
                <motion.li
                  key={b}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-3 text-base leading-relaxed text-zinc-300"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
                  {b}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:shadow-blue-500/30"
              >
                Comprar mi Tarjeta
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-zinc-300 transition-all hover:border-white/20 hover:bg-white/[0.06]"
              >
                Ver Demo
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: NFC Card Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Phone mock */}
              <div className="relative z-10 h-[420px] w-[220px] rounded-[2.5rem] border border-white/10 bg-zinc-900 p-2 shadow-2xl sm:h-[500px] sm:w-[260px]">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-[2rem] bg-gradient-to-b from-zinc-800/80 to-zinc-900 p-6">
                  {/* Notch */}
                  <div className="absolute top-5 left-1/2 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

                  {/* Screen content */}
                  <motion.div
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20"
                  >
                    <Wifi className="h-8 w-8 text-blue-400" />
                  </motion.div>
                  <p className="text-center text-xs font-medium text-blue-300">
                    Contacto recibido
                  </p>
                  <p className="mt-1 text-center text-[11px] text-zinc-500">
                    Carlos Méndez · CEO
                  </p>

                  {/* Mock contact card */}
                  <div className="mt-6 w-full rounded-xl border border-white/5 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700" />
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Carlos Méndez
                        </p>
                        <p className="text-[11px] text-zinc-500">
                          carlos@startup.io
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <span className="rounded-md bg-blue-600/15 px-2 py-0.5 text-[10px] font-medium text-blue-400">
                        Guardado
                      </span>
                      <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-zinc-500">
                        Hoy 14:32
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* NFC Card (tilted behind phone) */}
              <motion.div
                initial={{ rotate: -12, x: -60, y: 40 }}
                animate={{ rotate: -12, x: -60, y: 40 }}
                whileHover={{ rotate: -6, x: -50 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute -bottom-4 -left-16 z-0 h-[190px] w-[310px] rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black shadow-xl sm:-left-20 sm:h-[210px] sm:w-[340px]"
              >
                {/* Chip */}
                <div className="absolute top-6 left-6 h-8 w-11 rounded-md border border-amber-500/30 bg-gradient-to-br from-amber-300/60 to-amber-600/40">
                  <div className="m-1.5 h-3 w-6 rounded-sm border border-amber-600/40" />
                </div>
                {/* NFC waves */}
                <motion.div
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-6 right-6"
                >
                  <Nfc className="h-5 w-5 text-white/30" />
                </motion.div>
                {/* Card text */}
                <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.2em] text-zinc-500">
                      SMART CARD
                    </p>
                    <p className="text-sm font-bold tracking-wide text-white">
                      YOUR NAME
                    </p>
                  </div>
                  <p className="text-[10px] tracking-wider text-zinc-600">
                    QR FACTORY
                  </p>
                </div>
              </motion.div>

              {/* Decorative rings */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.08, 0, 0.08],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 -m-8 rounded-[3rem] border border-blue-400/20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 2 — GUARANTEES BAR
   ═══════════════════════════════════════════════════════════ */
function GuaranteesBar() {
  const items = [
    {
      icon: Shield,
      title: "Durabilidad Premium",
      desc: "Tarjetas grabadas en láser de alta precisión.",
    },
    {
      icon: RefreshCw,
      title: "Reemplazo Inteligente",
      desc: "Si cambias de cargo o número, actualizas el chip, no la tarjeta.",
    },
    {
      icon: Smartphone,
      title: "Sin Apps Requeridas",
      desc: "Funciona nativamente en iOS y Android con un solo toque.",
    },
  ];

  return (
    <section className="border-y border-white/[0.06] bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="grid gap-8 sm:grid-cols-3"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03]">
                <item.icon className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 3 — EASE OF USE
   ═══════════════════════════════════════════════════════════ */
function EaseOfUse() {
  const steps = [
    {
      num: "01",
      title: "Diseñamos tu Tarjeta:",
      desc: "Subes tu logo y nosotros hacemos el resto.",
    },
    {
      num: "02",
      title: "Grabado y Envío Rápido:",
      desc: "Producimos localmente en 24/48 horas.",
    },
    {
      num: "03",
      title: "Lista para Usar:",
      desc: "Actívala en minutos y sal a hacer networking.",
    },
  ];

  return (
    <section className="bg-zinc-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ── Left: Visual placeholder ── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-zinc-800/60 to-zinc-900">
              {/* Monitor mock */}
              <div className="flex h-full w-full flex-col items-center justify-center p-8">
                <div className="mb-6 h-3 w-32 rounded-full bg-white/[0.06]" />
                {/* "Screen" content */}
                <div className="grid w-full max-w-xs grid-cols-3 gap-3">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                      className="aspect-square rounded-xl bg-white/[0.04] border border-white/[0.04]"
                    />
                  ))}
                </div>
                <div className="mt-6 flex gap-2">
                  <div className="h-8 w-20 rounded-lg bg-blue-600/20" />
                  <div className="h-8 w-20 rounded-lg bg-white/[0.06]" />
                </div>
              </div>
            </div>
            {/* Floating accent badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 -bottom-3 rounded-xl border border-white/10 bg-zinc-900 p-3 shadow-xl lg:-right-6"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/20">
                  <Zap className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">24 / 48h</p>
                  <p className="text-[10px] text-zinc-500">Envío local</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Copy ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              ¿No eres experto en tecnología?{" "}
              <span className="text-zinc-500">No hay problema.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-5 max-w-lg text-base leading-relaxed text-zinc-400"
            >
              Sabemos que estás ocupado dirigiendo tu negocio. Por eso hicimos
              que empezar sea ridículamente fácil.
            </motion.p>

            <motion.div
              variants={stagger}
              className="mt-10 flex flex-col gap-6"
            >
              {steps.map((step) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="group flex items-start gap-5"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-sm font-bold text-blue-400 transition-colors group-hover:border-blue-600/40 group-hover:bg-blue-600/10">
                    {step.num}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{step.title}</p>
                    <p className="mt-1 text-sm text-zinc-400">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 4 — THE COMPLETE PLATFORM
   ═══════════════════════════════════════════════════════════ */
function CompletePlatform() {
  const features = [
    {
      icon: User,
      title: "Perfiles Digitales",
      desc: "Tu bio, links y contacto en una sola página optimizada.",
    },
    {
      icon: Briefcase,
      title: "Captura de Leads (CRM)",
      desc: "Cada escaneo se guarda con fecha, hora y geolocalización.",
    },
    {
      icon: MessageCircle,
      title: "Botones de WhatsApp / Redes",
      desc: "Un toque para abrir WhatsApp, Instagram o LinkedIn.",
    },
    {
      icon: Briefcase,
      title: "Portafolio / EPK",
      desc: "Muestra tus proyectos, servicios o media kit profesional.",
    },
    {
      icon: Activity,
      title: "Analíticas en Tiempo Real",
      desc: "Escaneos, visitantes, dispositivos y eventos — todo medido.",
    },
    {
      icon: QrCode,
      title: "Código QR de Respaldo",
      desc: "Para quienes no tienen NFC, un QR dinámico incluido.",
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            La Plataforma Completa de Conversión
            <br className="hidden sm:block" />{" "}
            <span className="text-zinc-500">para Profesionales.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-400">
            Todo lo que necesitas para convertir cada interacción en un lead
            real, sin complicaciones.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* ── Left: Feature List ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                transition={{ duration: 0.45 }}
                className="group flex items-start gap-4 rounded-2xl border border-white/[0.04] bg-white/[0.02] p-5 transition-all hover:border-blue-600/30 hover:bg-blue-600/[0.04]"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/[0.04] transition-colors group-hover:bg-blue-600/15">
                  <f.icon className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">{f.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Right: Visual ── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative h-full w-full max-w-md">
              {/* Dashboard mock */}
              <div className="h-full rounded-3xl border border-white/[0.06] bg-gradient-to-b from-zinc-800/50 to-zinc-900/80 p-8">
                {/* Mock header */}
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500" />
                    <p className="text-xs font-medium text-white">Dashboard</p>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  </div>
                </div>
                {/* Mock stats */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "Escaneos hoy", val: "47" },
                    { label: "Leads nuevos", val: "12" },
                    { label: "Tasa conversión", val: "26%" },
                    { label: "Eventos activos", val: "3" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-4"
                    >
                      <p className="text-[11px] text-zinc-500">{s.label}</p>
                      <p className="mt-1 text-2xl font-bold text-white">
                        {s.val}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Mock chart */}
                <div className="mt-6 rounded-xl border border-white/[0.04] bg-white/[0.02] p-4">
                  <p className="mb-3 text-[11px] text-zinc-500">
                    Actividad semanal
                  </p>
                  <div className="flex items-end gap-2 h-20">
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                        className="flex-1 rounded-md bg-blue-600/30"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 5 — COMPARISON TABLE
   ═══════════════════════════════════════════════════════════ */
function Comparison() {
  const oldItems = [
    "Repartes tarjetas de papel y esperas que las guarden.",
    "Tipeas nombres y números manualmente.",
    "Olvidas a quién conociste y dónde.",
  ];
  const smartItems = [
    "Un toque o escaneo y tu info se guarda al instante.",
    "Cada contacto es capturado en tu panel.",
    "Analíticas reales muestran qué eventos funcionan.",
  ];

  return (
    <section className="border-t border-white/[0.06] bg-zinc-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Networking Tradicional{" "}
            <span className="text-zinc-500">vs</span> Networking Inteligente
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* ── Old card ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col rounded-3xl border border-white/[0.06] bg-zinc-900/60 p-8 md:p-10"
          >
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-zinc-500">
              <X className="h-3.5 w-3.5 text-zinc-600" />
              Networking Tradicional
            </span>
            <ul className="flex flex-1 flex-col gap-4">
              {oldItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-zinc-500"
                >
                  <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-zinc-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-white/[0.04] pt-6">
              <p className="text-sm font-semibold text-zinc-500">
                Resultado:{" "}
                <span className="text-zinc-400">
                  Sientes que perdiste el tiempo en el evento.
                </span>
              </p>
            </div>
          </motion.div>

          {/* ── Smart card ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col rounded-3xl border border-blue-600/30 bg-blue-600/[0.04] p-8 shadow-[0_0_60px_-12px_rgba(37,99,235,0.15)] md:p-10"
          >
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-600/10 px-4 py-1.5 text-xs font-medium text-blue-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Networking Inteligente
            </span>
            <ul className="flex flex-1 flex-col gap-4">
              {smartItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-blue-600/15 pt-6">
              <p className="text-sm font-semibold text-blue-300">
                Resultado:{" "}
                <span className="text-white">
                  Te vas de los eventos sabiendo exactamente qué lograste.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 6 — FINAL CTA + FOOTER
   ═══════════════════════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-black py-28 lg:py-36">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-blue-600/8 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            Cada evento sin tu Tarjeta Inteligente te está{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              costando clientes.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-zinc-400"
          >
            Transforma los &quot;estamos en contacto&quot; en reuniones
            agendadas.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-black shadow-lg shadow-white/10 transition-all hover:shadow-white/20"
            >
              Empieza Ahora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const columns = [
    {
      title: "Productos",
      links: [
        "Tarjeta NFC",
        "Perfiles Digitales",
        "Generador QR",
        "Analíticas",
      ],
    },
    {
      title: "Empresa",
      links: ["Nosotros", "Casos de Éxito", "Blog", "Prensa"],
    },
    {
      title: "Soporte",
      links: ["Centro de Ayuda", "Contacto", "Envíos", "Estado del Servicio"],
    },
    {
      title: "Legal",
      links: [
        "Términos de Servicio",
        "Privacidad",
        "Cookies",
        "Devoluciones",
      ],
    },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="text-lg font-bold text-white">QR Factory</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              Tarjetas NFC inteligentes para profesionales que toman su
              networking en serio.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {col.title}
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} QR Factory. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-4">
            {["Twitter", "LinkedIn", "Instagram"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <GuaranteesBar />
      <EaseOfUse />
      <CompletePlatform />
      <Comparison />
      <FinalCTA />
      <Footer />
    </main>
  );
}
