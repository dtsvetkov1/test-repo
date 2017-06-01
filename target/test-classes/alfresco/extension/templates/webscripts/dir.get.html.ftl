<html>
  <head>
    <title>Folder ${folder.displayPath}/${folder.name}</title>
  </head>
  <body>
    <p>Alfresco ${server.edition} Edition v${server.version} : dir</p>
    <p>Contents of folder ${folder.displayPath}/${folder.name}</p>
    <table>
    <#list total_list as child>
       <tr>
           <#if verbose>
              <td>${child.child.name}</td>
              <td>${child.size}</td>
           </#if>
       </tr>
    </#list>
    </table>
  </body>
</html>