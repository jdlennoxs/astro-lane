import satori from "satori";
import type { SatoriOptions } from "satori";
import { SITE } from "@config";
import { writeFile } from "node:fs/promises";
import { Resvg } from "@resvg/resvg-js";

const fetchFonts = async () => {
    // Regular Font
    const fontFileRegular = await fetch(
        "https://api.fontsource.org/v1/fonts/inter/latin-400-normal.ttf"
    );

    const fontRegular: ArrayBuffer = await fontFileRegular.arrayBuffer();

    const fontFileBold = await fetch(
        "https://api.fontsource.org/v1/fonts/inter/latin-700-normal.ttf"
    );
    const fontBold: ArrayBuffer = await fontFileBold.arrayBuffer();

    return { fontRegular, fontBold };
};

const { fontRegular, fontBold } = await fetchFonts();

const Logo = () => (
    <svg width="80" height="80" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_11_66)">
            <path d="M106.624 76.9533C119.612 89.0686 126.718 99.6199 124.145 104.72C119.924 112.993 91.375 103.252 60.367 82.9713C29.3703 62.6903 7.64435 39.5419 11.8603 31.2743C14.4897 26.1176 28.441 28.7583 44.744 35.8359" stroke="#5162FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28.3333 68C28.3333 73.2091 29.3593 78.3672 31.3528 83.1798C33.3462 87.9924 36.268 92.3652 39.9514 96.0486C43.6348 99.732 48.0076 102.654 52.8202 104.647C57.6328 106.641 62.7909 107.667 68 107.667C73.2091 107.667 78.3672 106.641 83.1798 104.647C87.9924 102.654 88.3567 101.783 91.0998 100.195C89.2619 99.5827 87.3025 98.6529 83.5924 96.7304C77.8018 93.7297 83.5924 96.7304 77.8018 93.7297C72.9009 90.6667 77.8018 93.7297 72.9009 90.6667C67.3874 87.6036 72.9009 90.6667 67.3874 87.6036C60.6486 83.3153 67.3874 87.6036 60.6486 83.3153C52.0721 77.8018 60.6486 83.3153 52.0721 77.8018C44.1081 71.6757 52.0721 77.8018 44.1081 71.6757C34.9189 64.3243 44.1081 71.6757 34.9189 64.3243C29.5966 58.9045 32.964 63.0406 29.3079 59.0488C29.2103 62.6074 28.3333 62.7909 28.3333 68Z" fill="#5162FF" stroke="#5162FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28.3333 67.9999C28.3333 73.209 29.3593 78.3671 31.3528 83.1797C33.3462 87.9923 36.268 92.3651 39.9514 96.0485C43.6348 99.7319 48.0076 102.654 52.8202 104.647C57.6328 106.641 62.7909 107.667 68 107.667C73.2091 107.667 78.3672 106.641 83.1798 104.647C87.9923 102.654 92.3652 99.7319 96.0485 96.0485C99.7319 92.3651 102.654 87.9923 104.647 83.1797C106.641 78.3671 107.667 73.209 107.667 67.9999C107.667 62.7908 106.641 57.6327 104.647 52.8201C102.654 48.0076 99.7319 43.6347 96.0485 39.9513C92.3652 36.268 87.9923 33.3461 83.1798 31.3527C78.3672 29.3593 73.2091 28.3333 68 28.3333C62.7909 28.3333 57.6328 29.3593 52.8202 31.3527C48.0076 33.3461 43.6348 36.268 39.9514 39.9513C36.268 43.6347 33.3462 48.0076 31.3528 52.8201C29.3593 57.6327 28.3333 62.7908 28.3333 67.9999Z" stroke="#5162FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_11_66">
                <rect width="136" height="136" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

const ogImage = (text: string) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                background: "#f5f5f5",
                color: "#c9acc",
                padding: "32px"
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: "1",
                    width: "100%",
                    padding: "40px",
                    justifyContent: "center"
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <Logo />
                    <h1
                        style={{
                            fontSize: "60px",
                            fontWeight: "bold",
                            color: "black",
                            fontFamily: "Inter"
                        }}
                    >
                        {text}
                    </h1>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    width: "100%",
                    padding: "40px",
                    borderTop: "1px solid",
                    borderColor: "#52525b",
                    fontSize: "20px",
                    fontFamily: "Inter"
                }}
            >
                <p
                    style={{
                        fontWeight: "600"
                    }}
                >
                    {SITE.title}
                </p>
            </div>
        </div>
    );
};

const options: SatoriOptions = {
    width: 1200,
    height: 630,
    embedFont: true,
    fonts: [
        {
            name: "Inter",
            data: fontRegular,
            weight: 400,
            style: "normal"
        },
        {
            name: "Inter",
            data: fontBold,
            weight: 700,
            style: "normal"
        }
    ]
};

const generateOgImage = async (title: string) => {
    const svg = await satori(ogImage(title), options);

    // Always render PNG
    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    return pngBuffer;
};

export default generateOgImage;
