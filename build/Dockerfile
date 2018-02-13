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
RUN apt-get install -y build-essential emacs24-nox htop links2 curl git-core monit postgresql-client catdoc poppler-utils sudo wget unzip vim
RUN apt-get install -y bash curl patch bzip2 gawk libssl-dev make libc6-dev patch openssl curl zlib1g zlib1g-dev libyaml-dev libsqlite3-dev sqlite3 libgmp-dev libgdbm-dev libncurses5-dev bison pkg-config libffi-dev libgmp-dev libreadline6-dev
RUN apt-get install -y libxslt-dev libxml2-dev libpq-dev
RUN apt-get install -y postgresql nodejs npm
RUN apt-get upgrade -y

# Make a dedicated user for which to run the app
RUN useradd web -m -s /bin/bash
USER web

# Set up folders
RUN mkdir /home/web/bin
RUN mkdir /home/web/apps

# Build ruby
RUN cd /tmp && \
    wget https://cache.ruby-lang.org/pub/ruby/ruby-2.5.0.zip && \
    unzip ruby-2.5.0.zip && \
    cd ruby-2.5.0 && \
    ./configure --prefix=/home/web/apps/ruby && \
    make && \
    make install

# RUN ln -s /home/web/apps/ruby/bin/* /home/web/bin
RUN echo "export PATH=\"$PATH:$HOME/bin\"" >> /home/web/.bashrc
RUN echo "export PATH=\"$PATH:$HOME/apps/ruby/bin\"" >> /home/web/.bashrc
RUN echo "export PATH=\"$PATH:$HOME/app/node_modules/.bin\"" >> /home/web/.bashrc

# set env to production
RUN echo "export RAILS_ENV=production" >> /home/web/.bashrc


# ADD config/git/.git-credentials /home/web/.git-credentials
# User root
# RUN chown -R web:web /home/web/.git-credentials

# # Clone the repository
# User web
# RUN git config --global credential.helper store

# # Configure nginx
# User root
# ADD config/nginx/nginx.conf /etc/nginx/nginx.conf
# ADD config/nginx/mobile-api.conf /etc/nginx/sites-available/mobile-api.conf
# RUN ln -s /etc/nginx/sites-available/mobile-api.conf /etc/nginx/sites-enabled
# RUN rm /etc/nginx/sites-enabled/default

# # Fix the Log rotate config file to use the correct user. This accommodates the following
# # unfixed ubuntu ticket
# #
# # https://bugs.launchpad.net/ubuntu/+source/logrotate/+bug/1644996
# # RUN sed -i 's/^su root syslog/su root adm/' /etc/logrotate.conf

# # add root unicorn files
# RUN mkdir /etc/unicorn
# ADD config/unicorn/unicorn /etc/init.d/unicorn
# ADD config/unicorn/mobile-api.conf /etc/unicorn/mobile-api.conf

# # Add the monit script
# ADD monitrc /etc/monit/monitrc
# RUN chmod 700 /etc/monit/monitrc

# # Configure the log rotate script
# ADD config/logrotate/rails /etc/logrotate.d/rails
# RUN chmod 400 /etc/logrotate.d/rails

# # Add the start up script
# ADD start.sh /home/web/bin/start.sh

# # Initial pull and gem fetch for the app. Since each step in this dockerfile
# # is cached, this ensures that the source and gems are already present
# # from the previous build.
# #
# # When the echo statement below is updated, it breaks the cache from that point
# # forward and re-runs the gem fetch and pull against the app that is already
# # cached in this step
# RUN echo 'latest source snapshot - 2015-09-02'

# USER web
# RUN cd /home/web/apps && \
#     git clone --progress --verbose https://gitlab.com/i4cp/mobile-api.git && \
#     cd mobile-api && \
#     git checkout master && \
#     git submodule init && \
#     git submodule update

# RUN ln -s /home/web/apps/mobile-api /home/web/apps/mobile-api/current
# RUN ln -s /home/web/apps/mobile-api /home/web/current
# RUN mkdir -p /home/web/apps/mobile-api/tmp/pids
# RUN mkdir -p /home/web/apps/mobile-api/tmp/sockets

# RUN /bin/bash -l -c "cd /home/web/apps/mobile-api && \
#                      gem install bundler && \
#                      bundle install --without test development"

# # add rails config files
# ADD config/rails/database.yml     /home/web/apps/mobile-api/config/database.yml
# ADD config/rails/secrets.yml      /home/web/apps/mobile-api/config/secrets.yml
# ADD config/rails/amazon_s3.yml    /home/web/apps/mobile-api/config/amazon_s3.yml

# used to bust the cache and get the latest copy from master
RUN echo 'deploy <<20180201-224726-36>>'

# USER web
# RUN cd /home/web/apps/mobile-api && \
#     git checkout master && \
#     git pull && \
#     git submodule init && \
#     git submodule update

# RUN /bin/bash -l -c "cd /home/web/apps/mobile-api && \
#                      bundle install --without test development"

# EXPOSE 80


USER root

ADD start.sh /tmp
RUN chmod +x /tmp/start.sh
# CMD /tmp/start.sh; touch /tmp/buh; tail -f /tmp/buh
CMD touch /tmp/buh; tail -f /tmp/buh

# CMD /home/web/bin/start.sh; tail -f /var/log/nginx/access.log
# CMD touch /tmp/buh; tail -f /tmp/buh
