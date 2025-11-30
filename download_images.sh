#!/bin/bash

mkdir -p public/mobiles

download_image() {
  filename=$1
  shift
  urls=("$@")
  
  for url in "${urls[@]}"; do
    echo "Trying $url..."
    if curl -s -f -o "public/mobiles/$filename" "$url"; then
      echo "Success: $filename"
      return 0
    fi
  done
  
  echo "Failed to download $filename"
  return 1
}

# Existing Phones
download_image "iphone-15-pro.jpg" "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg"
download_image "galaxy-s24-ultra.jpg" "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928.jpg" "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra.jpg"
download_image "pixel-8-pro.jpg" "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg"
download_image "oneplus-12.jpg" "https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg"

# Motorola 2024
download_image "motorola-edge-50-ultra.jpg" "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-ultra.jpg"
download_image "motorola-edge-50-pro.jpg" "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg"
download_image "motorola-razr-50-ultra.jpg" "https://fdn2.gsmarena.com/vv/bigpic/motorola-razr-50-ultra.jpg"
download_image "moto-g85-5g.jpg" "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g85.jpg"

# Xiaomi
download_image "xiaomi-14-ultra.jpg" "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg" "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra-2.jpg"
download_image "xiaomi-14-civi.jpg" "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-civi-4-pro.jpg"
download_image "redmi-note-13-pro-plus.jpg" "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13-pro-plus.jpg"
download_image "poco-f6-5g.jpg" "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f6.jpg"
download_image "xiaomi-15-pro.jpg" "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15-pro.jpg"

# Future Models (Copying existing images)
cp public/mobiles/motorola-edge-50-pro.jpg public/mobiles/motorola-edge-60-pro.jpg
cp public/mobiles/motorola-edge-50-pro.jpg public/mobiles/motorola-edge-60.jpg
cp public/mobiles/motorola-razr-50-ultra.jpg public/mobiles/motorola-razr-60-ultra.jpg
cp public/mobiles/moto-g85-5g.jpg public/mobiles/moto-g86-5g.jpg

# Budget
download_image "samsung-galaxy-m06-5g.jpg" "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m55.jpg" # Placeholder
download_image "samsung-galaxy-f06-5g.jpg" "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f55.jpg" # Placeholder
download_image "poco-m7-5g.jpg" "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m6-pro.jpg" # Placeholder
download_image "redmi-a4-5g.jpg" "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-a3.jpg" # Placeholder
download_image "redmi-14c-5g.jpg" "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-13c-5g.jpg" # Placeholder
download_image "moto-g35-5g.jpg" "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g34.jpg" # Placeholder
download_image "realme-narzo-80-lite.jpg" "https://fdn2.gsmarena.com/vv/bigpic/realme-narzo-70-pro.jpg" # Placeholder
download_image "lava-yuva-2-5g.jpg" "https://fdn2.gsmarena.com/vv/bigpic/lava-yuva-2-pro.jpg" # Placeholder
download_image "infinix-smart-10.jpg" "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-8.jpg" # Placeholder
download_image "tecno-spark-go-2025.jpg" "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-go-2024.jpg" # Placeholder

# Mid-Range
download_image "oneplus-nord-ce-5.jpg" "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce4.jpg" # Placeholder
download_image "oneplus-nord-ce-4.jpg" "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce4.jpg"
download_image "nothing-phone-3a.jpg" "https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-2a.jpg" # Placeholder
download_image "motorola-edge-50-fusion.jpg" "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-fusion.jpg"
download_image "motorola-edge-60-fusion.jpg" "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-fusion.jpg" # Placeholder
download_image "samsung-galaxy-a35.jpg" "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a35.jpg"
download_image "samsung-galaxy-a55.jpg" "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg"
download_image "poco-x6-pro.jpg" "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6-pro.jpg"
download_image "poco-x7-pro.jpg" "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6-pro.jpg" # Placeholder
download_image "iqoo-z9s-pro.jpg" "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z9s-pro.jpg"
download_image "vivo-t3-ultra.jpg" "https://fdn2.gsmarena.com/vv/bigpic/vivo-t3-ultra.jpg"
download_image "realme-14-pro-plus.jpg" "https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg" # Placeholder

# Premium Mid-Range
download_image "oneplus-13r.jpg" "https://fdn2.gsmarena.com/vv/bigpic/oneplus-12r.jpg" # Placeholder
download_image "realme-gt-7.jpg" "https://fdn2.gsmarena.com/vv/bigpic/realme-gt5.jpg" # Placeholder
download_image "vivo-v40-pro.jpg" "https://fdn2.gsmarena.com/vv/bigpic/vivo-v40-pro.jpg"
download_image "vivo-t4-ultra.jpg" "https://fdn2.gsmarena.com/vv/bigpic/vivo-t3-ultra.jpg" # Placeholder
download_image "google-pixel-8a.jpg" "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8a.jpg"
download_image "google-pixel-9a.jpg" "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8a.jpg" # Placeholder
download_image "samsung-galaxy-s23-fe.jpg" "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-fe.jpg"

# Flagship & Ultra-Premium
download_image "samsung-galaxy-s25-ultra.jpg" "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra.jpg" # Placeholder
download_image "google-pixel-9-pro.jpg" "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-pro.jpg"
download_image "google-pixel-9-pro-xl.jpg" "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-pro-xl.jpg"
download_image "google-pixel-10-pro.jpg" "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-pro.jpg" # Placeholder
download_image "oneplus-13.jpg" "https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg" # Placeholder
download_image "xiaomi-15-ultra.jpg" "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg" # Placeholder
download_image "vivo-x100-pro.jpg" "https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg"
download_image "motorola-razr-50-ultra.jpg" "https://fdn2.gsmarena.com/vv/bigpic/motorola-razr-50-ultra.jpg"
download_image "samsung-galaxy-z-flip-6.jpg" "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-flip6.jpg"
download_image "samsung-galaxy-z-fold-6.jpg" "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold6.jpg"
download_image "oneplus-open.jpg" "https://fdn2.gsmarena.com/vv/bigpic/oneplus-open.jpg"
