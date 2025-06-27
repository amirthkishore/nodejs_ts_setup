import { config } from "dotenv"
import { resolve } from "path"
import Config from "./interface/Config"
import { ProcessEnv } from "./interface/ProcessEnv"
import { ValidateEnv } from "./ValidateEnv"

// Always load the default .env file
config({ path: resolve(__dirname, `../../env/.env`) })

console.log(`Environment: ${process.env.NODE_ENV}`)

let env = process.env as unknown as ProcessEnv

let configurations: Config = {
    NODE_ENV: env.NODE_ENV,
    port: Number(env.PORT),
    apiKey: env.API_KEY
}

export let _config = new ValidateEnv().validateEnvConfig(configurations)