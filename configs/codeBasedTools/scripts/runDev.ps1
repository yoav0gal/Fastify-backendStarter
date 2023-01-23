# This script goal is to start the fastify start
echo "Shout out to king Rachman #I_Love_Yoav_roduct"
#The reason we set a 3 seconds time out. Is to allow the tsc alias to compile otherwise the
# Fastify start will run only on the compiled tsc without the short imports and will throw an ugly error.
Start-Sleep -Seconds 5
nodemon  ./dist/src/server.js