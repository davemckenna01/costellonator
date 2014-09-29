# DOCKER-VERSION 0.10.0

# this image has node, npm, and git
# https://registry.hub.docker.com/u/davemckenna01/node2/
FROM davemckenna01/node2

ADD start.sh /tmp/

RUN chmod +x /tmp/start.sh

CMD ./tmp/start.sh