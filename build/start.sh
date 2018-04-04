# /bin/sh
service postgresql start

/bin/su - web -c "export PATH=\"$PATH:/home/web/bin:/home/web/apps/ruby/bin:/home/web/app/node_modules/.bin\" &&\
                  export SECRET_KEY_BASE=64743aa516abe1515a648c793aded42023e6df199999ea4e3acac77f229fd5733cf248970323d82ae33734180b907d629a5030ea2679e383c3992571d0bb3ef1 &&\
                  cd /home/web/bankit &&\
                  sleep 2 &&\
                  bundle install  --without test development &&\
                  RAILS_ENV=production rake db:migrate &&\
                  RAILS_ENV=production rake db:seed &&\
                  RAILS_ENV=production rails server"
