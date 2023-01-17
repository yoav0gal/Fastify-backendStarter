# This script goal is to start the fastify start
echo "Shout out to king Rachman #ILoveYoav product"
#The reason we set a 3 seconds time out. Is to allow the tsc alias to compile otherwise the
# Fastify start will run only on the compiled tsc without the short imports and will throw an ugly error.
Start-Sleep -Seconds 3
fastify start --ignore-watch=.ts$ -w -l info -L dist/configs/codeBasedTools/loggerConfigurations.js dist/src/app.js