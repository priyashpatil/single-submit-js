#!/bin/bash

FILE=../dist/single-submit.min.js
RELEASE=$(git describe --tags --abbrev=0)

chmod 600 ~/.config/rclone/rclone.conf

rclone --no-check-certificate --verbose copyto ${FILE} r2:${R2_BUCKET}/products/single-submit/releases/single-submit-${RELEASE}.min.js --progress
