import glob
import re
import os

html_files = glob.glob('**/*.html', recursive=True)

updated_count = 0

for filepath in html_files:
    # Avoid node_modules or system files
    if 'node_modules' in filepath or '.git' in filepath:
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Check if IAS Events is already in navigation for this file
    if 'ias.html' in content and 'IAS Events' in content:
        print(f"Skipping {filepath} (IAS Events already in navigation)")
        continue
        
    modified = False
    
    # Match any <a> tags
    a_regex = re.compile(r'(<a\s+[^>]*?>.*?</a>)', re.DOTALL)
    matches = list(a_regex.finditer(content))
    
    # Process matches in reverse order so indices remain correct during string mutation
    for m in reversed(matches):
        a_tag = m.group(1)
        
        # We target links to syp.html that represent SYP Events
        if 'syp.html' in a_tag and 'SYP Events' in a_tag:
            prefix_match = re.search(r'href="([^"]*?)syp\.html"', a_tag)
            if not prefix_match:
                continue
            prefix = prefix_match.group(1)
            
            is_desktop = 'class="ieee-dropdown-item"' in a_tag or "class='ieee-dropdown-item'" in a_tag
            is_mobile = 'class="ieee-mobile-sublink"' in a_tag or "class='ieee-mobile-sublink'" in a_tag
            
            if is_desktop or is_mobile:
                # Duplicate the SYP block, replacing syp with ias
                new_tag = a_tag.replace('syp.html', 'ias.html').replace('SYP Events', 'IAS Events')
                
                # Settle spacing/indentation matching the preceding element
                preceding_snippet = content[max(0, m.start()-100) : m.start()]
                whitespace_match = re.search(r'(\n\s*)$', preceding_snippet)
                whitespace = whitespace_match.group(1) if whitespace_match else " "
                
                content = content[:m.start()] + a_tag + whitespace + new_tag + content[m.end():]
                modified = True
                
    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Successfully updated navigation in {filepath}")
        updated_count += 1

print(f"Done! Updated navigation menus in {updated_count} files.")
