#!/bin/bash

mkdir -p ~/.config/rclone/ && cat <<EOF >~/.config/rclone/rclone.conf
[r2]
type=s3
provider=Cloudflare
access_key_id=${R2_ACCESS_KEY}
secret_access_key=${R2_SECRET_KEY}
endpoint=https://${CF_ACCOUNT_ID}.r2.cloudflarestorage.com
acl=private
EOF
