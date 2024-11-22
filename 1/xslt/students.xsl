<!-- <?xml version="1.0" encoding="UTF-8"?> -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <!-- Match the root element 'students' -->
    <xsl:template match="/students">
        <html>
            <!-- <head>
                <style>
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }
                    table, th, td {
                        border: 1px solid black;
                    }
                    th, td {
                        padding: 8px;
                        text-align: left;
                    }
                </style>
            </head> -->
            <body>
                <h1>Student Information</h1>
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Apply template to each student node -->
                        <xsl:for-each select="student">
                            <tr>
                                <td><xsl:value-of select="id" /></td>
                                <td><xsl:value-of select="name" /></td>
                                <td><xsl:value-of select="age" /></td>
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>
    
</xsl:stylesheet>
