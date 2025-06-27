export default interface Config {
    NODE_ENV: string; //'development' | 'production' | 'test';
    port: number;
    apiKey: string;
}