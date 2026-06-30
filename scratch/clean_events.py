def clean_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    # Find all main-content starting tags
    main_indices = []
    for idx, line in enumerate(lines):
        if '<main' in line and 'main-content' in line:
            main_indices.append(idx)
            
    if len(main_indices) < 2:
        print(f"File {filepath} is already clean (only {len(main_indices)} main block(s)). Skipping.")
        return
        
    # We keep lines up to 1440 (end of first navigation menu)
    part1 = lines[:1440]
    
    # We find where the second main content block starts
    second_main_idx = main_indices[1]
    
    # Include the comment prefix if present
    start_idx = second_main_idx
    if second_main_idx > 0 and '<!-- Main Content -->' in lines[second_main_idx - 1]:
        start_idx = second_main_idx - 1
    elif second_main_idx > 1 and '<!-- Main Content -->' in lines[second_main_idx - 2]:
        start_idx = second_main_idx - 2
        
    part2 = lines[start_idx:]
    
    clean_lines = part1 + part2
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(clean_lines)
        
    print(f"Successfully cleaned {filepath}. Lines reduced from {len(lines)} to {len(clean_lines)}")

clean_file('conference/events/wie.html')
clean_file('conference/events/syp.html')
clean_file('conference/events/ias.html')
