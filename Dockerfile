FROM node:5.0

ADD ./bootstrap /bootstrap
##ENV HOME = /bootstrap
#RUN apt-get update
ENV foo /bootstrap
WORKDIR ${foo}
#RUN npm i -g gulp
RUN npm install
EXPOSE 3000

CMD ["npm", "start"]
#CMD "gulp", "default"
