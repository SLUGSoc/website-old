FROM ruby:2.5.1
RUN apt update
RUN apt install gpg curl make -y
RUN gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
RUN curl https://cache.ruby-lang.org/pub/ruby/2.5/ruby-2.5.1.tar.gz > ruby.tar.gz
RUN tar -xzf ruby.tar.gz
RUN gem install bundler
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt install -y nodejs
RUN npm install -g yarn
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
CMD ["make", "build"]
