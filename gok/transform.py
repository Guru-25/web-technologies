from lxml import etree

xml_file = r'C:\Users\gokul\Documents\Model Lab sem 5\WEB\xml\gokul.xml'
xslt_file = r'C:\Users\gokul\Documents\Model Lab sem 5\WEB\xml\msort.xsl'

xml = etree.parse(xml_file)
xslt = etree.parse(xslt_file)

transform = etree.XSLT(xslt)
result = transform(xml)

with open(r'C:\Users\gokul\Documents\Model Lab sem 5\WEB\main.html', 'wb') as f:
    f.write(etree.tostring(result, pretty_print=True))

print("Transformation completed. Check main.html for results.")
