import os
import re

# Find all HTML files in the project recursively
html_files = []
for root, dirs, files in os.walk('.'):
    # Skip git and cache directories
    if '.git' in root or '.system_generated' in root or 'node_modules' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            html_files.append(os.path.join(root, file))

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Regex to capture all anchor tags, accounting for newlines in closing tags
    a_regex = re.compile(r'(<a\s+[^>]*?>.*?</a\s*>)', re.DOTALL)
    matches = list(a_regex.finditer(content))
    
    modified = False
    # Process in reverse order to preserve indices of preceding matches
    for m in reversed(matches):
        a_tag = m.group(1)
        if 'syp.html' in a_tag and 'SYP Events' in a_tag:
            # Check if this tag is desktop or mobile dropdown item
            is_desktop = 'class="ieee-dropdown-item"' in a_tag or "class='ieee-dropdown-item'" in a_tag
            is_mobile = 'class="ieee-mobile-sublink"' in a_tag or "class='ieee-mobile-sublink'" in a_tag
            
            if not (is_desktop or is_mobile):
                continue
                
            # Check if ias.html is already next to it in the HTML flow
            following_snippet = content[m.end() : m.end() + 200]
            if 'ias.html' in following_snippet:
                continue
                
            # Extract depth prefix from href
            prefix_match = re.search(r'href=\"([^\"]*?)syp\.html\"', a_tag)
            if not prefix_match:
                prefix_match = re.search(r"href=\'([^\']*?)syp\.html\'", a_tag)
            if not prefix_match:
                continue
            
            # Construct new tag replacing syp with ias
            new_tag = a_tag.replace('syp.html', 'ias.html').replace('SYP Events', 'IAS Events')
            
            # Get whitespace pattern before the tag for consistent indentation
            preceding_snippet = content[max(0, m.start()-100) : m.start()]
            whitespace_match = re.search(r'(\n\s*)$', preceding_snippet)
            whitespace = whitespace_match.group(1) if whitespace_match else ' '
            
            content = content[:m.start()] + a_tag + whitespace + new_tag + content[m.end():]
            modified = True
            
    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Successfully updated navigation in {filepath}")
