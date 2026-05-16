'use client'

import { motion } from "framer-motion";

export default function RelayArazHero() {
    return (
        <section className="relative bg-[#F5F1E8]">

            {/* Sticky Wrapper */}
            <div className="relative h-[120vh]">

                {/* Sticky Lamp */}
                <div className="sticky top-0 z-30 flex justify-center pointer-events-none z-50">
                    <motion.img
                        src="/Lamp-1.webp"
                        alt="Lamp"
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="
                            mt-2
                            w-40
                            sm:w-52
                            md:w-72
                            lg:w-[24rem]
                            object-contain
                            drop-shadow-[0_30px_60px_rgba(255,215,120,0.35)]
                        "
                    />
                </div>

                {/* Hero Container */}
                <div className="absolute inset-0 px-4 md:px-8 lg:px-12 py-6">

                    <div
                        className="
                            relative
                            h-screen
                            overflow-hidden
                            rounded-[2.5rem]
                            shadow-[0_20px_80px_rgba(0,0,0,0.18)]
                            bg-black
                        "
                    >

                        {/* Video */}
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            className="absolute inset-0 h-full w-full object-cover"
                        >
                            <source src="/misbah-bg.mp4" type="video/mp4" />
                        </video>

                        {/* Cinematic Overlay */}
                        <div className="absolute inset-0 bg-black/35 z-10" />

                        {/* Soft Glow */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-20" />

                        {/* Bottom Border */}
                        <div className="absolute bottom-0 left-0 z-30 w-full h-8 bg-gradient-to-r from-[#9E7A3D] via-[#E5C97B] to-[#9E7A3D]" />
                    </div>
                </div>
            </div>
        </section>
    );
}