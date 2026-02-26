"use client";

import { motion } from "framer-motion";
import { Smartphone, MonitorSmartphone, ShoppingCart, Server } from "lucide-react";

const expertiseAreas = [
    {
        icon: <MonitorSmartphone className="w-8 h-8 opacity-80" />,
        title: "PWA-приложения",
        description: "Мгновенный запуск по QR, офлайн-режим (IndexedDB), отсутствие необходимости скачивать из App Store и Play Market.",
        span: "col-span-1 md:col-span-2 row-span-2",
        color: "from-amber-500/10 to-orange-600/5",
        bgPattern: "radial-gradient(circle at top right, rgba(245,158,11,0.1), transparent 50%)",
        image: null
    },
    {
        icon: <Smartphone className="w-8 h-8 opacity-80" />,
        title: "Нативные мобильные приложения",
        description: "iOS/Android разработка продуктов любой сложности и публикация в сторах.",
        span: "col-span-1 md:col-span-1 row-span-1",
        color: "from-emerald-500/10 to-teal-600/5",
        bgPattern: "radial-gradient(circle at bottom left, rgba(16,185,129,0.1), transparent 70%)",
        image: null
    },
    {
        icon: <ShoppingCart className="w-8 h-8 opacity-80" />,
        title: "Delivery & E-commerce",
        description: "Разработка сайтов доставок с модулем корзины, эквайрингом и личным кабинетом гостя.",
        span: "col-span-1 md:col-span-1 row-span-1",
        color: "from-rose-500/10 to-pink-600/5",
        bgPattern: "radial-gradient(circle at top left, rgba(244,63,94,0.1), transparent 60%)",
        image: "/assets/delivery_mockup.png"
    },
    {
        icon: <Server className="w-8 h-8 opacity-80" />,
        title: "Интеграции и Backend",
        description: "Связка с кассовыми системами (iiko, r_keeper, FrontPad), архитектура отказоустойчивых баз данных.",
        span: "col-span-1 md:col-span-2 row-span-1",
        color: "from-blue-500/10 to-indigo-600/5",
        bgPattern: "radial-gradient(circle at bottom right, rgba(59,130,246,0.1), transparent 50%)",
        image: null
    }
];

export default function Expertise() {
    return (
        <section id="expertise" className="py-24 relative px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Проектирую <span className="opacity-50">архитектуру бизнеса</span>
                    </h2>
                    <p className="text-lg opacity-70 max-w-2xl">
                        Комплексная разработка масштабируемых ИТ-продуктов для ресторанной и e-commerce индустрии под ключ.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min md:auto-rows-[240px]">
                    {expertiseAreas.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className={`glass-card rounded-[2rem] p-8 md:p-10 flex flex-col justify-between group ${item.span} cursor-default relative overflow-hidden bg-gradient-to-br ${item.color}`}
                        >
                            <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: item.bgPattern }} />

                            <div className="relative z-10 bg-[var(--foreground)] text-[var(--background)] w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                                {item.icon}
                            </div>
                            {item.image && (
                                <div className="absolute top-0 right-0 w-full h-full opacity-30 group-hover:opacity-50 transition-opacity pointer-events-none" style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    mixBlendMode: 'overlay'
                                }} />
                            )}

                            <div className="relative z-10 flex-grow flex flex-col justify-end">
                                <h3 className="text-xl md:text-2xl font-semibold mb-3 drop-shadow-md">{item.title}</h3>
                                <p className="opacity-90 leading-relaxed font-sans drop-shadow-md bg-black/5 dark:bg-black/40 p-3 rounded-xl backdrop-blur-sm inline-block">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
