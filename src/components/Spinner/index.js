import React from "react";

import { motion } from "framer-motion";

export default function Spinner({ children, duration }) {
    return (
        <span >
            <motion.div
                initial={{ x: 0, y: 200 }}
                animate={{ x: 0, y: 300 }}
                transition={{
                    flip: Infinity,
                    delay: duration * 0.9,
                    duration: 0.7
                }}
                style={{
                    color: "rgb(0, 72, 255)",
                    height: 50,
                    width: 100,
                }}
            >
                {children}
            </motion.div>
        </span>
    );
}
