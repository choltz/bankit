# /bin/sh
service postgresql start

# the /bin/su call below runs code that relies on ruby being found in the path
ln -s /home/web/apps/ruby/bin/ruby /usr/bin
ln -s /usr/bin/nodejs /usr/bin/node

# configure postgresql
/bin/su - postgres -c "psql -c \"CREATE USER web;\" &&\
                       psql -c \"create database bankit_prod\""

# Configure the rails app
/bin/su - web -c "echo $PATH &&\
                  export SECRET_KEY_BASE=64743aa516abe1515a648c793aded42023e6df199999ea4e3acac77f229fd5733cf248970323d82ae33734180b907d629a5030ea2679e383c3992571d0bb3ef1 &&\
                  rm /home/web/app/tmp/pids/server.pid &&\
                  cd /home/web/app &&\
                  /home/web/apps/ruby/bin/gem install bundler &&\
                  /home/web/apps/ruby/bin/bundle install &&\
                  RAILS_ENV=production /home/web/apps/ruby/bin/rake db:migrate &&\
                  RAILS_ENV=production /home/web/apps/ruby/bin/rails server"
     # &&\
     #              npm install -g yarn &&\
     #              npm install -g brunch"
