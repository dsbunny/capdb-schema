#!/bin/bash
# This script pulls the latest changes from the upstream repository's main branch
# and merges them into the current branch.

set -e

UPSTREAM_REPO_PATH="../melanie/packages/capdb-schema"
ERROR_SCHEMA_COMMIT=$(cd ../error-schema && git rev-parse --short HEAD)

rsync -av --delete "$UPSTREAM_REPO_PATH/src/." "src/."
rsync -av --delete \
	"$UPSTREAM_REPO_PATH/CHANGELOG.md" \
	"$UPSTREAM_REPO_PATH/LICENSE" \
	"$UPSTREAM_REPO_PATH/package.json" \
	"$UPSTREAM_REPO_PATH/README.md" \
	"$UPSTREAM_REPO_PATH/ROADMAP.md" \
	"$UPSTREAM_REPO_PATH/tsconfig.json" \
	"."

jq \
        --tab \
        --arg error_commit "$ERROR_SCHEMA_COMMIT" \
        '
        .peerDependencies["@dsbunny/error-schema"]   = "github:dsbunny/error-schema"                      |
        .devDependencies["@dsbunny/error-schema"]    = ("github:dsbunny/error-schema#" + $error_commit)
        ' package.json | sponge package.json

jq '.devDependencies | with_entries(select(.key | test("^@dsbunny/.*-schema$")))' package.json

