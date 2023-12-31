const allowedOrigins = [
    'https://airsetc.vercel.app',
];


export const corsOptions = {
    // removing || !origin for other paltfrom like postman
    //@ts-ignore
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

