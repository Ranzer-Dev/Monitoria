import zipfile
import xml.etree.ElementTree as ET
import sys

def extract_text_from_docx(docx_path):
    with zipfile.ZipFile(docx_path, 'r') as docx_zip:
        xml_content = docx_zip.read('word/document.xml')
        tree = ET.fromstring(xml_content)
        
        namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        text = []
        for paragraph in tree.findall('.//w:p', namespaces):
            para_text = []
            for run in paragraph.findall('.//w:t', namespaces):
                if run.text:
                    para_text.append(run.text)
            text.append(''.join(para_text))
            
        return '\n'.join(text)

try:
    print(extract_text_from_docx('d:/Projetos/Monitoria/Monitoria_template_PT_simplificado_2026-OTH.docx'))
except Exception as e:
    print(f"Error: {e}")
