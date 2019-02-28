#!/usr/bin/env bash

################################################
# include the magic
################################################
test -f ./demo-magic.sh || curl --silent https://raw.githubusercontent.com/paxtonhare/demo-magic/master/demo-magic.sh > demo-magic.sh
. ./demo-magic.sh -n

################################################
# Configure the options
################################################

#
# speed at which to simulate typing. bigger num = faster
#
TYPE_SPEED=40

# Uncomment to run non-interactively
export PROMPT_TIMEOUT=1

# No wait
export NO_WAIT=true

#
# custom prompt
#
# see http://www.tldp.org/HOWTO/Bash-Prompt-HOWTO/bash-prompt-escape-sequences.html for escape sequences
#
#DEMO_PROMPT="${GREEN}➜ ${CYAN}\W "
DEMO_PROMPT="${GREEN}➜ ${CYAN}$ "

# hide the evidence
clear

### Please run these commands before running the script

# OPENSTACK_PASSWORD="my_secret_password"
# mkdir /var/tmp/test && cd /var/tmp/test
# docker run -it -rm -e USER="$USER" -e OPENSTACK_PASSWORD="$OPENSTACK_PASSWORD" -v /home/$USER/.ssh:/root/.ssh:ro -v $PWD:/mnt ubuntu
# apt-get update -qq && apt-get install -qq -y curl git pv > /dev/null
# git clone https://github.com/ruzickap/k8s-istio-workshop && cd k8s-istio-workshop
# ./run-k8s-istio-workshop.sh

sed -n '/^Install necessary software into the Docker container:$/,$p' docs/lab-{01..12}/README.md | \
sed -n '/^```bash$/,/^```$/p;/^-----$/p'  | \
sed -e 's/^-----$/\
p  ""\
p  "################################################################################################### Press <ENTER> to continue"\
wait\
/' \
-e 's/^```bash$/\
pe '"'"'/' \
-e 's/^```$/'"'"'/' \
> README.sh

source README.sh
