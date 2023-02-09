export function env() {

    const e = process.env ?? {};

    return {
        ENV: (e.NODE_ENV ?? 'prod') as ('development' | 'production'),
    }
}