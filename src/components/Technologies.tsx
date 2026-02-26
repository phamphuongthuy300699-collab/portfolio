"use client";

import { motion } from "framer-motion";

export default function Technologies() {
    return (
        <section id="technologies" className="py-24 bg-[var(--foreground)] text-[var(--background)]">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Инженерная точность. <br />Без компромиссов.
                        </h2>
                        <p className="text-lg opacity-80 leading-relaxed max-w-xl">
                            Я создаю не просто красивые картинки, а отказоустойчивые бизнес-инструменты. Системы, которые выдерживают пиковые нагрузки в пятницу вечером, интегрируются с вашей кассой без костылей и работают как швейцарские часы.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-px bg-white/10 dark:bg-black/20 rounded-3xl overflow-hidden p-[1px]"
                    >
                        {[
                            { category: "POS-системы", stack: ["iiko (iikoTransport API)", "r_keeper", "FrontPad"] },
                            { category: "Эквайринг", stack: ["Альфа-Банк", "T-Bank", "СБП (QR)", "CloudPayments"] },
                            { category: "Frontend", stack: ["React 19 / Next.js 15", "TypeScript", "Tailwind CSS", "Three.js / WebGL"] },
                            { category: "Отказоустойчивость", stack: ["Supabase / PostgreSQL", "Edge Functions", "Redis/Upstash", "Vercel / Timeweb Cloud"] }
                        ].map((block, i) => (
                            <div key={i} className="p-8 bg-[var(--foreground)] h-full flex flex-col justify-center">
                                <h4 className="text-xs uppercase tracking-widest opacity-50 font-mono mb-4">{block.category}</h4>
                                <ul className="space-y-2 font-medium">
                                    {block.stack.map((tech, j) => (
                                        <li key={j} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-white opacity-40" />
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
