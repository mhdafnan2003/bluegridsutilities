"""Generate responsive WebP + JPEG renditions of the source photos used by the site.

Run from the client folder:  python scripts/optimize_images.py
Output: src/assets/optimized/<key>-<width>.webp / .jpg  (consumed by src/data/images.js)
"""
import os
from PIL import Image, ImageOps

SRC = 'src/assets/images'
OUT = 'src/assets/optimized'
WIDTHS = [480, 960, 1600]

# key -> source file (relative to SRC)
IMAGES = {
    'team-van': 'WhatsApp Image 2026-09-22 at 9.30.54 AM.jpeg',
    'office-team': 'edb132ce-4e08-43ea-aef4-5ba3888c1c01.JPG',
    'meter-chamber': 'water meter suoort bluegrids.jpeg',
    'water-installation': 'Water meter installation support.jfif',
    'water-valve': 'Sectors/Water utilities.jpg',
    'excavation-team': 'dcf7a6e6-b3c4-4ee3-9740-8f88f8ba842a.jpg',
    'site-briefing': '3160d5a7-dd23-46a3-9ab8-9ee7907fbc98.jpg',
    'site-briefing-portrait': 'de40f788-8696-4e19-bb08-565d2e68c1af.jpg',
    'site-team-barriers': 'bluegrids hero.jpeg',
    'site-dig': '1550ea50-f62d-4c3b-828b-3713f9c44355.jpg',
    'site-ground-work': '69ae7055-85da-4e51-b149-774a1e451c65.jpg',
    'street-works-lead': 'leadership_responsibilities_street_works.jpg',
    'capability-meeting': 'project_delivery_capability_statement.jpg',
    'capability-meeting-wide': '26411341-cb03-4736-aa5b-488fc975bdc5.JPG',
    'careers-field': 'careers_field_operations.jpg',
    'careers-team': 'careers_hero_team.jpg',
    'careers-management': 'careers_management_specialist.jpg',
    'careers-project-support': 'careers_project_support.jpg',
    'careers-supervision': 'careers_supervision.jpg',
    'rams-briefing': 'rams_workforce_briefing.jpg',
    'community-care': 'nuisance_prevention_community.jpg',
    'civils-excavation': 'civil_engineering_excavation.jpg',
    'street-works-site': 'street_works_mobilisation.jpg',
    'portrait-selbert': 'updated/SELBERT GEORGE.jpeg',
    'portrait-albert': 'updated/Albert .jpeg',
    'portrait-gautham': 'updated/And goutham raj.jpeg',
    'office-planning': 'projectcordination.jpeg',
}

import json
os.makedirs(OUT, exist_ok=True)
manifest = {}
for key, rel in IMAGES.items():
    im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, rel))).convert('RGB')
    ow, oh = im.size
    entry = {'width': ow, 'height': oh, 'webp': [], 'jpg': None}
    for w in WIDTHS:
        tw = min(w, ow)
        if w != WIDTHS[0] and tw == min(WIDTHS[WIDTHS.index(w) - 1], ow) and ow < w:
            continue  # do not emit duplicate renditions of small sources
        th = round(oh * tw / ow)
        r = im.resize((tw, th), Image.LANCZOS)
        r.save(f'{OUT}/{key}-{tw}.webp', 'WEBP', quality=76, method=6)
        entry['webp'].append(tw)
        if w == 960 or (ow < 960 and w == WIDTHS[-1]) or (ow < WIDTHS[-1] and w == WIDTHS[-1] and ow >= 960):
            r.save(f'{OUT}/{key}-{tw}.jpg', 'JPEG', quality=78, optimize=True, progressive=True)  # single JPEG fallback
            entry['jpg'] = tw
    manifest[key] = entry
    print(key, ow, oh)
with open('src/data/image-manifest.json', 'w') as f:
    json.dump(manifest, f, indent=1)
