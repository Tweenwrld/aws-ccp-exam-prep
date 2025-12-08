import markdown
import sys

def convert_md_to_html(md_file, html_file):
    with open(md_file, 'r', encoding='utf-8') as f:
        text = f.read()
        
    html = markdown.markdown(text, extensions=['extra', 'codehilite', 'tables'])
    
    # Add some basic CSS for professional look
    css = """
    <style>
        body { font-family: 'Segoe UI', Roboto, sans-serif; line-height: 1.6; max-width: 900px; margin: 0 auto; padding: 40px; color: #333; }
        h1 { color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 15px; margin-bottom: 40px; text-align: center; }
        h2 { margin-top: 50px; border-bottom: 2px solid #ecf0f1; padding-bottom: 10px; color: #2980b9; }
        h3 { margin-top: 25px; color: #16a085; font-size: 1.2em; text-transform: uppercase; letter-spacing: 1px; }
        
        /* Question Text */
        p strong { color: #2c3e50; font-size: 1.1em; display: block; margin-bottom: 15px; }
        
        /* Options */
        ul { list-style-type: none; padding-left: 0; }
        li { margin-bottom: 8px; padding: 8px 15px; background: #f8f9fa; border-left: 3px solid #ddd; border-radius: 0 5px 5px 0; }
        
        /* Correct Answer Block */
        .admonition.tip { 
            background-color: #e8f8f5; 
            border-left: 5px solid #2ecc71; 
            padding: 15px; 
            margin: 20px 0; 
            border-radius: 5px;
        }
        .admonition-title { font-weight: bold; color: #27ae60; margin-bottom: 5px; display: block; }
        
        /* Explanation */
        blockquote { 
            border-left: 4px solid #3498db; 
            padding: 20px 25px; 
            color: #555; 
            background: #f0f7fb; 
            margin: 30px 0; 
            border-radius: 5px; 
        }
        blockquote h3 {
            color: #2980b9;
            border-bottom: 1px solid #a9cce3;
            padding-bottom: 8px;
            margin-top: 30px;
            margin-bottom: 15px;
        }
        blockquote ul { list-style-type: disc; padding-left: 20px; margin-top: 20px; }
        blockquote li { 
            background: transparent; 
            border: none; 
            padding: 12px 0; 
            margin-bottom: 15px;
            color: #444;
            line-height: 1.8;
        }
        blockquote li::marker {
            color: #3498db; /* Blue dot */
            font-size: 1.2em;
        }
        
        /* Tables */
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 25px 0;
            font-size: 0.95em;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
            border-radius: 5px;
            overflow: hidden;
            border: 1px solid #ddd;
        }
        th, td {
            padding: 15px 18px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            border-right: 1px solid #ddd;
        }
        th:last-child, td:last-child {
            border-right: none;
        }
        th {
            background-color: #3498db;
            color: #ffffff;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        tr:hover {
            background-color: #f1f1f1;
        }
        
        a { color: #3498db; text-decoration: none; font-weight: 500; }
        a:hover { text-decoration: underline; color: #2980b9; }
        
        /* Code blocks */
        code { background: #f4f4f4; padding: 2px 5px; border-radius: 3px; font-family: 'Consolas', monospace; }
        pre { background: #2c3e50; color: #ecf0f1; padding: 15px; border-radius: 5px; overflow-x: auto; }
        
        hr { 
            border: 0; 
            height: 1px; 
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)); 
            margin: 40px 0; 
        }
    </style>
    """
    
    full_html = f"<!DOCTYPE html><html><head><meta charset='utf-8'>{css}</head><body>{html}</body></html>"
    
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(full_html)

if __name__ == "__main__":
    convert_md_to_html("Amazon.md", "Amazon.html")
