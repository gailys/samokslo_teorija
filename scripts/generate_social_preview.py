"""Generate the share card: python -m pip install Pillow; python scripts/generate_social_preview.py."""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
SCALE = 2
PAPER, INK, RED = '#eee9de', '#25251f', '#9a3328'
image = Image.new('RGB', (1200 * SCALE, 630 * SCALE), PAPER)
draw = ImageDraw.Draw(image)


def font(size, serif=False, bold=False):
    filename = ('georgiab.ttf' if bold else 'georgia.ttf') if serif else ('arialbd.ttf' if bold else 'arial.ttf')
    windows = Path('C:/Windows/Fonts') / filename
    fallback = Path('/usr/share/fonts/truetype/dejavu') / (
        ('DejaVuSerif' if serif else 'DejaVuSans') + ('-Bold' if bold else '') + '.ttf'
    )
    return ImageFont.truetype(str(windows if windows.exists() else fallback), size * SCALE)


def box(coords, fill, outline=None, width=1):
    draw.rectangle(tuple(int(x * SCALE) for x in coords), fill=fill, outline=outline, width=width * SCALE)


def line(coords, fill, width=1):
    draw.line(tuple(int(x * SCALE) for x in coords), fill=fill, width=width * SCALE)


def text(x, y, value, size, color=INK, serif=False, bold=False):
    draw.text((x * SCALE, y * SCALE), value, font=font(size, serif, bold), fill=color)


box((0, 0, 1200, 11), INK)
text(60, 43, 'neišaiškinta.', 38, serif=True, bold=True)
text(60, 105, 'NEPRIKLAUSOMAS DRAUGŲ TYRIMŲ BIURAS', 12)
line((60, 143, 663, 143), INK, 2)
box((60, 178, 249, 209), RED)
text(72, 185, 'SPECIALUS TYRIMAS', 14, PAPER, bold=True)
text(267, 186, 'BYLA NR. J–001', 13)
text(57, 235, 'Tomas sako,', 52, serif=True, bold=True)
text(57, 300, 'kad ji egzistuoja.', 52, serif=True, bold=True)
text(59, 378, 'Bet kur yra J?', 64, RED, bold=True)
text(62, 480, 'Vienas Tomas. Viena paslaptis.', 22)
text(62, 515, 'Ir gerokai per daug teorijų.', 22)
line((60, 571, 663, 571), '#c9c4b8')
text(61, 589, 'PROJEKTAS J  /  BYLA VIS DAR ATVIRA', 12, RED, bold=True)

# An original typographic dossier illustration, matching the site's CSS artwork.
box((719, 11, 1200, 630), '#332f2a')
for x in range(738, 1200, 36):
    line((x, 11, x, 630), '#403a32')
for y in range(25, 630, 36):
    line((719, y, 1200, y), '#403a32')
text(752, 48, 'NDTB / ARCHYVAS / J–001', 12, '#c0b5a0')
draw.ellipse((755*SCALE, 119*SCALE, 1163*SCALE, 527*SCALE), outline='#766b57', width=2)

photo = Image.new('RGBA', (263*SCALE, 358*SCALE), '#dcd5c3')
pd = ImageDraw.Draw(photo)
pd.rectangle((14*SCALE, 14*SCALE, 249*SCALE, 302*SCALE), fill='#575c4f')
pd.ellipse((77*SCALE, 67*SCALE, 188*SCALE, 212*SCALE), fill='#282c26')
pd.ellipse((26*SCALE, 187*SCALE, 239*SCALE, 372*SCALE), fill='#282c26')
pd.rectangle((0, 302*SCALE, 263*SCALE, 358*SCALE), fill='#dcd5c3')
pd.text((103*SCALE, 92*SCALE), '?', font=font(88, serif=True), fill='#d5d4bc')
pd.text((32*SCALE, 320*SCALE), 'J. — vaizdas neprieinamas', font=font(14), fill='#555044')
photo = photo.rotate(7, resample=Image.Resampling.BICUBIC, expand=True)
image.paste(photo, (799*SCALE, 137*SCALE), photo)
box((898, 126, 1004, 158), '#b4a68b')
box((840, 485, 1149, 548), '#332f2a', '#bd705a', 3)
text(862, 500, 'NEPATVIRTINTA', 29, '#d39075', bold=True)
text(765, 586, 'TOMAS: „BUS MATYT.“', 19, '#dcd5c3', bold=True)

output = ROOT / 'assets' / 'projektas-j-share-v1.jpg'
output.parent.mkdir(exist_ok=True)
image = image.resize((1200, 630), Image.Resampling.LANCZOS)
image.save(output, quality=91, optimize=True, progressive=True)
print(f'{output}: {image.width} x {image.height}, {output.stat().st_size} bytes')
