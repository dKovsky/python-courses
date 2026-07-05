import os

dir = r'C:\Users\dmytr\Desktop\snippets\snippets-python\highlight\styles'
css_option = []

# Iterate over files in the directory
for file in os.listdir(dir):
    if file.endswith('.css'):
        css_option.append(file.replace('.css', ''))  # Remove .css extension

# Generate JavaScript conditions
# for option in css_option:
    # if option != 'atom-one-dark':
        # line = f'''    }} else if (selectedTheme === '{option}') {{
            # loadCSS('{option}');
        # '''
        # print(line)


# Ensure 'atom-one-dark' is first in the list
if 'atom-one-dark' in css_option:
    css_option.remove('atom-one-dark')
    css_option.insert(0, 'atom-one-dark')

# Generate HTML <select> options
print('<select id="code-theme-switcher">')

for index, option in enumerate(css_option):
    selected = ' selected' if index == 0 else ''  # Select the first option by default
    print(f'    <option value="{option}"{selected}>{option.replace("-", " ").title()}</option>')

print('</select>')