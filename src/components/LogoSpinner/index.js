import React from "react";

import { motion } from "framer-motion";

export default function App() {
    return (
        <div className="App">
            <div className="loading">
                <motion.div
                    initial={{ x: 0, y: 100 }}
                    animate={{ x: 0, y: -100 }}
                    transition={{
                        flip: Infinity,
                        duration: 2
                    }}
                    style={{
                        background: "blue",
                        height: 50,
                        width: 10,
                        borderRadius: 10
                    }}
                />
            </div>
        </div>
    );
}
