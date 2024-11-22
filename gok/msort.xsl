<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/">
        <html>
            <head>
                <title>
                    Gokul
                </title>
                <style>
                    table{
                        width:100%;
                        border:1px solid black;
                    }
                    tr,td{
                        border:1px solid black;
                        padding:8px;
                        text-align:center;
                    }
                </style>
            </head>
            <body>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Box Office</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:apply-templates select="/Gokul/Movies/Movie">
                            <xsl:sort select="normalize-space(name)" order="ascending" data-type="text"/>
                        </xsl:apply-templates>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="Movie">
        <tr>
            <td><xsl:value-of select="normalize-space(name)"/></td>
            <td><xsl:value-of select="normalize-space(BoxOffice)"/></td>
        </tr>
    </xsl:template>
</xsl:stylesheet>