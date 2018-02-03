FROM ubuntu:16.04
MAINTAINER choltz

# Setup base dependencies
RUN apt-get -y update && \
    apt-get install -y build-essential emacs24-nox htop links2 curl git-core monit wget

RUN cd /tmp
RUN wget https://cache.ruby-lang.org/pub/ruby/ruby-2.5.0.zip

# Install RVM
# RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys B97B0AFCAA1A47F044F244A07FCC7D46ACCC4CF8
# RUN useradd web -m -s /bin/bash
# USER web
# RUN cd && \
#     gpg --keyserver hkp://keys.gnupg.net:80 --recv-keys D39DC0E3 && \
#     curl -sSL https://get.rvm.io | bash -s stable
# USER root
# RUN /home/web/.rvm/bin/rvm requirements
# USER web
# RUN /bin/bash -l -c "rvm install ruby-2.3.1"

# # set env to produciton
# RUN echo "export RAILS_ENV=production" >> /home/web/.bashrc

# # Install app dependencies
# USER root
# RUN apt-get update
# RUN apt-get install -y nginx python2.7 nodejs libxslt-dev libxml2-dev libpq-dev
# USER web

# # Set up folders
# RUN mkdir /home/web/bin
# RUN mkdir /home/web/apps

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
# CMD /home/web/bin/start.sh; tail -f /var/log/nginx/access.log
CMD touch /tmp/buh; tail -f /tmp/buh
