import { Buffer } from "buffer"

export function decodeToken(token: string): any {
    const parts: Buffer[] = token.split('.').map((part: string): Buffer => {
        return Buffer.from(part.replace(/-/g, '+').replace(/_/g, '/'), 'base64');
    });
    return JSON.parse(parts[1].toString());
}

export function encodeToken(payload: any): string {
    const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64');
    payload = Buffer.from(JSON.stringify(payload)).toString('base64');
    return `${header}.${payload}`;
}