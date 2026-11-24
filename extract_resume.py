import zipfile, re, os, sys

resume_path = r'C:\Users\nived\OneDrive\Desktop\Resume_Nivedhitha_SV.docx'
project_dir = r'C:\Users\nived\OneDrive\Desktop\Nivedhitha_portfolio'
output_path = os.path.join(project_dir, 'resume.txt')

try:
    with zipfile.ZipFile(resume_path) as z:
        with z.open('word/document.xml') as f:
            xml = f.read().decode('utf-8')
    # Remove XML tags
    text = re.sub(r'<[^>]+>', '\n', xml)
    # Collapse multiple newlines and strip
    text = re.sub(r'\n+', '\n', text).strip()
    with open(output_path, 'w', encoding='utf-8') as out:
        out.write(text)
    print('Resume extracted to', output_path)
except Exception as e:
    sys.stderr.write(f'Error extracting resume: {e}\n')
    sys.exit(1)
