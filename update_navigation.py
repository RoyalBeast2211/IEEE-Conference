#!/usr/bin/env python3
"""
Script to update navigation in all HTML files
Swaps Committee and Special Sessions in desktop navigation:
- Committee moves into the More dropdown
- Special Sessions moves to main navbar (replacing Committee)
"""

import os
import re
from pathlib import Path

def update_navigation(file_path):
    """Update navigation in a single HTML file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Step 1: Find and capture the existing committee href path
        committee_match = re.search(r'<!-- Committee -->\s*\n\s*<li class="ieee-nav-item" role="none">\s*\n\s*<a\s+href="([^"]*)conference/committee\.html"', content, re.MULTILINE)
        
        if committee_match:
            path_prefix = committee_match.group(1)
            
            # Replace the standalone Committee menu item with Special Sessions
            committee_pattern = r'(\s*)<!-- Committee -->\s*\n\s*<li class="ieee-nav-item" role="none">\s*\n\s*<a\s+href="[^"]*conference/committee\.html"\s+class="ieee-nav-link"\s+role="menuitem"\s*>Committee</a\s*>\s*\n\s*</li>'
            
            special_sessions_replacement = f'\\1<!-- Special Sessions -->\n\\1<li class="ieee-nav-item" role="none">\n\\1  <a\n\\1    href="{path_prefix}conference/special-sessions.html"\n\\1    class="ieee-nav-link"\n\\1    role="menuitem"\n\\1    >Special Sessions</a\n\\1  >\n\\1</li>'
            
            content = re.sub(committee_pattern, special_sessions_replacement, content, flags=re.MULTILINE)
        
        # Step 2: Find and capture the existing special-sessions href path in dropdown
        special_sessions_match = re.search(r'<a\s+href="([^"]*)conference/special-sessions\.html"\s+class="ieee-dropdown-item"', content, re.MULTILINE)
        
        if special_sessions_match:
            path_prefix_dropdown = special_sessions_match.group(1)
            
            # Replace Special Sessions in More dropdown with Committee
            special_sessions_dropdown_pattern = r'(\s*)<a\s+href="[^"]*conference/special-sessions\.html"\s+class="ieee-dropdown-item"\s+role="menuitem"\s*>\s*\n\s*<div class="ieee-dropdown-item-content">\s*\n\s*<span class="ieee-dropdown-item-title"\s*>Special Sessions</span\s*>\s*\n\s*</div>\s*\n\s*</a>'
            
            committee_dropdown_replacement = f'\\1<a\n\\1  href="{path_prefix_dropdown}conference/committee.html"\n\\1  class="ieee-dropdown-item"\n\\1  role="menuitem"\n\\1>\n\\1  <div class="ieee-dropdown-item-content">\n\\1    <span class="ieee-dropdown-item-title"\n\\1      >Committee</span\n\\1    >\n\\1  </div>\n\\1</a>'
            
            content = re.sub(special_sessions_dropdown_pattern, committee_dropdown_replacement, content, flags=re.MULTILINE)
        
        # Check if any changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all HTML files"""
    # Get the base directory (where the script is located)
    base_dir = Path(__file__).parent
    
    # Find all HTML files
    html_files = list(base_dir.rglob('*.html'))
    
    print(f"Found {len(html_files)} HTML files")
    print("=" * 60)
    
    updated_count = 0
    
    for html_file in sorted(html_files):
        relative_path = html_file.relative_to(base_dir)
        if update_navigation(html_file):
            print(f"✓ Updated: {relative_path}")
            updated_count += 1
        else:
            print(f"  No changes: {relative_path}")
    
    print("=" * 60)
    print(f"\nSummary:")
    print(f"  Total files: {len(html_files)}")
    print(f"  Updated: {updated_count}")
    print(f"  Unchanged: {len(html_files) - updated_count}")
    print("\nNavigation update complete!")

if __name__ == "__main__":
    main()
