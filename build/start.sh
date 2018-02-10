# /bin/sh
service postgresql start

# Configure the rails app
/bin/su - web -c "echo $PATH &&\
                  cd /home/web/app &&\
                  /home/web/apps/ruby/bin/gem install bundler &&\
                  /home/web/apps/ruby/bin/bundle install"
