#!/usr/bin/env python3
"""
Script to fix navigation paths in all HTML files
Corrects the href paths for Special Sessions and Committee based on file location
"""

import os
import re
from pathlib import Path

def get_relative_path(file_path, base_dir):
    """Calculate the correct relative path prefix based on file location"""
    file_path = Path(file_path)
    base_dir = Path(base_dir)
    
    # Get relative path from file to base
    rel_path = file_path.relative_to(base_dir).parent
    
    # Count directory depth
    depth = len(rel_path.parts)
    
    if depth == 0:
        # Root level (index.html)
        return ""
    elif depth == 1:
        # One level deep (about/, conference/)
        return "../"
    elif depth == 2:
        # Two levels deep (conference/speakers/, conference/authors/, etc.)
        return "../../"
    else:
        return "../" * depth

def fix_navigation(file_path, base_dir):
    """Fix navigation paths in a single HTML file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Get the correct relative path for this file
        prefix = get_relative_path(file_path, base_dir)
        correct_special_sessions_path = f"{prefix}conference/special-sessions.html"
        correct_committee_path = f"{prefix}conference/committee.html"
        
        # Fix Special Sessions in main navbar (if exists)
        # Match the href with any path and replace with correct path
        special_sessions_navbar_pattern = r'(<li class="ieee-nav-item" role="none">\s*<a\s+href=")[^"]*special-sessions\.html(")'
        content = re.sub(special_sessions_navbar_pattern, f'\\1{correct_special_sessions_path}\\2', content, flags=re.MULTILINE)
        
        # Fix Committee in More dropdown (if exists)
        # Match specifically in dropdown items
        committee_dropdown_pattern = r'(<a\s+href=")[^"]*committee\.html("\s+class="ieee-dropdown-item")'
        content = re.sub(committee_dropdown_pattern, f'\\1{correct_committee_path}\\2', content, flags=re.MULTILINE)
        
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
        if fix_navigation(html_file, base_dir):
            print(f"✓ Updated: {relative_path}")
            updated_count += 1
        else:
            print(f"  No changes: {relative_path}")
    
    print("=" * 60)
    print(f"\nSummary:")
    print(f"  Total files: {len(html_files)}")
    print(f"  Updated: {updated_count}")
    print(f"  Unchanged: {len(html_files) - updated_count}")
    print("\nPath fix complete!")

if __name__ == "__main__":
    main()
