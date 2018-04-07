# This is a quick and dirty deploy that just fires up a running server where
# the git repository resides. It isn't meant for any kind of heavy production
# use and violates the docker principle of single-responsibility containers.
#
# On the other hand it is a fast and simple way to get up and running for
# testing and verification.
#
# 1. install docker
# 2. git checkout the source code
# 3. cd into the project folder
# 4. run bin/build to build the docker container
# 5. run bin/start to start the container instance

FROM ubuntu:16.04
MAINTAINER choltz

RUN apt-get -y update &&\
    apt-get -y install software-properties-common python3-software-properties
RUN add-apt-repository universe

# Setup base dependencies
RUN apt-get install -y build-essential emacs24-nox htop links2 curl git-core monit catdoc poppler-utils sudo wget unzip vim
RUN apt-get install -y bash curl patch bzip2 gawk libssl-dev make libc6-dev patch openssl curl zlib1g zlib1g-dev libyaml-dev libsqlite3-dev sqlite3 libgmp-dev libgdbm-dev libncurses5-dev bison pkg-config libffi-dev libgmp-dev libreadline6-dev
RUN apt-get install -y libxslt-dev libxml2-dev libpq-dev
RUN apt-get install -y python
# RUN apt-get install -y postgresql postgresql-client
RUN apt-get upgrade -y

# RUN service postgresql start &&\
#     /bin/su - postgres -c "psql -c \"CREATE USER web;\" &&\
#                            psql -c \"create database bankit_prod\""

RUN useradd web -m -s /bin/bash
USER web

# Set up folders
RUN mkdir /home/web/bin
# RUN mkdir /home/web/apps

# Build ruby
RUN cd /tmp && \
    wget https://cache.ruby-lang.org/pub/ruby/ruby-2.5.0.zip && \
    unzip ruby-2.5.0.zip && \
    cd ruby-2.5.0 && \
    ./configure --prefix=/home/web/apps/ruby && \
    make && \
    make install

# RUN ln -s /home/web/apps/ruby/bin/* /home/web/bin
RUN echo "export PATH=\"$PATH:$HOME/bin:$HOME/apps/ruby/bin:$HOME/app/node_modules/.bin\"" >> /home/web/.bashrc

# set env to production
RUN echo "export RAILS_ENV=production" >> /home/web/.bashrc

RUN cd /home/web && \
    git clone https://github.com/choltz/bankit.git && \
    cd bankit && \
    /home/web/apps/ruby/bin/gem install bundler && \
    /home/web/apps/ruby/bin/bundle install

ADD database.yml /home/web/bankit/config/database.yml

# RUN /bin/bash -l -c "export PATH=$PATH:$HOME/gems/bin &&\
#                      cd /home/web/apps/webapp &&\
#                      bundle install --without test development && \
#                      bundle update"

# used to bust the cache and get the latest copy from master
RUN echo 'deploy <<>>'

USER web
RUN cd home/web/bankit && \
    git checkout master && \
    rm package-lock.json && \
    git pull

EXPOSE 80

USER root

ADD start.sh /tmp
RUN chmod +x /tmp/start.sh
CMD /tmp/start.sh; touch /tmp/buh; tail -f /tmp/buh
