import { useCallback, useEffect, useState } from "react";

export const Vue3Specific = ({ children }) => {
    const [code, setCode] = useState(
        localStorage.getItem("code")?.replace(/"/g, "") || null,
    );

    const callback = useCallback((event) => {
        if (event.detail.key === "code") {
            setCode(event.detail.value.replace(/"/g, ""));
        }
    }, []);

    useEffect(() => {
        window.addEventListener("storage", callback);
        window.addEventListener("localStorageUpdate", callback);

        return () => {
            window.removeEventListener("storage", callback);
            window.removeEventListener("localStorageUpdate", callback);
        };
    });

    if (code !== "Vue 3") {
        return null;
    }

    return children;
};
