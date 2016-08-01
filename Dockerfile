FROM node:5.0

ADD ./bootstrap /bootstrap
##ENV HOME = /bootstrap
#RUN apt-get update
ENV foo /bootstrap
WORKDIR ${foo}
#RUN cd ./components && git clone git@github.com:milenstanev/msw.layout.git
#RUN cd ./components && git clone git@github.com:milenstanev/msw.core.git
#RUN cd ./components && git clone git@github.com:milenstanev/msw.forms.git
RUN npm i -g jspm
RUN npm i -g gulp
RUN npm install
EXPOSE 3000

CMD ["npm", "start"]
#CMD "gulp", "default"
