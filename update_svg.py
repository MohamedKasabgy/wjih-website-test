import re

with open('src/assets/images/NewLogo.svg', 'r') as f:
    content = f.read()

# Insert the new filter in <defs>
defs_end = content.find('</defs>')
new_filter = '<filter id="darkRed"><feColorMatrix type="matrix" values="0 0 0 0 0.353 0 0 0 0 0.051 0 0 0 0 0.071 0 0 0 1 0"/></filter>'
content = content[:defs_end] + new_filter + content[defs_end:]

# Wrap the main <g> with the filter
# Find the first <g> after </defs>
g_start = content.find('<g>', defs_end)
content = content[:g_start] + '<g filter="url(#darkRed)">' + content[g_start:]

# Add closing </g> before </svg>
svg_end = content.find('</svg>')
content = content[:svg_end] + '</g>' + content[svg_end:]

with open('src/assets/images/NewLogoDarkRed.svg', 'w') as f:
    f.write(content)
