export const VueSpecific = ({ children }) => {
    const [code, setCode] = useState(() => {
        if (typeof window === "undefined") {
            return "Vue";
        }
        return localStorage.getItem("code")?.replace(/"/g, "") || "Vue";
    });

    useEffect(() => {
        const handler = (event) => {
            if (event.detail?.key === "code") {
                setCode(event.detail.value?.replace(/"/g, ""));
            }
        };

        window.addEventListener("localStorageUpdate", handler);
        return () => window.removeEventListener("localStorageUpdate", handler);
    }, []);

    if (code !== "Vue") {
        return null;
    }

    return children;
};
