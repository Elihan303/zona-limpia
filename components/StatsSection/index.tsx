"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "Clientes Satisfechos", value: 500, suffix: "+" },
  { label: "Servicios Realizados", value: 2000, suffix: "+" },
  { label: "Agentes Colaboradores", value: 50, suffix: "+" },
  { label: "Limpiezas Realizadas", value: 10000, suffix: "+" },
];

const DURATION = 2000;

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();

        const tick = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / DURATION, 1);
          // ease-out quad
          const eased = 1 - (1 - progress) * (1 - progress);
          setCount(Math.floor(eased * value));

          if (progress < 1) {
            rafRef.current = requestAnimationFrame(tick);
          } else {
            setCount(value);
          }
        };

        rafRef.current = requestAnimationFrame(tick);
      },
      { threshold: 0.1 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros Números
          </h2>
          <p className="text-background/70">
            Resultados que hablan por sí solos
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-background/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
