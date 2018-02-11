# /bin/sh
service postgresql start

# configure postgresql
/bin/su - postgres -c "psql -c \"CREATE USER web;\""

# Configure the rails app
/bin/su - web -c "echo $PATH &&\
                  cd /home/web/app &&\
                  /home/web/apps/ruby/bin/gem install bundler &&\
                  /home/web/apps/ruby/bin/bundle install"
