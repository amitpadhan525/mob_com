#!/bin/bash

# Fix missing images by using placeholders from existing files

# Xiaomi 15 Ultra -> Xiaomi 14 Ultra
if [ -f "public/mobiles/xiaomi-14-ultra.jpg" ]; then
    cp "public/mobiles/xiaomi-14-ultra.jpg" "public/mobiles/xiaomi-15-ultra.jpg"
fi

# Moto G35 5G -> Moto G85 5G
if [ -f "public/mobiles/moto-g85-5g.jpg" ]; then
    cp "public/mobiles/moto-g85-5g.jpg" "public/mobiles/moto-g35-5g.jpg"
fi

# OnePlus Nord CE 4 -> OnePlus 12 (Temporary)
if [ -f "public/mobiles/oneplus-12.jpg" ]; then
    cp "public/mobiles/oneplus-12.jpg" "public/mobiles/oneplus-nord-ce-4.jpg"
fi

# Google Pixel 9 Pro -> Pixel 8 Pro
if [ -f "public/mobiles/pixel-8-pro.jpg" ]; then
    cp "public/mobiles/pixel-8-pro.jpg" "public/mobiles/google-pixel-9-pro.jpg"
fi

# Google Pixel 9 Pro XL -> Pixel 8 Pro
if [ -f "public/mobiles/pixel-8-pro.jpg" ]; then
    cp "public/mobiles/pixel-8-pro.jpg" "public/mobiles/google-pixel-9-pro-xl.jpg"
fi

# OnePlus Open -> OnePlus 12
if [ -f "public/mobiles/oneplus-12.jpg" ]; then
    cp "public/mobiles/oneplus-12.jpg" "public/mobiles/oneplus-open.jpg"
fi

# Infinix Smart 10 -> Tecno Spark Go 2025
if [ -f "public/mobiles/tecno-spark-go-2025.jpg" ]; then
    cp "public/mobiles/tecno-spark-go-2025.jpg" "public/mobiles/infinix-smart-10.jpg"
fi

echo "Placeholder images created."
