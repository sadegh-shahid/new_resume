import os
import re

mappings = {
    # Typography
    r'text-\[clamp\(3rem, 8vw, 6.5rem\)\]': 'text-display',
    r'text-\[clamp\(2.2rem, 5vw, 3.5rem\)\]': 'text-headline',
    r'text-\[clamp\(1.5rem, 3vw, 2.2rem\)\]': 'text-subhead',
    r'text-xl': 'text-subhead',
    r'text-3xl': 'text-headline',
    r'text-5xl': 'text-display',
    r'text-lead': 'text-lead', # already semantic but ensuring consistency
    r'text-body': 'text-body',
    r'text-caption': 'text-caption',

    # Spacing (Inverted legacy if any, otherwise standard)
    r'section-quiet': 'section-pp',
    r'section-silent': 'section-p',
    r'section-standard': 'section-f',
    r'section-generous': 'section-ff',

    # Specific component patterns found in grep
    r'text-\[clamp\(2.2rem, 5vw, 3.5rem\)\]': 'text-headline',
    r'text-\[clamp\(1.4rem, 3vw, 1.8rem\)\]': 'text-subhead',
}

def migrate_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    new_content = content
    for pattern, replacement in mappings.items():
        new_content = re.sub(pattern, replacement, new_content)

    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Migrated: {filepath}")

# Components to migrate
components = [
    'src/components/About.tsx',
    'src/components/Projects.tsx',
    'src/components/Experience.tsx',
    'src/components/VisualWorks.tsx',
    'src/components/Hero.tsx',
    'src/components/Testimonials.tsx',
    'src/components/Contact.tsx',
    'src/App.tsx'
]

for component in components:
    if os.path.exists(component):
        migrate_file(component)

print("Migration complete.")
