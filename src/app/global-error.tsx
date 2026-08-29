"use client";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <div style={{ padding: "2rem", textAlign: "center", fontFamily: "sans-serif" }}>
                    <h2>Something went wrong!</h2>
                    <button
                        onClick={() => reset()}
                        style={{
                            padding: "0.5rem 1rem",
                            marginTop: "1rem",
                            cursor: "pointer",
                            borderRadius: "0.25rem",
                            border: "1px solid #ccc",
                            background: "#f0f0f0",
                        }}
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
}
