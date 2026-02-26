"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Pointer, ArrowUpRight } from "lucide-react";

const projects = [
    {
        id: "smoke-vibe",
        title: "Кальянная / Smoke-Vibe",
        subtitle: "Модуль управления заказами для гостей",
        description: "Разработка PWA-меню с геймификацией, вызовом мастера через Telegram-бота и рулеткой вкусов. Интеграция с базой данных.",
        url: "https://smoke-vibe-qr-menu.vercel.app",
        stats: [
            { label: "Конверсия в доп. заказ", value: "+15%" },
            { label: "Скорость обслуживания", value: "x1.5" }
        ],
        color: "from-purple-500/20 to-purple-900/10"
    },
    {
        id: "hochu-drugogo",
        title: "Ресторан / Gastro-OS (Dark)",
        subtitle: "Интерактивное Premium меню",
        description: "Премиальное темное оформление меню с акцентом на визуальную составляющую. Плавные анимации и интуитивная навигация для повышения среднего чека.",
        url: "https://hochu-drugogo.vercel.app",
        stats: [
            { label: "Глубина просмотра", value: "3.2 мин" },
            { label: "Средний чек", value: "+22%" }
        ],
        color: "from-zinc-500/20 to-zinc-900/10"
    },
    {
        id: "gastro-vibe",
        title: "Доставка / Web Delivery (Light)",
        subtitle: "Модуль корзины и эквайринга",
        description: "Светлая версия системы для ресторана с акцентом на доставку. Интегрирована полноценная корзина, сборка заказа и процессинг платежей.",
        url: "https://gastro-vibe-qxpq.vercel.app",
        stats: [
            { label: "Отказы в корзине", value: "-40%" },
            { label: "Повторные заказы", value: "68%" }
        ],
        color: "from-stone-400/20 to-stone-500/10"
    }
];

export default function Showroom() {
    const [activeProject, setActiveProject] = useState(projects[0]);

    return (
        <section id="showroom" className="py-24 px-6 relative">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-8 h-px bg-current opacity-30"></span>
                        <h2 className="text-sm font-mono tracking-widest uppercase opacity-70">Шоурум / Лайв демо</h2>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Посмотрите, как это работает
                    </h3>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-8 h-auto lg:h-[800px]">

                    {/* Слева: Переключатель логики (Bento Left) */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {projects.map((p) => (
                            <button
                                key={p.id}
                                onClick={() => setActiveProject(p)}
                                className={`text-left p-6 lg:p-8 rounded-3xl transition-all duration-300 relative overflow-hidden flex-1 flex flex-col justify-center
                  ${activeProject.id === p.id
                                        ? `bg-[var(--foreground)] text-[var(--background)] shadow-2xl scale-100`
                                        : `glass-card hover:bg-black/5 dark:hover:bg-white/5 opacity-80 hover:opacity-100 scale-[0.98]`
                                    }
                `}
                            >
                                {activeProject.id === p.id && (
                                    <motion.div
                                        layoutId="active-indicator"
                                        className="absolute inset-0 bg-gradient-to-br opacity-10 pointer-events-none"
                                        style={{ backgroundImage: `linear-gradient(to bottom right, var(--color-background), transparent)` }}
                                    />
                                )}

                                <h4 className="text-lg lg:text-xl font-bold mb-2 relative z-10">{p.title}</h4>
                                <p className={`text-sm lg:text-base relative z-10 ${activeProject.id === p.id ? 'opacity-90' : 'opacity-60'}`}>
                                    {p.subtitle}
                                </p>
                                {activeProject.id === p.id && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-xs font-mono uppercase tracking-widest opacity-60 flex items-center gap-2">
                                        <Pointer className="w-3 h-3" /> Активный просмотр
                                    </motion.div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Центр: Interactive Iframe Mockup (Bento Center) */}
                    <div className="lg:col-span-6 rounded-[2.5rem] p-4 lg:p-8 flex items-center justify-center relative bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 border border-black/10 dark:border-white/10 shadow-inner">
                        <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 glass-card rounded-full text-xs font-medium z-10">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            Live Demo
                        </div>

                        {/* Стилизованный телефон */}
                        <div className="relative w-full max-w-[340px] aspect-[9/19] rounded-[3rem] border-[12px] border-[var(--foreground)] shadow-2xl overflow-hidden bg-black/5">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[var(--foreground)] rounded-b-2xl z-20 flex justify-center items-end pb-1.5">
                                <div className="w-12 h-1.5 bg-black/20 dark:bg-white/20 rounded-full" />
                            </div>
                            <AnimatePresence mode="wait">
                                <motion.iframe
                                    key={activeProject.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    src={activeProject.url}
                                    className="w-full h-full border-none relative z-10 bg-white dark:bg-black"
                                    title={activeProject.title}
                                    loading="lazy"
                                />
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Справа: Фактоиды (Bento Right) */}
                    <div className="lg:col-span-2 flex flex-row lg:flex-col gap-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject.id + "-info"}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col gap-4 flex-1"
                            >
                                <div className="glass-card rounded-[2rem] p-6 lg:p-8 flex-1 flex flex-col justify-center">
                                    <h5 className="font-mono text-xs uppercase tracking-widest opacity-50 mb-4">Описание</h5>
                                    <p className="text-sm font-medium leading-relaxed opacity-80">{activeProject.description}</p>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {activeProject.stats.map((stat, i) => (
                                        <div key={i} className="glass-card rounded-3xl p-6 relative overflow-hidden group">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${activeProject.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                            <div className="relative z-10">
                                                <div className="text-3xl font-bold tracking-tight mb-2">{stat.value}</div>
                                                <div className="text-xs font-mono uppercase opacity-60 tracking-wider leading-tight">{stat.label}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={activeProject.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-card rounded-full p-4 flex items-center justify-center gap-2 hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors mt-auto group"
                                >
                                    <span className="text-sm font-bold uppercase tracking-widest">Открыть на весь экран</span>
                                    <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                </a>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
