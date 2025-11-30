#!/bin/bash

find_image() {
  url=$1
  echo "Checking $url..."
  content=$(curl -s "$url")
  image=$(echo "$content" | grep -o 'https://fdn2.gsmarena.com/vv/bigpic/[^"]*')
  echo "Image: $image"
}

find_image "https://www.gsmarena.com/samsung_galaxy_s24_ultra-12771.php"
find_image "https://www.gsmarena.com/xiaomi_14_ultra-12827.php"
find_image "https://www.gsmarena.com/google_pixel_8_pro-12545.php"
