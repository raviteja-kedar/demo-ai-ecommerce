#!/bin/bash

source ~/.gitrc

if [ -z "$GITHUB_PERSONAL_ACCESS_TOKEN" ]; then
    echo "GITHUB_PERSONAL_ACCESS_TOKEN is not set"
    exit 1
fi

export GITHUB_PERSONAL_ACCESS_TOKEN="$GITHUB_PERSONAL_ACCESS_TOKEN"

npx -y @modelcontextprotocol/server-github mcp start

