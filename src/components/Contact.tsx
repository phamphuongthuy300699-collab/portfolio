"use client";

import { motion } from "framer-motion";
import { Send, ArrowUpRight } from "lucide-react";

export default function Contact() {
    const telegramLink = "https://t.me/yourusername"; // Замените на реальную ссылку или номер

    // Предзаполненный текст
    const encodedText = encodeURIComponent("Здравствуйте! Видел ваше демо на сайте, хочу обсудить внедрение в мое заведение.");

    return (
        <section id="contact" className="py-32 px-6 bg-[var(--foreground)] text-[var(--background)] relative overflow-hidden">

            {/* Background decoration */}
            <div className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-white opacity-[0.02] rounded-full blur-3xl" />

            <div className="container mx-auto max-w-4xl relative z-10 text-center flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-current/20 text-xs font-mono uppercase tracking-widest mb-8">
                        Zero-Input UI / Быстрая связь
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                >
                    Готовы обсудить <br className="hidden md:block" /> архитектуру?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.1 }}
                    className="text-xl md:text-2xl opacity-70 mb-16 max-w-2xl"
                >
                    Никаких долгих брифов и email-форм. Прямая связь с инженером в мессенджере.
                </motion.p>

                <motion.a
                    href={`${telegramLink}?text=${encodedText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true }} transition={{ delay: 0.2 }}
                    className="group relative inline-flex items-center justify-center gap-4 px-10 py-6 bg-[var(--background)] text-[var(--foreground)] rounded-full text-xl font-bold overflow-hidden"
                >
                    <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    <Send className="w-6 h-6" />
                    <span>Написать напрямую инженеру</span>
                    <ArrowUpRight className="w-6 h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </motion.a>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} transition={{ delay: 0.5 }}
                    className="mt-20 flex flex-col gap-2 font-mono"
                >
                    <span className="opacity-40 text-sm uppercase tracking-widest">Прямой контакт</span>
                    <a href="tel:+79990000000" className="text-3xl md:text-5xl font-bold hover:opacity-80 transition-opacity">
                        +7 (999) 000-00-00
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
