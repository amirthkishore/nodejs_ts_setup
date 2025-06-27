

export let MongoConnect = {
    connect: () => {
        if (!_configNodejs.db || _utils.isEmptyStrict(_configNodejs.db)) {
            throw new Error("No db config")
        }

        mongoose.connect(_configNodejs.db.uri, {
            auth: {
                username: _configNodejs.db.user,
                password: _configNodejs.db.pass,
            },
        })
    }
}