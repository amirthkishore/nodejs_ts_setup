import Joi from 'joi';
import Config from './interface/Config';

export class ValidateEnv {

    validateEnvConfig = (config: Config): Config => {
        console.log("--config-env-validating--");

        // Define the environment schema
        const schema = Joi.object({
            NODE_ENV: Joi.string().required(),
            port: Joi.number().required(),
            apiKey: Joi.string().required(),
        });

        // Validate the config object
        const { error } = schema.validate(config, { abortEarly: false });

        if (error) {
            throw new Error(`❌ Environment validation error:\n${error.message}`);
        }

        console.log(config);

        return config;
    }
}