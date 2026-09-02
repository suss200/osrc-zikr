"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
    useEffect(() => {
        if (!("serviceWorker" in navigator)) {
            return;
        }

        window.addEventListener("load", () => {
            navigator.serviceWorker
                .register("/sw.js")
                .catch((error) => {
                    console.error(
                        "Service Worker registration failed:",
                        error
                    );
                });
        });
    }, []);

    return null;
}