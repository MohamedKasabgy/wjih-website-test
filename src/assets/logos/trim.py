from PIL import Image

def trim(im):
    im = im.convert("RGBA")
    # getbbox() looks for non-zero pixels. 
    # But for an RGBA image, it checks all channels. 
    # To trim based purely on alpha:
    bg = Image.new("RGBA", im.size, (0, 0, 0, 0))
    diff = Image.composite(im, bg, im)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

files = ['WJIH.png', 'KAU.png', 'CIC.png']

for f in files:
    try:
        im = Image.open(f)
        trimmed = trim(im)
        trimmed.save(f)
        print(f"Trimmed {f}")
    except Exception as e:
        print(f"Error processing {f}: {e}")
