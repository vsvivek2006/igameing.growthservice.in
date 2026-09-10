#!/usr/bin/env python3
"""
Automated WebP Conversion Script for iGaming Growth
Scans target directories (public, src) for non-WebP raster images (.png, .jpg, .jpeg)
and automatically converts them to high-efficiency, visually lossless .webp format.
"""

import os
import sys
from pathlib import Path
from PIL import Image

# Ensure stdout handles utf-8 safely across Windows environments
if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

TARGET_DIRS = ['public', 'src']
EXTENSIONS = {'.png', '.jpg', '.jpeg'}

def convert_image(src_path: Path) -> Path:
    target_path = src_path.with_suffix('.webp')
    with Image.open(src_path) as img:
        if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
            img = img.convert('RGBA')
        else:
            img = img.convert('RGB')
        
        img.save(target_path, 'WEBP', quality=92, method=6)
        
    src_size = src_path.stat().st_size
    target_size = target_path.stat().st_size
    savings = (1 - (target_size / src_size)) * 100 if src_size > 0 else 0
    print(f"[CONVERTED] {src_path.name} -> {target_path.name} ({src_size//1024}KB -> {target_size//1024}KB, -{savings:.1f}%)")
    return target_path

def main():
    root = Path(__file__).resolve().parent.parent
    converted = 0
    
    print(f"[SCAN] Scanning directories for raster images to convert to WebP in {root}...")
    for dir_name in TARGET_DIRS:
        target_dir = root / dir_name
        if not target_dir.exists():
            continue
        for ext in EXTENSIONS:
            for file_path in target_dir.rglob(f"*{ext}"):
                convert_image(file_path)
                converted += 1
                
    if converted == 0:
        print("[OK] All images are in WebP format. No conversions needed.")
    else:
        print(f"[DONE] Successfully converted {converted} image(s) to WebP.")

if __name__ == '__main__':
    main()
