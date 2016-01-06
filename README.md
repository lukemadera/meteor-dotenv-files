# lukemadera:dotenv-files

Load environment variables from file and allow overwriting from a different file.


## Why?

You should only RUN from ONE `.env` file. But you may want to BUILD for
 multiple environments, which is not possible with just one `.env` file.
For example, you want to do a mobile build locally and need to use a production
 configuration for it. This allows having multiple `.env-*` files so you can
 run meteor locally AND build for a different environment as well.


## Usage

Create a standard `.env` file with environment variables, e.g.
`.env`

```
VAR1=yes
VAR2=no
```

And / or create one or more other files for different (build) configurations, e.g.
`env/.env2`

```
VAR2=maybe
```

Then when running the meteor (build) command, set the `ENV_FILE_PATH` variable
 to the environment file you want to use, e.g.
`ENV_FILE_PATH=env/.env2 meteor` to run using the environment variables in
 `env/.env2` as overrides to whatever is set in `.env`.

If no `ENV_FILE_PATH` is set, the default `.env` will be used as normal,
 if it exists.